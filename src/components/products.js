import React, { Component } from 'react';
import {connect} from 'react-redux';
class Products extends Component {
	render() {
		if (this.props.isVisible && this.props.selectedIndex !== undefined) {
			let productsList,
			data,
			selectedVitamin,
			selectedIndex;
			data = this.props.data;
			selectedIndex = this.props.selectedIndex;
			selectedVitamin = data[selectedIndex];
			productsList = selectedVitamin.products
			console.log("data", data,'selectedIndex',selectedIndex,'selectedVitamin',selectedVitamin,'productsList',productsList);
			
			return <div className="products">
				{	
					productsList.map((item,i)=>{
					return <div key={i}>{item.product.name} - {item.product.id}</div>
				})}
			</div>
		} else {
			return null;
		}

	}
}
const mapStateToProps = (state) => ({
	...state.productReducer,
	data: state.contentReducer.vitamins
});
const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(Products);