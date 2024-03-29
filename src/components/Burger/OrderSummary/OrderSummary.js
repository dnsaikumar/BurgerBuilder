import React, { Component } from 'react';
import Auxil from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    componentWillUpdate(){
        console.log("[Order Summary] Will Update")
    }
    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
                );
            });
        return (
            <Auxil>
                <h3>Your Order</h3>
                <p>A delicious burger with following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                {/* <button>CANCEL</button>
            <button>CONTINUE</button> */}
                <Button clicked={this.props.purchaseCancelled} btnType="Danger">CANCEL</Button>
                <Button clicked={this.props.purchaseContinued} btnType="Success">CONTINUE</Button>
            </Auxil>
        );
    }
}


export default OrderSummary;