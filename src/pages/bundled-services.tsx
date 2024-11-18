import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Wifi, Tv, Smartphone } from 'lucide-react';

const bundles = [
  {
    name: 'Triple Play Select',
    price: 109.97,
    services: ['Internet', 'TV Select', 'Mobile'],
    features: [
      'Up to 300 Mbps Internet',
      '125+ TV channels',
      'Unlimited Mobile (2 lines)',
      'Free Spectrum TV® App',
      'Advanced WiFi included',
      'No contracts required'
    ],
    savings: 45,
    term: 36,
    bestFor: 'Families wanting complete connectivity'
  },
  {
    name: 'Double Play Select',
    price: 89.98,
    services: ['Internet', 'TV Select'],
    features: [
      'Up to 300 Mbps Internet',
      '125+ TV channels',
      'Free Spectrum TV® App',
      'Advanced WiFi included',
      'No contracts required'
    ],
    savings: 30,
    term: 24,
    bestFor: 'Entertainment enthusiasts'
  },
  {
    name: 'Internet + Mobile',
    price: 79.98,
    services: ['Internet', 'Mobile'],
    features: [
      'Up to 300 Mbps Internet',
      'Unlimited Mobile (2 lines)',
      'Advanced WiFi included',
      '5G access included',
      'No contracts required'
    ],
    savings: 25,
    term: 24,
    bestFor: 'Mobile-first households'
  }
];

export function BundledServicesPage() {
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Bundle & Save</h1>
        <p className="text-lg text-muted-foreground">
          Combine services to maximize your savings with our best-value bundles
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {bundles.map((bundle) => (
          <Card key={bundle.name} className="relative overflow-hidden">
            <div className="absolute top-4 right-4 flex space-x-2">
              {bundle.services.includes('Internet') && (
                <Wifi className="h-5 w-5 text-primary" />
              )}
              {bundle.services.includes('TV Select') && (
                <Tv className="h-5 w-5 text-primary" />
              )}
              {bundle.services.includes('Mobile') && (
                <Smartphone className="h-5 w-5 text-primary" />
              )}
            </div>
            <CardHeader>
              <CardTitle>{bundle.name}</CardTitle>
              <div className="flex items-baseline space-x-2 mt-2">
                <span className="text-3xl font-bold">${bundle.price}</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <Badge variant="secondary" className="mt-2">
                Save ${bundle.savings}/mo
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Best for: {bundle.bestFor}
              </p>
              <ul className="space-y-2 mb-6">
                {bundle.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-sm text-muted-foreground mb-4">
                {bundle.term}-month price guarantee
              </div>
              <Button className="w-full">Select Bundle</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}