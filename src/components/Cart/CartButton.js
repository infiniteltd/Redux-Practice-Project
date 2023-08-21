import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';


const CartButton = (props) => {
  const dispatch = useDispatch();
  const itemQuantity = useSelector(state => state.cart.totalQuantity);

  const cartToggleHandler = () => {
    dispatch(uiActions.toggle());
  };


  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemQuantity}</span>
    </button>
  );
};

export default CartButton;
