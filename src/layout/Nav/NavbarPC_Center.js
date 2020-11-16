import React from 'react'
import { Link } from 'react-router-dom';

const NavbarPC_Center = () => {
  return (
    <ul className="nav-items_center">
    <Link to="/" className="nav-item nav-item__black">ホーム</Link>
    <Link to="/about" className="nav-item nav-item__black">サービスについて</Link>
    <Link to="/park/search" className="nav-item nav-item__black">公園をさがす</Link>
    </ul>
  )
}

export default NavbarPC_Center
