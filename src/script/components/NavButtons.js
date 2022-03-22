import React from 'react';

function NavButtons(props) {
  return props.buttons.map((button, id) => (
    <li key={id}>
      <button id={id} onClick={props.handleNavClick}>
        {button.main}
      </button>
    </li>
  ));
}

export default NavButtons;
