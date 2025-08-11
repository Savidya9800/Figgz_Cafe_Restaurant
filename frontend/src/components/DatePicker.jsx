"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/shadcn/button"
import { Calendar } from "@/components/ui/shadcn/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/shadcn/popover"

export function DatePickerDemo({ value, onChange, error, maxDate, onlyPast }) {
  // Accept value and onChange for controlled usage
  const [date, setDate] = React.useState(value ? new Date(value) : null);

  React.useEffect(() => {
    if (value && (!date || new Date(value).getTime() !== date.getTime())) {
      setDate(new Date(value));
    }
  }, [value]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Disable future dates if onlyPast is true, otherwise disable past dates (default)
  const isDisabled = (d) => {
    if (onlyPast) {
      // Allow today and any date before today
      return d > today;
    }
    if (maxDate && d > maxDate) return true;
    return d < today;
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!date}
          className={`data-[empty=true]:text-muted-foreground w-full justify-start text-left font-normal ${error ? 'border-red-400' : ''}`}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) => {
            setDate(d);
            if (onChange) {
              onChange(d ? d.toISOString().split('T')[0] : '');
            }
          }}
          disabled={isDisabled}
        />
      </PopoverContent>
    </Popover>
  );
}