import Nav from './Nav';

const Header = props => (
  <div>
    <div className="bar">
      <a href="">Sick Fits</a>
      <Nav />
    </div>
    <div className="sub-bar">
      <span>Search</span>
    </div>
    <div>Cart</div>
  </div>
);

export default Header;
