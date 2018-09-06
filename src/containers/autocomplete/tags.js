import React from 'react';
import ComponentGenerator from '../../hoc/componentGenerator.js';

function tag(props) {
	return <div className='listItem' {...props}>{props.text}</div>
}

function btnTags({data,onClickFunc}) {
	return (
		<div>
			{data.map((item,index)=>{return tag({onClick:onClickFunc, key:index, text:item.text}) })}
		</div>	
		);
}

export default btnTags