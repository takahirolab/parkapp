import React from 'react'
import { Link } from 'react-router-dom';


const HomeLp = () => {
    return (
        <div className="LP">
        <Link to="/about" className="LP-btn">
          サービスについてはこちら
        </Link>
      </div>
    )
}


export default HomeLp
