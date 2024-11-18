import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LockKeyhole, Smartphone, ExternalLink } from 'lucide-react';
import { unlockingInstructions } from '@/lib/unlock-instructions';

export function UnlockingDevicesPage() {
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Device Unlocking Guide</h1>
        <p className="text-lg text-muted-foreground">
          Learn how to unlock your device from major carriers
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(unlockingInstructions).map(([carrier, info]) => (
          <Card key={carrier} className="h-full flex flex-col">
            <CardHeader className="bg-secondary/50">
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                {carrier}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4 flex-1">
                <div className="space-y-4">
                  {info.steps.map((step, index) => (
                    <div key={index} className="flex gap-3">
                      <Badge variant="outline" className="h-6 w-6 rounded-full shrink-0">
                        {Object.keys(step)[0]}
                      </Badge>
                      <p className="text-sm">{Object.values(step)[0]}</p>
                    </div>
                  ))}
                </div>
                
                {info.notes && (
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground">{info.notes}</p>
                  </div>
                )}
              </div>
              
              {info.url && (
                <div className="pt-4 mt-auto">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.open(info.url, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Carrier Instructions
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LockKeyhole className="h-5 w-5" />
              General Unlocking Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your device must be fully paid off</li>
              <li>Account must be in good standing</li>
              <li>Device must not be reported lost or stolen</li>
              <li>Most carriers require the device to be active for 40-60 days</li>
              <li>Have your IMEI number ready when contacting carrier support</li>
              <li>Military personnel may qualify for expedited unlocking</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}