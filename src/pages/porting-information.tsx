import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Phone, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { carriers, formatCarrierInfo } from '@/lib/carriers';

export function PortingInformationPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});

  const filteredCarriers = Object.entries(carriers).filter(([name]) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleCard = (carrierName: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [carrierName]: !prev[carrierName]
    }));
  };

  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Porting Information</h1>
        <p className="text-lg text-muted-foreground">
          Find the information you need to port your number to Spectrum Mobile
        </p>
      </div>

      <div className="max-w-xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for your carrier..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCarriers.map(([name, info]) => {
          const formattedInfo = formatCarrierInfo(info);
          const isExpanded = expandedCards[name];
          
          return (
            <Card key={name} className="h-full flex flex-col">
              <CardHeader className="bg-secondary/50">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span>{name}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleCard(name)}
                    className="ml-2"
                  >
                    {isExpanded ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 flex-1">
                <div className="space-y-4">
                  {formattedInfo.slice(0, isExpanded ? undefined : 3).map(({ label, value }, index) => (
                    <div key={index} className="border-b pb-2 last:border-0">
                      <p className="font-medium capitalize text-sm">{label}</p>
                      <p className="text-sm text-muted-foreground mt-1">{value}</p>
                    </div>
                  ))}
                  {formattedInfo.length > 3 && !isExpanded && (
                    <Button
                      variant="ghost"
                      className="w-full text-primary"
                      onClick={() => toggleCard(name)}
                    >
                      Show More
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              Important Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Have all required information ready before starting the port process</li>
              <li>Ensure your device is unlocked from your current carrier</li>
              <li>Keep your current service active until the port is complete</li>
              <li>Port-in may take 2-24 hours depending on your current carrier</li>
              <li>Contact Spectrum Mobile support if you need assistance</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}