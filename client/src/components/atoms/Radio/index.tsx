import { RadioGroup } from "@headlessui/react";
import { useState } from "react";

interface IRadio {
  options: { name: string }[];
}

export default function Radio({ options }: IRadio) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleRadioSelect = (event: any) => {
    setSelected(event);
  };

  return (
    <div className="w-full">
      <RadioGroup value={selected} onChange={(e: any) => handleRadioSelect(e)}>
        <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
        <div className="space-y-2">
          {options.map((option) => (
            <RadioGroup.Option
              key={option.name}
              value={option}
              className={({ active, checked }) =>
                `${active ? "" : ""}
                  ${
                    checked
                      ? "bg-swell-10 text-white border-swell-10"
                      : "bg-swell-60"
                  }
                    relative flex cursor-pointer rounded px-5 py-2 shadow-md border-2 border-swell-30`
              }
            >
              {({ checked }) => (
                <div className="flex w-full text-swell-dark text-lg font-medium items-center justify-center">
                  <RadioGroup.Label
                    as="p"
                    className={`${checked && "text-swell-60"}`}
                  >
                    {option.name}
                  </RadioGroup.Label>
                </div>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
