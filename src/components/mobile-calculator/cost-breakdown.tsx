import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, CreditCard, PiggyBank } from "lucide-react";

interface CostBreakdownProps {
  firstPayment: string;
  monthlyPayment: string;
  monthlySavings: string;
  yearlySavings: string;
}

export function CostBreakdown({ firstPayment, monthlyPayment, monthlySavings, yearlySavings }: CostBreakdownProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            First Payment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">${firstPayment}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Monthly Payment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">${monthlyPayment}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PiggyBank className="h-5 w-5" />
            Monthly Savings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">${monthlySavings}</p>
          <p className="text-sm text-muted-foreground">
            ${yearlySavings} yearly
          </p>
        </CardContent>
      </Card>
    </div>
  );
}