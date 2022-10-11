import React from 'react'
import Footer from '../footer';
import Header from '../header';
import TopChefs from '../topchefs';

const Dashboard = () => {
  return (
    <div className='w-fit h-fit md:w-screen md:h-screen lg:w-screen lg:h-screen '>
      <Header/>
      <TopChefs/>
      <Footer/>
    </div>
  )
}

export default Dashboard;