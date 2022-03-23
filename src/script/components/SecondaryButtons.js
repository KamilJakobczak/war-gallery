import React from 'react';

function SecondaryButtons(props) {
  return props.secondaryButtons.map((button, id) => (
    <li key={id}>
      <button data-secondaryid={id} onClick={props.handleSecondaryNavClick}>
        {button}
      </button>
    </li>
  ));
}

export default SecondaryButtons;
