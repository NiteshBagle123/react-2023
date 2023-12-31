import React from 'react';
import mealsImage from '../../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from '../Button/Button';

export default function Header (props) {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onclick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table full of delicious food'/>
            </div>
        </React.Fragment>
    );
}