import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface LineSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function LineSelector({ value, onChange }: LineSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Number of Lines</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select number of lines" />
        </SelectTrigger>
        <SelectContent>
          {[1, 2, 3, 4, 5].map((num) => (
            <SelectItem key={num} value={num.toString()}>
              {num} {num === 1 ? 'Line' : 'Lines'}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}