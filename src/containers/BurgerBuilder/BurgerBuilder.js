import React, {Component} from 'react';
import MyAux from '../../hoc/MyAux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INRGEDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.7,
    bacon: 0.8,
    meat: 1.2
}

class BurgerBuilder extends Component {
    constructor(props){
        super(props);
    }
    state = {
        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchaseble: false,
        puchasing:false
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            },0);
        this.setState({purchaseble: sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount;

        const priseAdition = INRGEDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priseAdition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredient});
        this.updatePurchaseState(updatedIngredient);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }

        const  updatedCount = oldCount - 1;


        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount;

        const priseAdition = INRGEDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priseAdition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredient});
        this.updatePurchaseState(updatedIngredient);
    }

    purchaseHandler = () => {
        this.setState({puchasing: true});
    }

    purcaseCanselHandler = () => {
        this.setState({puchasing: false});
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        };
        return (
            <MyAux>
                <Modal show={this.state.puchasing} modalClosed={this.purcaseCanselHandler}>
                    <OrderSummary ingredients = {this.state.ingredients}></OrderSummary>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchaseble = {this.state.purchaseble}
                    ordered = {this.purchaseHandler}
                ></BuildControls>
            </MyAux>
        );
    }
}

export default BurgerBuilder;