import CartIcon from "../../Cart/CartIcon";
import classes from './Button.module.css';

const HeaderCartButton = (props) => {
    return (
        <button className={classes.button} onClick={props.onclick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                3
            </span>
        </button>
    )
};

export default HeaderCartButton;