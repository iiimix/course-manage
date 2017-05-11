import React,{Component} from 'react'

import '../../css/index.css'
import '../../css/fonts/font-awesome.min.css'
import {downFile} from '../Fetch'
class Header extends Component {
	constructor(props) {
		// code
		super(props);
		this.state={
			username:'',
			url:''
		}
	}
	componentWillMount() {
		// console.log(localStorage.hasOwnProperty('userName'));
		if (localStorage.hasOwnProperty('userName')) {
			downFile().then((url) => {
				this.setState({
					url: url,
					username: localStorage.getItem('userName')
				})
			})

		} else {
			return;
		}


	}
	exit(e){
		this.setState({
			username:''
		})
		localStorage.removeItem('userName')


	}
	render() {

		return(
			<header className='header_wrap'>
				<div className='container'>
					<div className='row'>
						<div className='col-xs-12 header'>
							<div className='header_left'>
								<div>
									<a className='logo' download href={this.state.url}>云课堂</a>
								</div>
								<div className='header_alert'>
									<i className='fa fa-bell'></i>
						            <span></span>
								</div>
							</div>
				            {
				            	this.state.username === ''?
				            	<div className='user_info'>
					                <a className="login" href='#/login'>登录</a>
					                <a className='regist' href='#/register'>注册</a>
				                </div>
				                :
				                <div>
				                	<div className="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
				                	    <span className='user_name'>{this.state.username} </span>
				                	    <span className='caret'></span>
				                	</div>
				                    <ul className="dropdown-menu pull-right" aria-labelledby="dropdownMenu1">
				                	    <li role="presentation" >
					                	    <div className='arrow_up'></div>
				                		    <a role="menuitem" onClick={(e)=>{this.exit(e)}}>退出</a>
				                	    </li>
				                    </ul>
				                </div>
				            }


						</div>
					</div>
				</div>
			</header>

			)
	}

	// methods
}
export default Header