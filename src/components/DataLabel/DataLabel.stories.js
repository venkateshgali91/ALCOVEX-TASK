import { DataLabel } from ".";

export default {
  title: "Components/DataLabel",
  component: DataLabel,
  argTypes: {
    size: {
      options: ["small", "default"],
      control: { type: "select" },
    },
    type: {
      options: ["text", "label"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "small",
    type: "text",
    className: {},
    text: "Label",
    labelText: "AI Interview",
    labelShowIcon: true,
    visible: true,
  },
};
