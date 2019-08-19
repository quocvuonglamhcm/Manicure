import React from 'react'
import './home.css';
import Banner from '../../components/Banner/banner';
import ClientBenefit from '../../components/Benefit/ClientBenefit';
import NailerBenefit from '../../components/Benefit/NailerBenefit';
import DownloadApp from '../../components/download/download'
import UseApp from '../../components/useapp/useapp'
import Posts from '../../components/posts/posts'
import Testimonials from '../../components/testimonials/Testimonials';

const HomePage = () => (
  <div className=''>
    <Banner />
    <div className='container'>
      <div className='register-title'>
      </div>
    </div>
    <ClientBenefit />
    <NailerBenefit/>
    <DownloadApp />
    <UseApp />
    <Posts />
    <Testimonials />
  </div>
)

export default HomePage
