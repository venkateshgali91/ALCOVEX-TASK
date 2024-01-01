import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      options: ["large", "regular", "small"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["hover", "active", "default"],
      control: { type: "select" },
    },
    type: {
      options: ["success", "secondary", "primary", "icon-secondary", "error", "icon-button", "loader"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    iconLeftInstance: false,
    icon: true,
    iconRight: false,
    size: "large",
    stateProp: "hover",
    type: "success",
    sizeSmallStateClassName: {},
    text: "Button",
  },
};
