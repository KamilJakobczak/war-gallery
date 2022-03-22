import NavButtons from './components/NavButtons';
import SecondaryButtons from './components/SecondaryButtons';
function Nav(props) {
  return (
    <nav>
      <ul className='mainNav'>
        <NavButtons
          handleNavClick={props.handleNavClick}
          buttons={props.buttons}
        />
      </ul>
      <ul className='secondaryNav'>
        <SecondaryButtons
          secondaryButtons={props.buttons[props.activeID].secondary}
          handleSecondaryNavClick={props.handleNavClick}
        />
      </ul>
    </nav>
  );
}

export default Nav;
