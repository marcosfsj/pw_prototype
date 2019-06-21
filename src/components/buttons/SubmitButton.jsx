import React from 'react';
import BaseButton from '../base/BaseButton';

function SubmitButton(props) {
  return <BaseButton text="Submit" onClick={props.handleSubmit} />;
}

export default SubmitButton;