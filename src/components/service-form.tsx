import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wifi, Tv, Smartphone } from 'lucide-react';

interface ServiceFormProps {
  onServiceChange: (service: string, value: number) => void;
  values: {
    tvPackage: number;
    internetPackage: number;
    mobileLines: number;
    mobilePrice: number;
  };
}

export function ServiceForm({ onServiceChange, values }: ServiceFormProps) {
  return (
    <Card className="border-2">
      <CardHeader className="bg-secondary">
        <CardTitle className="text-xl flex items-center space-x-2">
          Current Services
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-4">
          <div className="relative">
            <div className="absolute left-3 top-7">
              <Tv className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tv-package" className="text-sm font-semibold">
                TV Package Cost
              </Label>
              <Input
                id="tv-package"
                type="number"
                min="0"
                value={values.tvPackage}
                onChange={(e) => onServiceChange('tvPackage', Number(e.target.value))}
                placeholder="Enter monthly cost"
                className="pl-10"
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-3 top-7">
              <Wifi className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="internet-package" className="text-sm font-semibold">
                Internet Package Cost
              </Label>
              <Input
                id="internet-package"
                type="number"
                min="0"
                value={values.internetPackage}
                onChange={(e) => onServiceChange('internetPackage', Number(e.target.value))}
                placeholder="Enter monthly cost"
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <div className="absolute left-3 top-7">
                <Smartphone className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile-lines" className="text-sm font-semibold">
                  Number of Mobile Lines
                </Label>
                <Input
                  id="mobile-lines"
                  type="number"
                  min="0"
                  value={values.mobileLines}
                  onChange={(e) => onServiceChange('mobileLines', Number(e.target.value))}
                  placeholder="Enter number of lines"
                  className="pl-10"
                />
              </div>
            </div>

            {values.mobileLines > 0 && (
              <div className="relative">
                <div className="absolute left-3 top-7">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile-price" className="text-sm font-semibold">
                    Total Mobile Cost
                  </Label>
                  <Input
                    id="mobile-price"
                    type="number"
                    min="0"
                    value={values.mobilePrice}
                    onChange={(e) => onServiceChange('mobilePrice', Number(e.target.value))}
                    placeholder="Enter monthly cost"
                    className="pl-10"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}