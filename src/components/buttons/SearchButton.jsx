import React from 'react';
import BaseButton from '../base/BaseButton';

function SearchButton(props) {
  return <BaseButton text="Search" onClick={props.handleSearch} />;
}

export default SearchButton;