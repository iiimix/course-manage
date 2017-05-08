import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute,hashHistory} from 'react-router'



import Login from './component/login/Login'
import App from './component/App'
import Index from './component/Index'
import Register from './component/login/Register'


render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
     </Route>
  </Router>,
  document.getElementById('root')
);
