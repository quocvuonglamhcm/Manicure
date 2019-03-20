import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/home/home';
import ContactPage from '../pages/contact/contact';
import AboutPage from '../pages/about/about';
import ServicePage from '../pages/service/service';
import ProductPage from '../pages/product/product';
import NailerPage from '../pages/nailer/nailer';
import SupportPage from '../pages/support/support';
import ModalDialog from '../components/modal/modal';
import Khachhang from '../components/cap-nhat-thong-tin-khach-hang/cap-nhat-thong-tin-khach-hang'

const MainRoute = () => (
 <main>
   <Switch>
     <Route exact path='/' component={HomePage}/>
     <Route path='/home' component={HomePage}/>
     <Route path='/about' component={AboutPage}/>
     <Route path='/service' component={ServicePage}/>
     <Route path='/product/:id' component={ProductPage}/>
     <Route path='/nailer' component={NailerPage}/>
     {/* <Route path='/support' component={SupportPage}/> */}
     <Route path='/contact1' component={ContactPage}/>
     <Route path='/contact' component={ModalDialog}/>
   </Switch>
 </main>
)

export default MainRoute
