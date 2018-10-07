import React, { Component } from 'react';
// import GoogleImagesUrl from 'GoogleImagesUrl';
// const GoogleImagesUrl = require('GoogleImagesUrl');
export default class imgFromGoogle extends Component {	
	componentWillReceiveProps(props) { 
	}
	render() {
		// const url = GoogleImagesUrl.create('cute cats', { size: 'large' })
		return <img className="product-img" src={'http://bm.img.com.ua/nxs/img/prikol/images/large/9/2/75129.jpg'} alt=""/>;
	}
}