import React from "react";
import Paragraph from ".";

export default {
  title: "排版组件/Paragraph",
  component: Paragraph
};

export const Default = () => (
  <>
    <Paragraph>这是一段文本</Paragraph>
    <Paragraph>这是一段文本</Paragraph>
  </>
);

export const Ellipsis = () => (
  <Paragraph ellipsis type="secondary">这是一段不换行文本不换行文本不换行文本不换行文本不换行文本不换行文本不换行文本不换行文本不换行文本不换行文本不换行文本不换行文本</Paragraph>
);