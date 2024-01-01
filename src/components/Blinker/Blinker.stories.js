import { Blinker } from ".";

export default {
  title: "Components/Blinker",
  component: Blinker,
  argTypes: {
    blink: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    blink: "off",
    className: {},
  },
};
