import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { INTERNET_TIERS, TV_PACKAGES, MOBILE_PLANS } from '@/lib/constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface BundleCalculation {
  total: number;
  bundleType: 'SINGLE' | 'DOUBLE' | 'TRIPLE';
  term: number;
  services: string[];
}

export function calculateBundle(
  selectedInternet: string,
  selectedTV: string,
  mobileLines: number,
  mobilePlanType: string
): BundleCalculation {
  let total = 0;
  let bundleType: 'SINGLE' | 'DOUBLE' | 'TRIPLE' = 'SINGLE';
  let term = 12;
  let services: string[] = [];
  let serviceCount = 0;

  // Internet calculation
  if (selectedInternet) {
    const internet = INTERNET_TIERS[selectedInternet as keyof typeof INTERNET_TIERS];
    services.push(internet.name);
    serviceCount++;
    
    // Check if qualifies for bundle pricing
    const hasBundle = (selectedTV && mobileLines >= 2) || selectedTV || mobileLines >= 2;
    total += hasBundle ? internet.bundleRate : internet.singlePlayRate;
    
    // Add WiFi if not included
    if (!internet.includesWifi && hasBundle) {
      total += 0; // Free with bundle
    } else if (!internet.includesWifi) {
      total += 10;
    }
  }

  // TV calculation
  if (selectedTV) {
    const tv = TV_PACKAGES[selectedTV as keyof typeof TV_PACKAGES];
    services.push(tv.name);
    serviceCount++;
    total += tv.bundleRate;
  }

  // Mobile calculation
  if (mobileLines >= 2) {
    const plan = mobilePlanType === 'UNLIMITED_PLUS' 
      ? MOBILE_PLANS.UNLIMITED_PLUS 
      : MOBILE_PLANS.UNLIMITED;
    services.push(`${mobileLines}x ${plan.name} Mobile`);
    serviceCount++; // Multiple lines count as a service
    
    // Calculate mobile cost based on plan and bundle status
    const lineRate = (mobilePlanType === 'UNLIMITED_PLUS' && selectedInternet === 'GIG') 
      ? plan.gigBundleRate 
      : plan.bundleRate;
      
    total += lineRate * mobileLines;
  } else if (mobileLines === 1) {
    const plan = MOBILE_PLANS.ONE_LINE_FREE;
    services.push('1x Mobile Line');
    // Single line doesn't count towards service count for bundle type
    total += mobilePlanType === 'UNLIMITED_PLUS' 
      ? plan.unlimitedPlusAddOn 
      : plan.promoRate;
  }

  // Determine bundle type and term based on service count
  if (serviceCount >= 3) {
    bundleType = 'TRIPLE';
    term = 36;
  } else if (serviceCount === 2) {
    bundleType = 'DOUBLE';
    term = 24;
  }

  return {
    total,
    bundleType,
    term,
    services
  };
}