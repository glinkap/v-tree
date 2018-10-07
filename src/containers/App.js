import React, { Component } from 'react';
import { YMInitializer } from 'react-yandex-metrika';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as graphActions from '../actions/graphActions';
import Autocomplete from './autocomplete/autocompleteComp'
// import {render} from 'react-dom'
import logo from "../images/vitamin-tree-logo.svg";
import './app.css';
import SvgLogo from '../components/v-tree-logo'

class App extends Component {
	
	render() {
		return (
			<div className="container">
				<SvgLogo className="svg-logo" />
				<Autocomplete />
				{ process.env.NODE_ENV === 'development' ? null :<YMInitializer accounts={[48185741]} /> }
			</div>	
		)
	}
}

export default connect( mapStateToProps => ({test: mapStateToProps}), mapDispatchToProps =>({}) )( App );
