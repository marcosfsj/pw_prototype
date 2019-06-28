import React from 'react';
import BaseButton from './BaseButton';

function DeleteButton(props) {
  return <BaseButton text="Delete" onClick={props.handleDelete} />;
}

export default DeleteButton;
