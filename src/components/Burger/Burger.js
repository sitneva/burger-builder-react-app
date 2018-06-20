import React from 'react';
import classes from './Burger.css'
import BurgerIngridient from './BurgerIngridient/BurgerIngridient'

const burger = (props) => {
    let transformIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                return <BurgerIngridient key={igKey+i} type={igKey}/>
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if(transformIngredients.length === 0){
        transformIngredients = <p>Please start adding ingredients!</p>
    }
    console.log(transformIngredients)
    return (
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top"/>
            {transformIngredients}
            <BurgerIngridient type="bread-bottom"/>
        </div>
    );
}

export default burger;