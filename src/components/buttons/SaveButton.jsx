import React from 'react';
import BaseButton from './BaseButton';

function SaveButton(props) {
  return <BaseButton text="Save" onClick={props.handleSave} />;
}

export default SaveButton;