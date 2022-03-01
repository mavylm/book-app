import { connect } from 'react-redux';

function CartCountDislay(props) {
  return <>({props.allCartItems.length})</>;
}

const mapStateToProps = (state) => {
  return {
    allCartItems: state.cart,
  };
};

export default connect(mapStateToProps)(CartCountDislay);
