"use client";

import { format } from "date-fns";
import { useState } from "react";
import { Button } from "../shadcnui/button";
import { Calendar } from "../shadcnui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../shadcnui/popover";

const BasicCalculator = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  return (
    <div className="grid gap-3">
      <h1 className=""></h1>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              id="date-picker-simple"
              className="justify-start font-normal">
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          }
        />
        <PopoverContent
          className="w-auto p-0"
          align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={date}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default BasicCalculator;
