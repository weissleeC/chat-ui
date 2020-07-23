import React from 'react';
import Avatar from '.';

import face1 from 'assets/images/face-male-1.jpg';
import face2 from 'assets/images/face-male-2.jpg';
import face3 from 'assets/images/face-male-3.jpg';
import face4 from 'assets/images/face-male-4.jpg';

export default {
  title: 'UI 组件 /Avatar',
  component: Avatar,
}

export const Default = () => {
  return(
    <div className="col-elements">
      <Avatar src={face1} />
    </div>
  )
};

export const Sizes = () => {
  return (
    <div className="col-elements">
      <Avatar src={face1} size="48px" />
      <Avatar src={face2} size="56px" />
      <Avatar src={face3} size="64px" />
      <Avatar src={face4} size="72px" />
    </div>
  )
}

export const WithStatus = () => {
  return (
    <div className="col-elements">
      <Avatar src={face1} size="48px" status="online" statusIconSize="6px" />
      <Avatar src={face2} size="56px" status="offline" statusIconSize="8px" />
      <Avatar src={face3} size="64px" status="online" statusIconSize="10px" />
      <Avatar src={face4} size="72px" status="offline" statusIconSize="12px" />
    </div>
  )
}