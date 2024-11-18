import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { INTERNET_TIERS, TV_PACKAGES, MOBILE_PLANS } from '@/lib/constants';

interface SpectrumSelectorProps {
  onServiceSelect: (service: string, value: string) => void;
  mobileLineCount: number;
  selectedServices: {
    internet: string;
    tv: string;
    mobilePlan: string;
  };
}

export function SpectrumSelector({
  onServiceSelect,
  mobileLineCount,
  selectedServices,
}: SpectrumSelectorProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>New Spectrum Services</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Internet Package</label>
          <Select
            value={selectedServices.internet}
            onValueChange={(value) => onServiceSelect('internet', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Internet Package" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(INTERNET_TIERS).map(([key, tier]) => (
                <SelectItem key={key} value={key}>
                  {tier.name} - {tier.speed} Mbps
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">TV Package</label>
          <Select
            value={selectedServices.tv}
            onValueChange={(value) => onServiceSelect('tv', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select TV Package" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(TV_PACKAGES).map(([key, pkg]) => (
                <SelectItem key={key} value={key}>
                  {pkg.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {mobileLineCount > 0 && (
          <div className="space-y-2">
            <label className="text-sm font-medium">Mobile Plan</label>
            <Select
              value={selectedServices.mobilePlan}
              onValueChange={(value) => onServiceSelect('mobilePlan', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Mobile Plan" />
              </SelectTrigger>
              <SelectContent>
                {mobileLineCount === 1 ? (
                  <>
                    <SelectItem value="ONE_LINE_FREE">1 Line - Free for 12 Months</SelectItem>
                    <SelectItem value="UNLIMITED_PLUS">1 Line - Unlimited Plus</SelectItem>
                  </>
                ) : (
                  <>
                    <SelectItem value="UNLIMITED_PLUS">{mobileLineCount} Lines - Unlimited Plus</SelectItem>
                    <SelectItem value="UNLIMITED">{mobileLineCount} Lines - Unlimited</SelectItem>
                  </>
                )}
              </SelectContent>
            </Select>
          </div>
        )}
      </CardContent>
    </Card>
  );
}