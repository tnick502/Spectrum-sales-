import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, X, Smartphone, Shield, Globe, Wifi } from 'lucide-react';

const mobilePlans = [
  {
    name: 'Unlimited Plus',
    price: 45,
    features: [
      'Unlimited talk, text & data',
      'Unlimited mobile hotspot',
      '30GB premium data',
      'HD video streaming',
      'International calling features',
      'Scam protection included',
      'Mexico & Canada usage included'
    ],
    bestFor: 'Heavy data users & travelers',
    icon: Globe
  },
  {
    name: 'Unlimited',
    price: 30,
    features: [
      'Unlimited talk, text & data',
      '5GB mobile hotspot',
      '20GB premium data',
      'SD video streaming',
      'Scam protection included',
      'Mexico & Canada texting included'
    ],
    bestFor: 'Everyday users',
    icon: Smartphone
  },
  {
    name: 'By the Gig',
    price: 14,
    features: [
      '$14/GB of shared data',
      'Unlimited talk & text',
      'No speed restrictions',
      'Carry over unused data',
      'Share data across lines',
      'Scam protection included'
    ],
    bestFor: 'Light data users',
    icon: Shield
  }
];

const planComparison = [
  {
    feature: 'Monthly price (per line)',
    'Unlimited Plus': '$45',
    'Unlimited': '$30',
    'By the Gig': '$14/GB'
  },
  {
    feature: 'Premium data',
    'Unlimited Plus': '30GB',
    'Unlimited': '20GB',
    'By the Gig': 'N/A'
  },
  {
    feature: 'Mobile hotspot',
    'Unlimited Plus': 'Unlimited',
    'Unlimited': '5GB',
    'By the Gig': 'Uses data allowance'
  },
  {
    feature: 'Video quality',
    'Unlimited Plus': 'HD (720p)',
    'Unlimited': 'SD (480p)',
    'By the Gig': 'HD (720p)'
  },
  {
    feature: 'International features',
    'Unlimited Plus': 'Full access',
    'Unlimited': 'Limited',
    'By the Gig': 'Limited'
  }
];

export function MobilePlansPage() {
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Mobile Plans</h1>
        <p className="text-lg text-muted-foreground">
          Choose the perfect mobile plan for your needs
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 mb-16">
        {mobilePlans.map((plan) => (
          <Card key={plan.name} className="relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <plan.icon className="h-6 w-6 text-primary opacity-20" />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-lg">{plan.name}</span>
              </CardTitle>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">/mo per line</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Best for: {plan.bestFor}
              </p>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-6">Choose Plan</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Plan Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4">Feature</th>
                <th className="text-center py-4">Unlimited Plus</th>
                <th className="text-center py-4">Unlimited</th>
                <th className="text-center py-4">By the Gig</th>
              </tr>
            </thead>
            <tbody>
              {planComparison.map((row) => (
                <tr key={row.feature} className="border-b">
                  <td className="py-4">{row.feature}</td>
                  <td className="text-center py-4">{row['Unlimited Plus']}</td>
                  <td className="text-center py-4">{row['Unlimited']}</td>
                  <td className="text-center py-4">{row['By the Gig']}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}