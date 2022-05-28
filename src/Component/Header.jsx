import React from 'react'
import web from '../Images/YoungLabsLogo.webp';
const Header = () => {
  return (
    <div>
      <div className='container-fluid header'>
        <nav className="navbar navbar-light bg-light justify-content-between  px-4">
          <img className="navbar-brand" src={web} alt=''></img>
          <form className="form-inline">
            <button className="btn btn-success my-2 my-sm-0" type="submit">Log in</button>
          </form>
        </nav>
      </div>

    </div>
  )
}
export default Header