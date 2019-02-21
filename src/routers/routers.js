import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/home/home';
import AboutPage from '../pages/about/about';
import ServicePage from '../pages/service/service';
import ContactPage from '../pages/contact/contact';
import WorkersPage from '../pages/workers/workers';
import ProductsPage from '../pages/products/products';

const MainRoute = () => (
 <main>
   <Switch>
     <Route exact path='/' component={HomePage}/>
     <Route path='/home' component={HomePage}/>
     <Route path='/about' component={AboutPage}/>
     <Route path='/service' component={ServicePage}/>
     <Route path='/contact' component={ContactPage}/>
     <Route path='/workers' component={WorkersPage}/>
     <Route path='/products' component={ProductsPage}/>
   </Switch>
 </main>
)

export default MainRoute;
