import { Frame } from ".";

export default {
  title: "Components/Frame",
  component: Frame,
  argTypes: {
    stateProp: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "hover",
    className: {},
    text: "Freelance Project",
  },
};
