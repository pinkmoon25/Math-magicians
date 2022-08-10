import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Math Magicians</h1>
    <nav className="navbar">
      <li key={1}>
        <NavLink to="/">Home</NavLink>
      </li>
      <li key={2}>
        <NavLink to="/calculator">Calculator</NavLink>
      </li>
      <li key={3}>
        <NavLink to="/quote">Quote</NavLink>
      </li>
    </nav>
  </header>
);

export default Header;
