import React,{Component} from 'react'
 
class CollegeOne extends Component{
	constructor(props) {
		super(props);
		
	}
	componentWillMount() {
		
	}
	render(){
		return(
			<div className='freshman_wrap content_wrap'>
				<div className='container'>
					<div className='row'>
						<div className='col-xs-12'>
							<div className='freshman_title'>
					            <h4>大一课程</h4>
					            <p className='freshman_read_more'>
						            <a>read more</a>
					            </p>
				            </div>
				            <div className='content_course'>
				            	<figure className='course_item'>
				            	    <div className='course_img'>
				            	    	<img src={require('../../images/computer.jpg')} alt='course'/>
				            	    </div>
				            		<figcaption className='course_title'>
				            			计算机导论
				            		</figcaption>
				            	</figure>
				            	<figure className='course_item'>
				            	    <div className='course_img'>
				            	    	<img src={require('../../images/computer.jpg')} alt='course'/>
				            	    </div>
				            		<figcaption className='course_title'>
				            			计算机导论
				            		</figcaption>
				            	</figure>
				            	<figure className='course_item'>
				            	    <div className='course_img'>
				            	    	<img src={require('../../images/computer.jpg')} alt='course'/>
				            	    </div>
				            		<figcaption className='course_title'>
				            			计算机导论
				            		</figcaption>
				            	</figure>
				            	<figure className='course_item'>
				            	    <div className='course_img'>
				            	    	<img src={require('../../images/computer.jpg')} alt='course'/>
				            	    </div>
				            		<figcaption  className='course_title'>
				            			计算机导论
				            		</figcaption>
				            	</figure>
				            </div>
						</div>
					</div>
				</div>
			</div>


			)
	}
}
export default CollegeOne