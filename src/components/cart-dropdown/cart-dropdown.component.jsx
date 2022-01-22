import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';
import { useNavigate } from 'react-router-dom';

const CartDropdown = ({ cartItems, dispatch }) => {
  let navigate = useNavigate();
  const handleClick = () => navigate('/checkout');

  
  return(
    <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton onClick = {() => {handleClick(); dispatch(toggleCartHidden()) }}>GO TO CHECKOUT</CustomButton>
  </div>
  );
  
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);