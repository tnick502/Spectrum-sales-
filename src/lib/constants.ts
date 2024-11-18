export const INTERNET_TIERS = {
  GIG: {
    name: 'Spectrum Internet Gig',
    speed: '1000/35',
    singlePlayRate: 70,
    bundleRate: 40,
    standardRate: 100,
    includesWifi: true
  },
  PREMIER: {
    name: 'Spectrum Internet Premier',
    speed: '500/20',
    singlePlayRate: 50,
    bundleRate: 30,
    standardRate: 80,
    includesWifi: false
  },
  ADVANTAGE: {
    name: 'Spectrum Internet Advantage',
    speed: '100/10',
    singlePlayRate: 30,
    bundleRate: 20,
    standardRate: 50,
    includesWifi: false
  }
} as const;

export const TV_PACKAGES = {
  SELECT_PLUS: {
    name: 'TV Select Plus',
    bundleRate: 105,
    standardRate: 125
  },
  SELECT: {
    name: 'TV Select',
    bundleRate: 100,
    standardRate: 120
  },
  SIGNATURE: {
    name: 'TV Signature',
    bundleRate: 95,
    standardRate: 115
  },
  MI_PLAN: {
    name: 'Mi Plan Latino',
    bundleRate: 70,
    standardRate: 90
  },
  TV_CHOICE: {
    name: 'TV Choice',
    bundleRate: 75,
    standardRate: 80
  },
  TV_STREAM: {
    name: 'TV Stream',
    bundleRate: 40,
    standardRate: 40
  }
} as const;

export const MOBILE_PLANS = {
  UNLIMITED_PLUS: {
    name: 'Unlimited Plus',
    gigBundleRate: 30,
    standardRate: 40,
    additionalLineRate: 20
  },
  UNLIMITED: {
    name: 'Unlimited',
    bundleRate: 30,
    standardRate: 30,
    additionalLineRate: 15
  },
  ONE_LINE_FREE: {
    name: '1 Line Free',
    promoRate: 0,
    standardRate: 30,
    unlimitedPlusAddOn: 20
  }
} as const;