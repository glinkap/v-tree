import React, { Component } from 'react';
export default class autocomplete extends Component {
	render() {
		return (
			<div>
				<input placeholder="Введите проблему" className="autocomplete-input" onChange={()=>null} />				
				<ul className="autocomplete-ul">
					<li>123</li>	
				</ul>
			</div>

		)
	}
}