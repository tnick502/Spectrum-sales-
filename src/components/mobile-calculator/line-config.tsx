import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ALL_DEVICES, PLAN_TYPES } from "@/lib/constants/mobile-plans";

interface Device {
  deviceType: string;
  planType: string;
  byod: boolean;
  activationFee: boolean;
}

interface LineConfigProps {
  index: number;
  device: Device;
  onUpdate: (index: number, field: keyof Device, value: any) => void;
}

export function LineConfig({ index, device, onUpdate }: LineConfigProps) {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>Line {index + 1}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id={`byod-${index}`}
            checked={device.byod}
            onCheckedChange={(checked) => onUpdate(index, 'byod', checked)}
          />
          <label htmlFor={`byod-${index}`}>Bring Your Own Device</label>
        </div>

        {!device.byod && (
          <Select
            value={device.deviceType}
            onValueChange={(value) => onUpdate(index, 'deviceType', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a device" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(ALL_DEVICES).map(([id, device]) => (
                <SelectItem key={id} value={id}>
                  {device.name} - ${device.price}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        <Select
          value={device.planType}
          onValueChange={(value) => onUpdate(index, 'planType', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a plan" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(PLAN_TYPES).map(([id, plan]) => (
              <SelectItem key={id} value={id}>
                {plan.name} - ${plan.price}/mo
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex items-center space-x-2">
          <Checkbox
            id={`activation-${index}`}
            checked={device.activationFee}
            onCheckedChange={(checked) => onUpdate(index, 'activationFee', checked)}
          />
          <label htmlFor={`activation-${index}`}>Activation Fee ($20)</label>
        </div>
      </CardContent>
    </Card>
  );
}