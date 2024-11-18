import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Routes } from '@/components/routes';

export function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="spectrum-theme">
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>
            <Routes />
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}