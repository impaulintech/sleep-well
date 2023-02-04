import React from "react";
import { Disclosure } from "@headlessui/react";

import ThumbUpIcon from "~/shared/icons/ThumbUpIcon";
import ThumbDownIcon from "~/shared/icons/ThumbDownIcon";
import EllipseIcon from "~/shared/icons/EllipseIcon";

interface IAccordion {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: IAccordion) => {
  return (
    <div className=" ">
      <Disclosure>
        {({ open }) => (
          <>
            <div className="flex w-full justify-between items-center space-x-4 p-4 bg-swell-dark text-white shadow-md">
              <Disclosure.Button className="flex w-full">
                <div className="flex items-center space-x-3">
                  <EllipseIcon statusColor="inProgress" />
                  <div className="text-xl font-bold">{title}</div>
                </div>
              </Disclosure.Button>
              <div className="flex space-x-4">
                <div
                  onClick={() => {
                    console.log("Disliked!");
                  }}
                >
                  <ThumbDownIcon />
                </div>
                <div
                  onClick={() => {
                    console.log("Liked!");
                  }}
                >
                  <ThumbUpIcon />
                </div>
              </div>
            </div>
            <Disclosure.Panel className="bg-gray text-base p-5 border-b shadow-lg">
              {children}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Accordion;
