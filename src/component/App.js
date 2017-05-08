import React,{Component}from 'react'
class App extends Component {
	constructor(args) {
		super()
		// code
	}
	render() {
		return(
			<div className="app_wrap">
				{this.props.children}
			</div>

			)
	}

	// methods
}
export default App