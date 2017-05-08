import React,{Component} from 'react'
import Banner from './banner/Banner'
import Header from './header/Header'
import CollegeOne from './content/CollegeOne'
import CollegeThree from './content/CollegeThree'
import CollegeFour from './content/CollegeFour'
import CollegeTwo from './content/CollegeTwo'

class Index extends Component{
	render(){
		return(
			<div>
				<Header />
				<Banner />
				<CollegeOne />
				<CollegeTwo  />
				<CollegeThree />
				<CollegeFour />
			</div>

			)
	}
}
export default Index