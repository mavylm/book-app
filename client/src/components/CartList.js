import { connect } from 'react-redux';

function CartList(props) {
  const cartItems = props.allCartItems.map((book, index) => (
    <li key={index}>{book.title}</li>
  ));

  return (
    <div>
      <h1>Items in Cart</h1>
      {cartItems}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    allCartItems: state.cart,
  };
};

export default connect(mapStateToProps)(CartList);
