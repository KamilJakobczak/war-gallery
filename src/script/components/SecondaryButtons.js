import React from 'react';

function SecondaryButtons(props) {
  // const activeTab = props.buttons[props.activeTab].secondary;

  return props.secondaryButtons.map((button, id) => (
    <li key={id}>
      <button id={id} onClick={props.handleSecondaryNavClick}>
        {button}
      </button>
    </li>
  ));
}

export default SecondaryButtons;
