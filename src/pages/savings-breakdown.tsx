import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Calculator, Mail, Lock, Wifi, Tv, Smartphone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { calculateBundle } from '@/lib/utils';

export function SavingsBreakdownPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const { currentServices, selectedServices } = location.state || {
    currentServices: {},
    selectedServices: {},
  };

  const bundleCalculation = calculateBundle(
    selectedServices.internet,
    selectedServices.tv,
    currentServices.mobileLines,
    selectedServices.mobilePlan
  );

  const currentTotal = 
    currentServices.tvPackage + 
    currentServices.internetPackage + 
    currentServices.mobilePrice;
    
  const monthlySavings = currentTotal - bundleCalculation.total;
  const yearlySavings = monthlySavings * 12;
  const termSavings = monthlySavings * bundleCalculation.term;

  const handleSubmitEmail = () => {
    // In a real app, this would send the quote to the user's email
    console.log('Sending quote to:', email);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <div className="container py-8 px-4 md:px-6">
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => navigate('/calculator')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Calculator
        </Button>

        <div className="grid gap-8 md:grid-cols-2 mb-8">
          <Card className="border-2">
            <CardHeader className="bg-secondary">
              <CardTitle className="flex items-center space-x-2">
                Current Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center space-x-3">
                <Tv className="h-5 w-5 text-primary" />
                <p>TV Package: ${currentServices.tvPackage}/mo</p>
              </div>
              <div className="flex items-center space-x-3">
                <Wifi className="h-5 w-5 text-primary" />
                <p>Internet Package: ${currentServices.internetPackage}/mo</p>
              </div>
              <div className="flex items-center space-x-3">
                <Smartphone className="h-5 w-5 text-primary" />
                <p>Mobile Service: ${currentServices.mobilePrice}/mo</p>
              </div>
              <div className="pt-4 border-t">
                <p className="text-xl font-bold">
                  Total: ${currentTotal}/mo
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="bg-secondary">
              <CardTitle>New Spectrum Services</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {bundleCalculation.services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {service.includes('Internet') && <Wifi className="h-5 w-5 text-primary" />}
                    {service.includes('TV') && <Tv className="h-5 w-5 text-primary" />}
                    {service.includes('Mobile') && <Smartphone className="h-5 w-5 text-primary" />}
                    <p>{service}</p>
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <p className="text-xl font-bold">
                    Total: ${bundleCalculation.total.toFixed(2)}/mo
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mt-2">
                    <Lock className="h-4 w-4 mr-1" />
                    Price Lock Guarantee: {bundleCalculation.term} months
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8 border-2">
          <CardHeader className="bg-secondary">
            <CardTitle>Your Potential Savings</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center p-6 bg-primary/10 rounded-lg">
                <p className="text-sm font-medium text-primary mb-2">Monthly Savings</p>
                <p className="text-4xl font-bold text-primary">
                  ${monthlySavings.toFixed(2)}
                </p>
              </div>
              <div className="text-center p-6 bg-primary/10 rounded-lg">
                <p className="text-sm font-medium text-primary mb-2">Yearly Savings</p>
                <p className="text-4xl font-bold text-primary">
                  ${yearlySavings.toFixed(2)}
                </p>
              </div>
              <div className="text-center p-6 bg-primary/10 rounded-lg">
                <p className="text-sm font-medium text-primary mb-2">
                  {bundleCalculation.term}-Month Savings
                </p>
                <p className="text-4xl font-bold text-primary">
                  ${termSavings.toFixed(2)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader className="bg-secondary">
            <CardTitle>Get Your Savings Quote</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleSubmitEmail} className="bg-primary hover:bg-primary/90">
                <Mail className="mr-2 h-4 w-4" />
                Send Quote
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}