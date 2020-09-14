import React from "react";
import { ExampleComponent } from "./ExampleComponent";

export default {
  title: "Components/ExampleComponent",
  component: ExampleComponent,
  argTypes: {
    name: { control: "text" },
  },
};

export const exampleComponent = (args) => (
  <ExampleComponent name={args.name || "Sasha"} />
);

const Template = (args) => <ExampleComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Sasha",
};
