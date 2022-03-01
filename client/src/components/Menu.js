import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CartCountDisplay from './CartCountDisplay';

class Menu extends Component {
  render() {
    return (
      <div>
        <div>
          <NavLink to='/'>Home</NavLink>{' '}
        </div>
        <div>
          <NavLink to='/add-book'>Add Book</NavLink>
        </div>
        <div>
          <NavLink to='/register'>Register</NavLink>
        </div>
        <div>
          <NavLink to='/login'>Login</NavLink>
        </div>
        <div>
          <NavLink to='/my-books'>My Books</NavLink>
        </div>
        <div>
          <NavLink to='/cart'>
            Cart
            <CartCountDisplay />
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Menu;
