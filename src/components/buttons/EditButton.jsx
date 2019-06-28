import React from 'react';
import BaseButton from './BaseButton';

function EditButton(props) {
  return <BaseButton text="Edit" onClick={props.handleEdit} />;
}

export default EditButton;
