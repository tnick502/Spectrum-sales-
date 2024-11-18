import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Wifi, Tv, Smartphone, Check, Download, Upload, Globe } from 'lucide-react';

const internetServices = [
  {
    name: 'Spectrum Internet® Gig',
    speed: '1000/35',
    price: 89.99,
    features: [
      'Up to 1000 Mbps download speeds',
      'Advanced WiFi 6 router included',
      'Free antivirus software',
      'No data caps',
      'No contracts required'
    ],
    bestFor: 'Heavy streaming, gaming & large households',
    icon: Globe
  },
  {
    name: 'Spectrum Internet® Ultra',
    speed: '500/20',
    price: 69.99,
    features: [
      'Up to 500 Mbps download speeds',
      'Advanced WiFi router included',
      'Free antivirus software',
      'No data caps',
      'No contracts required'
    ],
    bestFor: 'Multiple devices & 4K streaming',
    icon: Download
  },
  {
    name: 'Spectrum Internet®',
    speed: '300/10',
    price: 49.99,
    features: [
      'Up to 300 Mbps download speeds',
      'WiFi router included',
      'Free antivirus software',
      'No data caps',
      'No contracts required'
    ],
    bestFor: 'Everyday browsing & streaming',
    icon: Wifi
  }
];

const tvServices = [
  {
    name: 'Spectrum TV® Select',
    channels: '125+',
    price: 59.99,
    features: [
      'HD channels included',
      'Free Spectrum TV App',
      '85+ available network apps',
      'DVR service available',
      'Access to On Demand titles'
    ],
    bestFor: 'Sports & entertainment enthusiasts',
    icon: Tv
  },
  {
    name: 'Spectrum TV® Stream',
    channels: '75+',
    price: 34.99,
    features: [
      'Stream live TV anywhere',
      'Local broadcast channels',
      'Popular network channels',
      'No cable box required',
      'Cancel anytime'
    ],
    bestFor: 'Cord-cutters & streamers',
    icon: Globe
  },
  {
    name: 'Spectrum TV® Choice',
    channels: '15+',
    price: 39.99,
    features: [
      'Local broadcast channels',
      'Pick 15 channels you want',
      'Free Spectrum TV App',
      'Stream on multiple devices',
      'No annual contracts'
    ],
    bestFor: 'Selective viewers',
    icon: Tv
  }
];

export function StandardServicesPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Standard Services</h1>

      <Tabs defaultValue="internet" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
          <TabsTrigger value="internet">Internet</TabsTrigger>
          <TabsTrigger value="tv">TV</TabsTrigger>
        </TabsList>

        <TabsContent value="internet" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-3">
            {internetServices.map((service) => (
              <Card key={service.name} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <service.icon className="h-6 w-6 text-primary opacity-20" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-lg">{service.name}</span>
                  </CardTitle>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold">${service.price}</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  <Badge variant="secondary" className="mt-2">
                    {service.speed} Mbps
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Best for: {service.bestFor}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <Check className="h-4 w-4 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tv" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-3">
            {tvServices.map((service) => (
              <Card key={service.name} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <service.icon className="h-6 w-6 text-primary opacity-20" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-lg">{service.name}</span>
                  </CardTitle>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold">${service.price}</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  <Badge variant="secondary" className="mt-2">
                    {service.channels} Channels
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Best for: {service.bestFor}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <Check className="h-4 w-4 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}