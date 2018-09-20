import React, { Component } from 'react';
import {connect} from 'react-redux';
import Vitamin from '../../components/vitamin';

function contentInfo() {
	if (this.props.isVisible) {
		return <div>{this.props.data}</div>	
	} else {
		return <div>Hide Content on Change input</div>
	}
}


class Content extends Component {
	VitaminsMaped() {
		if (Array.isArray(this.props.vitamins)) {
			return this.props.vitamins.map((item,i) => <Vitamin key={i} className='vitamin' vitaminname={item.name} />)
		}	else {return null;}
	}
		
	render() {
		return (<div> 
					{contentInfo.call(this)}
			
					{this.VitaminsMaped()}
				</div>)		
	}
}

const mapDispatchToProps = (dispatch) => ({});
const mapStateToProps = (state) => ({
	...state.contentReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);