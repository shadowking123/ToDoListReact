import PropTypes from 'prop-types'
import Button from './Button';
const Header = ({ name, title, onAdd,showAdd }) => {
  return (
    <div className='header'>
      <h1>Hello {name}, welcome to {title}!</h1>
      <Button text ={showAdd?'-':'+'} color = {showAdd?'grey':'green'} onAdd = {onAdd}/>
    </div>
  );
};

Header.defaultProps = {
  name: "User",
};

Header.propTypes = {
    name: PropTypes.string.isRequired,
}
export default Header;
