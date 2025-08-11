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

export function DatePickerDemo({ value, onChange, error }) {
  // Get today's date with time set to 00:00:00
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!value}
          className={`data-[empty=true]:text-muted-foreground w-full justify-start text-left font-normal ${error ? 'border-red-400' : ''}`}
        >
          <CalendarIcon />
          {value ? format(value, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          disabled={(date) => date < today}
        />
      </PopoverContent>
    </Popover>
  );
}