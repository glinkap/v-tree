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
const randomInteger = (min, max) => {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
};

class Content extends Component {
	random() {
		return randomInteger(0,360);
	}
	VitaminsMaped() {
		if (Array.isArray(this.props.vitamins)) {			
			return this.props.vitamins.map((item,i) => <Vitamin key={i} className='vitamin' hue={randomInteger(0,360)} vitaminname={item.name} vitaminindex={item.vitamin.index} />)
		}	else {return null;}
	}
		
	render() {
		if (this.props.isVisible) {
			return (
				<div>
			<div>{this.props.data}</div>	
			<div className="autocomplete-content">{this.props.content}</div>			
			<div className="vitamins-block">{this.VitaminsMaped()}</div>
			</div>)
		} else {
			return<div>{this.props.inputedValue == '' ? 'Введите в поиск проблему' : null }</div>
		}					
	}
}

const mapDispatchToProps = (dispatch) => ({});
const mapStateToProps = (state) => ({
	...state.contentReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);