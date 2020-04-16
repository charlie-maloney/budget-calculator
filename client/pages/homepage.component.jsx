import React from 'react';
import MainContainer from '../components/main-container.component';
import '../styles/homepage.styles.scss'

const Homepage = ({isAuth}) => (
  <div className='homepage'>
    <MainContainer isAuth={isAuth}/>
  </div>
);

export default Homepage;
