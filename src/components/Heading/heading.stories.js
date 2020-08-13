import React from "react";
import Heading from ".";

export default {
  title: "排版组件/Heading",
  component: Heading
};

export const Default = () => (
  <>
    <Heading level="1">H1 标签</Heading>
    <Heading level="2">H2 标签</Heading>
    <Heading level="3">H3 标签</Heading>
    <Heading level="4">H4 标签</Heading>
    <Heading level="5">H5 标签</Heading>
    <Heading level="6">H6 标签</Heading>
  </>
);