import { StatusBadge } from ".";

export default {
  title: "Components/StatusBadge",
  component: StatusBadge,
  argTypes: {
    badgeType: {
      options: ["warning", "neutral", "success", "brand", "error"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showDot: false,
    badgeType: "warning",
    className: {},
    text: "Completed",
    divClassName: {},
    text1: "Pending",
  },
};
