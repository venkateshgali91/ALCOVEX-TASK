import React from "react";
  // Adjust the path and extension accordingly
import { Calendar2 } from "../../icons/Calendar2";
import { ChevronDown1 } from "../../icons/ChevronDown1";

export const FrameScreen = () => {
  return (
    <sFrame
      cardState="unfilled"
      formFieldTextFieldIcon={<Calendar2 className="!relative !w-[20px] !h-[20px]" />}
      formFieldTextFieldIcon1={<ChevronDown1 className="!relative !w-[20px] !h-[20px]" />}
      override={<Calendar2 className="!relative !w-[20px] !h-[20px]" />}
    />
  );
};
