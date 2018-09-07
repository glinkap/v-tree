import React, { Component } from 'react';
import { YMInitializer } from 'react-yandex-metrika';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as graphActions from '../actions/graphActions';
import Autocomplete from './autocomplete/autocompleteComp'
// import {render} from 'react-dom'
import logo from "../images/vitamin-tree-logo.png";
import './app.css';


class App extends Component {
	
	render() {
		return (
			<div className="container">				
{				<img src={logo} className="logo" alt="logo" />	}
				<Autocomplete />
				{ () => {
						if (process.env.NODE_ENV === 'production') {
							return <YMInitializer accounts={[48185741]} />
						}
					}
				}
			</div>	
		)
	}
}

export default connect( mapStateToProps => ({test: mapStateToProps}), mapDispatchToProps =>({}) )( App );
