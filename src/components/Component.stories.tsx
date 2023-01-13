import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Component from "./Component";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Component",
  component: Component,
} as ComponentMeta<typeof Component>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => <Component />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Main = Template.bind({});