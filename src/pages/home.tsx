import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Calculator,
  Package,
  Clock,
  Quote,
  Smartphone,
  Gift,
  BarChart3,
} from 'lucide-react';

export function HomePage() {
  const benefits = [
    {
      icon: Clock,
      title: 'Real-Time Pricing',
      description: 'Get instant pricing updates as you customize your plan',
    },
    {
      icon: Quote,
      title: 'Custom Quotes',
      description: 'Receive personalized service quotes based on your needs',
    },
    {
      icon: Smartphone,
      title: 'BYOD Eligibility',
      description: 'Check if your device is compatible with our network',
    },
    {
      icon: Gift,
      title: 'Special Promotions',
      description: 'Access exclusive deals and limited-time offers',
    },
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <section className="flex-1 w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Compare & Save with Spectrum
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Find the perfect combination of Internet, TV, and Mobile services tailored to your needs
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link to="/calculator">
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate Your Savings
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/build">
                  <Package className="mr-2 h-4 w-4" />
                  Build a Plan
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Start Saving?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Compare your current services with Spectrum's offerings and see how much you could save
              </p>
            </div>
            <Button asChild size="lg">
              <Link to="/calculator">
                <BarChart3 className="mr-2 h-4 w-4" />
                Start Comparison
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}