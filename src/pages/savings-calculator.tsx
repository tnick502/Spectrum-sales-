import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ServiceForm } from '@/components/service-form';
import { SpectrumSelector } from '@/components/spectrum-selector';
import { Calculator } from 'lucide-react';

export function SavingsCalculatorPage() {
  const navigate = useNavigate();
  const [currentServices, setCurrentServices] = useState({
    tvPackage: 0,
    internetPackage: 0,
    mobileLines: 0,
    mobilePrice: 0,
  });

  const [selectedServices, setSelectedServices] = useState({
    internet: '',
    tv: '',
    mobilePlan: '',
  });

  const handleServiceChange = (service: string, value: number) => {
    setCurrentServices((prev) => ({
      ...prev,
      [service]: value,
    }));
  };

  const handleServiceSelect = (service: string, value: string) => {
    setSelectedServices((prev) => ({
      ...prev,
      [service]: value,
    }));
  };

  const handleCalculate = () => {
    navigate('/breakdown', {
      state: {
        currentServices,
        selectedServices,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <div className="container py-8 px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-4 text-[#1a1a1a]">Savings Calculator</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Compare your current services with Spectrum's offerings and see how much you could save.
        </p>
        
        <div className="grid gap-8 md:grid-cols-2">
          <ServiceForm
            onServiceChange={handleServiceChange}
            values={currentServices}
          />
          <SpectrumSelector
            onServiceSelect={handleServiceSelect}
            mobileLineCount={currentServices.mobileLines}
            selectedServices={selectedServices}
          />
        </div>
        
        <div className="mt-8 flex justify-center">
          <Button
            size="lg"
            onClick={handleCalculate}
            disabled={!currentServices.internetPackage && !currentServices.tvPackage && !currentServices.mobileLines}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
          >
            <Calculator className="mr-2 h-5 w-5" />
            Calculate Savings
          </Button>
        </div>
      </div>
    </div>
  );
}