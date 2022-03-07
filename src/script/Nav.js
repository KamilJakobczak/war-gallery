import NavButton from './NavButton';
function Nav(props) {
  return (
    <nav>
      <ul>
        <NavButton handleNavClick={props.handleNavClick} />
      </ul>
    </nav>
  );
}

export default Nav;
