import React from 'react';
import BaseButton from './BaseButton';

function FindButton(props) {
  return <BaseButton text="Find" onClick={props.handleFind} />;
}

export default FindButton;