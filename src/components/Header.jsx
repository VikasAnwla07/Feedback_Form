import PropTypes from 'prop-types';
function Header(props) {
  const headerstyles = {
    backgroundColor: props.bgcolor,
    color: props.textcolor,
  };
  return (
    <header style={headerstyles}>
      <div className='container'>
        <h1>{props.text}</h1>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: 'Feedback',
  bgcolor: '#0b0c1e',
  textcolor: 'rgb(255 90 192)',
};

Header.propTypes = {
  text: PropTypes.string,
  bgcolor: PropTypes.string,
  textcolor: PropTypes.string,
};
export default Header;
