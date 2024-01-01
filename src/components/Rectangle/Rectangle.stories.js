import { Rectangle } from ".";

export default {
  title: "Components/Rectangle",
  component: Rectangle,
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
  },
};
