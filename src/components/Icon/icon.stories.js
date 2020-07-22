import React,{ Fragment } from 'react';
import Icon from '.';
import { ReactComponent as SmileIcon } from 'assets/icons/smile.svg'

export default {
  title: 'UI 组件 /Icon',
  component: Icon,
}

export const Default = () => {
  return <Icon icon={ SmileIcon } />;
}

export const Colors = () => {
  return(
    <Fragment>
      <Icon icon={ SmileIcon } color="#000000" />
      <Icon icon={ SmileIcon } color="#00a4ff" />
      <Icon icon={ SmileIcon } color="#999999" />
    </Fragment>
  );
}

export const IconSize = () => {
  return(
    <Fragment>
      <Icon icon={ SmileIcon } width="16" height="16" />
      <Icon icon={ SmileIcon } width="32" height="32" />
      <Icon icon={ SmileIcon } width="64" height="64" />
    </Fragment>
  );
}