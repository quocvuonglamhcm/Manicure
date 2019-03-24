import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/home/home';
import ContactPage from '../pages/contact/contact';
import AboutPage from '../pages/about/about';
import ServicePage from '../pages/service/service';
import ProductPage from '../pages/product/product';
import NailerPage from '../pages/nailer/nailer';
import SupportPage from '../pages/support/support';
import NailerPageNew from '../pages/nailer/nailer-new';
import NailerPageSocial from '../pages/nailer/nailer-social.js';
import FormSignInComponent from '../components/SignIn/SignIn';
import Bangiadichvu from '../pages/banggiadichsvu/banggiadichvu';
//import ModalDialog from '../components/modal/modal';

const MainRoute = () => (
 <main>
   <Switch>
     <Route exact path='/' component={HomePage}/>
     <Route path='/home' component={HomePage}/>
     <Route path='/about' component={AboutPage}/>
     <Route path='/service' component={ServicePage}/>
     <Route path='/product/:id' component={ProductPage}/>
     <Route path='/nailer' component={NailerPage}/>
     <Route path='/support' component={SupportPage}/> 
     <Route path='/contact' component={ContactPage}/>
     {/* <Route path='/contact' component={ModalDialog}/>  */}
     <Route path='/nailer-new' component={NailerPageNew}/>
     <Route path='/nailer-social' component={NailerPageSocial}/>
     <Route path='/SignIn' component={FormSignInComponent}/>
     <Route path='/Banggiadichvu' component={Bangiadichvu}/>
   </Switch>
 </main>
)

export default MainRoute
