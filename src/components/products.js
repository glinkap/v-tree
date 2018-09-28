import React, { Component } from 'react';
import {connect} from 'react-redux';
import {productsSelector} from '../selectors/autocompleteSelectors.js';
import './products.css';
import ImgFromGoogle from '../containers/imgFromGoogle'
class Products extends Component {
	// shouldComponentUpdate(props) {
	// 	// if (!isNaN(props.selectedIndex)) {
	// 	// 	const vitamin = props.data.filter(item => item.id == props.selectedIndex)[0];
	// 	// 	this.props.data = vitamin.products;
	// 	// 	console.log("this.props.data", this.props.data);
	// 	// 	return true;
			
	// 	// } else {
	// 	// 	return false;
	// 	// }
		
	// }
	componentWillReceiveProps(props) {
	}
	render() {
		if (!isNaN(this.props.selectedIndex)) {
			const vitamin = this.props.data.filter(item => item.id == this.props.selectedIndex)[0];
			return (<div className="products">
						{	
							vitamin.products.map((item,i)=>{
							return (
								<div key={`d${i}`}>
									<ImgFromGoogle key={`i${i}`} toFind={item.product.name} />	
									<div key={i}>{item.product.name} - {item.product.id}</div>
								</div>)
							})
						}
				</div>)
			
		} else {return null;}

	}
}
const mapStateToProps = (state) => ({
	...state.productReducer,
	data: productsSelector(state)
});
const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(Products);