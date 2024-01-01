import { Component } from ".";
import { sFrame } from "../sFrame";

export default {
    title: "Components/sFrame",
    component: sFrame
    argTypes: {
        stateProp: {
            options: ["completed-add", "to-do-add", "in-review-add", "in-progress-add"],
            control: { type: "select" },
        },
    },
};

export const Default = {
    args: {
        stateProp: "completed-add",
        hover: true,
        className: {},
    },
};