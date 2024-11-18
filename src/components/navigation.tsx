import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Calculator, Package, Menu } from 'lucide-react';

export function Navigation() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Calculator className="h-6 w-6" />
          <span className="font-bold">Spectrum Compare</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <Link to="/standard-services" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Standard Services</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        View our standalone service offerings
                      </p>
                    </Link>
                    <Link to="/bundled-services" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Bundled Services</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Explore our money-saving service bundles
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Mobile</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <Link to="/mobile-plans" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Mobile Plans</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Compare our mobile plan options
                      </p>
                    </Link>
                    <Link to="/mobile-calculator" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Payment Calculator</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Calculate your first month's payment
                      </p>
                    </Link>
                    <Link to="/porting" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Porting Information</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Learn how to bring your number to Spectrum
                      </p>
                    </Link>
                    <Link to="/unlocking" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Device Unlocking</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        How to unlock your device
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="ghost">
            <Link to="/calculator">
              <Calculator className="mr-2 h-4 w-4" />
              Calculate Savings
            </Link>
          </Button>
          <Button asChild>
            <Link to="/build">
              <Package className="mr-2 h-4 w-4" />
              Build a Plan
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-sm">Services</h4>
                  <div className="pl-4 space-y-3">
                    <Link to="/standard-services" className="block text-sm">Standard Services</Link>
                    <Link to="/bundled-services" className="block text-sm">Bundled Services</Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-sm">Mobile</h4>
                  <div className="pl-4 space-y-3">
                    <Link to="/mobile-plans" className="block text-sm">Mobile Plans</Link>
                    <Link to="/mobile-calculator" className="block text-sm">Payment Calculator</Link>
                    <Link to="/porting" className="block text-sm">Porting Information</Link>
                    <Link to="/unlocking" className="block text-sm">Device Unlocking</Link>
                  </div>
                </div>
                <div className="pt-4 space-y-4">
                  <Button asChild className="w-full">
                    <Link to="/calculator">
                      <Calculator className="mr-2 h-4 w-4" />
                      Calculate Savings
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/build">
                      <Package className="mr-2 h-4 w-4" />
                      Build a Plan
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}