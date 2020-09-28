import React from 'react';

class CartItem extends React.Component {
	constructor () {
		super();
		this.state = {
			price : 999,
			name : 'Mobile Phone',
			qty : 1,
		}
	}
	increaseItem = () => {
		this.setState(({ qty }) => ({
	      qty: qty + 1
	    }));
	}
	decreaseItem = () => {
		this.setState(({ qty }) => ({
	      qty: qty - 1
	    }));
	}
	render () {
		const { price, name, qty } = this.state;
		return (
			<div className="cart-item">
				<div className="right-block">
					<img  style={styles.image}/>
				</div>
				<div className="left-block">
					<div style={ { fontSize : 25 } }>{name}</div>
					<div>MRP {price}</div>
					<div>Qty : {qty}</div>
					<div className="cart-item-actions">
						<img 
							alt="increase" 
							className="action-icons" 
							src="https://image.flaticon.com/icons/svg/992/992651.svg"
							onClick={this.increaseItem}
						/>
						<img 
							alt="decrease" 
							className="action-icons" 
							src="https://image.flaticon.com/icons/svg/659/659892.svg"
							onClick={this.decreaseItem}
						/>
					</div>
				</div>
			</div>
		);
	}
}

const styles = {
	image : {
		height : 110,
		width : 110,
		borderRadius : 4,
		background : '#ccc'
	}
}

export default CartItem;