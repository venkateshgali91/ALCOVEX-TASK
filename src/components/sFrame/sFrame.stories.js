import React from "react";
import { sFrame } from ".";

export default {
    title: "Components/sFrame",
    component: sFrame,
    argTypes: {
        cardState: {
            options: ["unfilled", "card-state3", "filled", "card-state4"],
            control: { type: "select" },
        },
    },
};

const Template = (args) => < sFrame {...args }
/>;

export const Default = Template.bind({});
Default.args = {
    cardState: "unfilled",
};