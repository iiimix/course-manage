import React,{Component} from 'react'
class Banner extends Component{
	render(){
		return(
			<div className='banner_wrap'>
				<div className='banner_pic'>
					<div className='banner_title'>
						<h1>大学计算机专业课程体系</h1>
						{localStorage.hasOwnProperty('userName')?
						<a className='join_us' > 欢迎使用</a>

					:
					    <a className='join_us' 
					    href='#/login'
					    >立即登录</a>
					    }
					</div>
				</div>
				<section className='product_info'>
					<div className='container'>
						<div className='row'>
							<div className='col-xs-4'>
								<a className='product_item '>
									<div>
										<img src={require('../../images/intro1.png')} alt='课堂问答'/>
										<h4 className='pic_intro'>课堂问答</h4>
									</div>
								</a>
							</div>
							<div className='col-xs-4'>
								<a className='product_item'>
									<div >
										<img src={require('../../images/colud.png')} alt='云端下载'/>
										<h4 className='pic_intro'>云端下载</h4>
									</div>
								</a>
							</div>
							<div className='col-xs-4'>
								<a className='product_item'>
									<div>
										<img src={require('../../images/online.png')} alt='在线学习'/>
										<h4 className='pic_intro'>在线学习</h4>
									</div>
								</a>
							</div>
						</div>
					</div>
				</section>
			</div>

			)
	}
}
export default Banner