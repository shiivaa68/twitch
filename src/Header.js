import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'
import GoogleAuthWithRedux from './GoogleAuthWithRedux'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Streamy
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Stream
               </Link>
               {/* <GoogleAuth/> */}
               <GoogleAuthWithRedux/>
            </div>
        </div>
    )
}

export default Header;