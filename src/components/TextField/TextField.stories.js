import { TextField } from ".";

export default {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    stateProp: {
      options: ["default", "focused", "hover", "error", "disabled"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "regular", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showRightIcon: true,
    showLeftIcon: true,
    stateProp: "default",
    size: "large",
    className: {},
    textActive: true,
    textText: "Text",
    inputType: "text",
  },
};
