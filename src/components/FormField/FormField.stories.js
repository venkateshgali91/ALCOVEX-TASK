import { FormField } from ".";

export default {
  title: "Components/FormField",
  component: FormField,
  argTypes: {
    axis: {
      options: ["vertical", "horizontal"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    errorMessage: false,
    showLabel: true,
    hintText: true,
    axis: "vertical",
    size: "large",
    className: {},
    text: "Label",
    textFieldShowLeftIcon: true,
    textFieldShowRightIcon: true,
    textFieldTextActive: true,
    textFieldTextText: "Text",
  },
};
