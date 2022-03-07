import React from 'react';

function NavButton(props) {
  const buttons = ['screenshots', 'photos', 'videos', 'memes'];
  return buttons.map((button, id) => (
    <li key={id}>
      <button id={id} onClick={props.handleNavClick}>
        {button}
      </button>
    </li>
  ));
}

export default NavButton;
