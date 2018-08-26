import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as graphActions from '../actions/graphActions';

import {render} from 'react-dom'
import Downshift from 'downshift'
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
				<Downshift
				    onChange={selection => alert(`You selected ${selection.value}`)}
				    itemToString={item => (item ? item.value : '')}
				    className="autocomplete"
				 >
				    {({
				      getInputProps,
				      getItemProps,
				      getLabelProps,
				      getMenuProps,
				      isOpen,
				      inputValue,
				      highlightedIndex,
				      selectedItem,
				    }) => (
				      <div>
				        <input {...getInputProps()} placeholder="Введите проблему" className="autocomplete-input" />
				        <ul {...getMenuProps()} className="autocomplete-ul">
				          {isOpen
				            ? items
				                .filter(item => !inputValue || item.value.includes(inputValue))
				                .map((item, index) => (
				                  <li
				                    {...getItemProps({
				                      key: item.value,
				                      index,
				                      item,
				                      style: {
				                        backgroundColor:
				                          highlightedIndex === index ? 'lightgray' : 'white',
				                        fontWeight: selectedItem === item ? 'bold' : 'normal',
				                      },
				                    })}
				                  >
				                    {item.value}
				                  </li>
				                ))
				            : null}
				        </ul>
				      </div>
				    )}
				  </Downshift>
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