import React from 'react';
import  {Switch, Route}  from 'react-router-dom';
//no js file addon needed for the seperate pages
import LandingPage from  './landingpage';

import Contact from './contact';
import Projects from './projects';
import Cart from './cart';
import MyCart from './myCart'; 
import helpCenter from './helpCenter'




const Main = () => (
<Switch>
<Route exact path="/" component={LandingPage} />
<Route path="/resume" component={LandingPage} />
<Route path="/contact" component={Contact} />
<Route path="/projects" component={Projects} />
<Route path="/cart" component={Cart} />
<Route path="/myCart" component={MyCart} />
<Route path="/helpcenter" component={helpCenter} />


</Switch>

)

export default Main;