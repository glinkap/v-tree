import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as graphActions from '../actions/graphActions';
import Autocomplete from './autocomplete/autocompleteComp'
import {render} from 'react-dom'
import logo from "../images/vitamin-tree-logo.png";
import './app.css';


const items = [
  {value: 'возраст старше 30'},
  {value: 'возраст старше 40'},
  {value: 'возраст старше 50'},
  {value: 'возраст старше 60'},
  {value: 'возраст старше 70'},
]

class App extends Component {
	
	render() {
		return (
			<div className="container">				
				<img src={logo} className="logo" />	
				<Autocomplete 	/ >					
			</div>	
		)
	}
}

function mapStateToProps(state) {
	return {state};
}
function mapDispatchToProps(dispatch) {
	return {pageActions: bindActionCreators(graphActions, dispatch)};
}
export default connect(mapStateToProps,mapDispatchToProps)(App);