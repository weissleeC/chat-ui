import React from 'react';
import Icon from '.';
import { ReactComponent as SmileIcon } from 'assets/icons/smile.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faFolder, faStickyNote, faAddressCard } from '@fortawesome/free-solid-svg-icons';

import 'stories.css'

export default {
  title: 'UI 组件 /Icon',
  component: Icon,
}

export const Default = () => {
  return <Icon icon={ SmileIcon } />;
}

export const Colors = () => {
  return(
    <div className="col-elements">
      <Icon icon={ SmileIcon } color="#000000" />
      <Icon icon={ SmileIcon } color="#00a4ff" />
      <Icon icon={ SmileIcon } color="#999999" />
    </div>
  );
}

export const IconSize = () => {
  return(
    <div className="col-elements">
      <Icon icon={ SmileIcon } width="16" height="16" />
      <Icon icon={ SmileIcon } width="32" height="32" />
      <Icon icon={ SmileIcon } width="64" height="64" />
    </div>
  );
}

export const FontAwesome = () => {
  return <FontAwesomeIcon icon={faCommentDots} />;
}

export const FontAwesomeColor = () => {
  return <FontAwesomeIcon icon={faCommentDots} style={{color: '#cccccc'}} />;
}

export const FontAwesomeSize = () => {
  return(
    <div className="col-elements">
      <FontAwesomeIcon icon={faFolder} style={{fontSize: '16px'}} />
      <FontAwesomeIcon icon={faStickyNote} style={{fontSize: '32px'}} />
      <FontAwesomeIcon icon={faCommentDots} style={{fontSize: '64px'}} />
      <FontAwesomeIcon icon={faAddressCard} style={{fontSize: '128px'}} />
    </div>
  );
}