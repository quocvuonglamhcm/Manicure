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
import SignUp from '../pages/signup/index'
import SignUpNailer from '../pages/SignUpNailer/SignUpNailer';
import Upproducts from '../pages/upproducts/upproducts';
import TronGoiPopUp from '../pages/service/ServicePopUp/TronGoiPopUp';
import BangGiaDichVu from '../pages/banggiadichvu/banggiadichvu';
import securityPage from '../pages/security/security';
import securityPage1 from '../pages/security/security1';
import ProfileClient from '../pages/profileuser/profileuser'
import ProfileUser from '../pages/profileuser/profileuser';
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
     <Route path='/nailer-new' component={NailerPageNew}/>
     <Route path='/nailer-social' component={NailerPageSocial}/>
     <Route path='/SignUp' component={SignUp}/>
     <Route path='/SignUpNailer' component ={SignUpNailer}/>
     <Route path='/upproducts' component ={Upproducts}/>
     <Route path='/TronGoiPopUp' component ={TronGoiPopUp}/>
     <Route path='/BangGiaDichVu' component ={BangGiaDichVu}/>
     <Route path='/security' component={securityPage}/>
     <Route path='/security1' component={securityPage1}/>
     <Route path='/ProfileClient' component={ProfileClient}/>
     <Route path='/user' component={ProfileUser}/>
   </Switch>
 </main>
)

export default MainRoute;
