import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/home';
import { SavingsCalculatorPage } from '@/pages/savings-calculator';
import { SavingsBreakdownPage } from '@/pages/savings-breakdown';
import { BuildPlanPage } from '@/pages/build-plan';
import { StandardServicesPage } from '@/pages/standard-services';
import { BundledServicesPage } from '@/pages/bundled-services';
import { MobilePlansPage } from '@/pages/mobile-plans';
import { MobileCalculatorPage } from '@/pages/mobile-calculator';
import { PortingInformationPage } from '@/pages/porting-information';
import { UnlockingDevicesPage } from '@/pages/unlocking-devices';

export function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/calculator" element={<SavingsCalculatorPage />} />
      <Route path="/breakdown" element={<SavingsBreakdownPage />} />
      <Route path="/build" element={<BuildPlanPage />} />
      <Route path="/standard-services" element={<StandardServicesPage />} />
      <Route path="/bundled-services" element={<BundledServicesPage />} />
      <Route path="/mobile-plans" element={<MobilePlansPage />} />
      <Route path="/mobile-calculator" element={<MobileCalculatorPage />} />
      <Route path="/porting" element={<PortingInformationPage />} />
      <Route path="/unlocking" element={<UnlockingDevicesPage />} />
    </RouterRoutes>
  );
}