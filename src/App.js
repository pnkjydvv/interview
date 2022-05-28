import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Discription from './Component/Discription';
import Header from './Component/Header';
import './Discription.css';
import './Header.css';
const App = () => {
  return (
    <div>
      <Header />
      <Discription />
    </div>
  )
}

export default App