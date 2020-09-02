import React from 'react';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg.svg';

const CartIcon = ({toggleCartHidden, Itemcount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{Itemcount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})

const mapStateToProps = (state) =>({
    Itemcount : selectCartItemsCount(state)
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);