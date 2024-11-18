import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ALL_DEVICES, PLAN_TYPES } from "@/lib/constants/mobile-plans";
import { LineSelector } from "@/components/mobile-calculator/line-selector";
import { LineConfig } from "@/components/mobile-calculator/line-config";
import { CostBreakdown } from "@/components/mobile-calculator/cost-breakdown";

interface Device {
  deviceType: string;
  planType: string;
  byod: boolean;
  activationFee: boolean;
}

export function MobileCalculatorPage() {
  const [numLines, setNumLines] = useState(1);
  const [devices, setDevices] = useState<Device[]>([{
    deviceType: "",
    planType: "UNLIMITED",
    byod: false,
    activationFee: true
  }]);
  const [currentBill, setCurrentBill] = useState(150);
  const [salesTax, setSalesTax] = useState(6);

  const handleNumLinesChange = (value: string) => {
    const num = parseInt(value);
    setNumLines(num);
    
    if (num > devices.length) {
      const newDevices = [...devices];
      for (let i = devices.length; i < num; i++) {
        newDevices.push({
          deviceType: "",
          planType: "UNLIMITED",
          byod: false,
          activationFee: true
        });
      }
      setDevices(newDevices);
    } else {
      setDevices(devices.slice(0, num));
    }
  };

  const updateDevice = (index: number, field: keyof Device, value: any) => {
    const newDevices = [...devices];
    newDevices[index] = {
      ...newDevices[index],
      [field]: value
    };

    if (field === 'byod' && value === true) {
      newDevices[index].deviceType = "";
    } else if (field === 'deviceType' && value !== "") {
      newDevices[index].byod = false;
    }

    setDevices(newDevices);
  };

  const calculateTotals = () => {
    let firstPayment = 0;
    let monthlyPayment = 0;
    let devicePayments = 0;

    devices.forEach((device) => {
      if (device.activationFee) {
        firstPayment += 20;
      }

      if (!device.byod && device.deviceType) {
        const devicePrice = ALL_DEVICES[device.deviceType as keyof typeof ALL_DEVICES]?.price || 0;
        firstPayment += devicePrice * (salesTax / 100);
        devicePayments += devicePrice / 36;
      }

      const planPrice = PLAN_TYPES[device.planType as keyof typeof PLAN_TYPES]?.price || 0;
      monthlyPayment += planPrice;
    });

    monthlyPayment += devicePayments;

    const monthlySavings = Math.max(0, currentBill - monthlyPayment);
    const yearlySavings = monthlySavings * 12;

    return {
      firstPayment: firstPayment.toFixed(2),
      monthlyPayment: monthlyPayment.toFixed(2),
      monthlySavings: monthlySavings.toFixed(2),
      yearlySavings: yearlySavings.toFixed(2)
    };
  };

  const totals = calculateTotals();

  return (
    <div className="container mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Mobile Plan Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <LineSelector 
            value={numLines.toString()} 
            onChange={handleNumLinesChange}
          />

          {devices.map((device, index) => (
            <LineConfig
              key={index}
              index={index}
              device={device}
              onUpdate={updateDevice}
            />
          ))}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Current Monthly Bill</label>
              <Input
                type="number"
                value={currentBill}
                onChange={(e) => setCurrentBill(Number(e.target.value))}
                placeholder="Enter current bill amount"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Sales Tax Rate (%)</label>
              <Input
                type="number"
                value={salesTax}
                onChange={(e) => setSalesTax(Number(e.target.value))}
                placeholder="Enter sales tax rate"
              />
            </div>
          </div>

          <CostBreakdown {...totals} />
        </CardContent>
      </Card>
    </div>
  );
}