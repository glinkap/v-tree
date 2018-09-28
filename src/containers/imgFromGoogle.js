import React, { Component } from 'react';
// import GoogleImagesUrl from 'GoogleImagesUrl';
// const GoogleImagesUrl = require('GoogleImagesUrl');
export default class imgFromGoogle extends Component {	
	componentWillReceiveProps(props) { 
		console.log("props", props);

	}
	render() {
		// const url = GoogleImagesUrl.create('cute cats', { size: 'large' })
		return <img width="100px" height="100px" src={'http://bm.img.com.ua/nxs/img/prikol/images/large/9/2/75129.jpg'} alt=""/>;
	}
}