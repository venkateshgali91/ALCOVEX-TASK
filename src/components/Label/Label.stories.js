import { Label } from ".";

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {
    badgeType: {
      options: ["warning", "neutral", "success", "brand", "error"],
      control: { type: "select" },
    },
    labelState: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    size: {
      options: ["regular", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showIcon: true,
    showDot: true,
    badgeType: "warning",
    labelState: "primary",
    size: "regular",
    className: {},
    text: "Completed",
  },
};
