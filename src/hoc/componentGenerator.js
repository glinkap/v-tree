import React from 'react';

export default function ComponentGenerator(Component) {
	return class extends React.Component {
		render() {
			return <Component  {...this.props} />
		}
	}
}


