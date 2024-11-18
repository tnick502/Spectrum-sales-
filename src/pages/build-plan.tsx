import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { INTERNET_TIERS, TV_PACKAGES, MOBILE_PLANS } from '@/lib/constants';
import { calculateBundle } from '@/lib/utils';
import { Package, Lock } from 'lucide-react';

export function BuildPlanPage() {
  const [selectedServices, setSelectedServices] = useState({
    internet: '',
    tv: '',
    mobileLines: 0,
    mobilePlan: '',
  });

  const bundleCalculation = calculateBundle(
    selectedServices.internet,
    selectedServices.tv,
    selectedServices.mobileLines,
    selectedServices.mobilePlan
  );

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Build Your Spectrum Plan</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Select Your Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Internet Package</label>
              <Select
                value={selectedServices.internet}
                onValueChange={(value) => setSelectedServices(prev => ({ ...prev, internet: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Internet Package" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(INTERNET_TIERS).map(([key, tier]) => (
                    <SelectItem key={key} value={key}>
                      {tier.name} - ${tier.bundleRate}/mo
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">TV Package</label>
              <Select
                value={selectedServices.tv}
                onValueChange={(value) => setSelectedServices(prev => ({ ...prev, tv: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select TV Package" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(TV_PACKAGES).map(([key, pkg]) => (
                    <SelectItem key={key} value={key}>
                      {pkg.name} - ${pkg.bundleRate}/mo
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Mobile Lines</label>
              <Input
                type="number"
                min="0"
                value={selectedServices.mobileLines}
                onChange={(e) => setSelectedServices(prev => ({ ...prev, mobileLines: Number(e.target.value) }))}
              />
            </div>

            {selectedServices.mobileLines > 0 && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Mobile Plan</label>
                <Select
                  value={selectedServices.mobilePlan}
                  onValueChange={(value) => setSelectedServices(prev => ({ ...prev, mobilePlan: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Mobile Plan" />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedServices.mobileLines === 1 ? (
                      <>
                        <SelectItem value="ONE_LINE_FREE">1 Line - Free for 12 Months</SelectItem>
                        <SelectItem value="UNLIMITED_PLUS">1 Line - Unlimited Plus</SelectItem>
                      </>
                    ) : (
                      <>
                        <SelectItem value="UNLIMITED_PLUS">Unlimited Plus</SelectItem>
                        <SelectItem value="UNLIMITED">Unlimited</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Plan Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {bundleCalculation.services.length > 0 ? (
                <>
                  <div className="space-y-2">
                    {bundleCalculation.services.map((service, index) => (
                      <div key={index}>
                        <p className="font-medium">{service}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t space-y-2">
                    <p className="text-lg font-bold">
                      Monthly Total: ${bundleCalculation.total.toFixed(2)}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Lock className="h-4 w-4 mr-1" />
                      Price Lock Guarantee: {bundleCalculation.term} months
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Bundle Type: {bundleCalculation.bundleType}
                    </p>
                  </div>
                </>
              ) : (
                <p className="text-muted-foreground">
                  Select services to see your plan summary
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}