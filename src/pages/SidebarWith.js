import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const morning = {
    pathname: '/search',search: '?morning',state: { scene: '朝' }
  };

const picnic = {
    pathname: '/search',search: '?picnic',state: { scene: 'ピクニック' }
  };



  const SidebarWith = () => {
    return (
      <>
        <div className="sidebar-search">
          <h2>一緒にいくひと</h2>
            <ul className="sidebar-items">

              <div className="sidebar-item__hover">
                <Link to={morning} className="sidebar-item">
                  <p>家族</p>
                </Link>
              </div>

            <Link to={picnic} className="sidebar-item">カップル</Link>
            <Link to={picnic} className="sidebar-item">同僚</Link>
            <Link to={picnic} className="sidebar-item">友人</Link>
            <Link to={picnic} className="sidebar-item">ひとり</Link>
            <Link to={picnic} className="sidebar-item">小さい子ども</Link>
            <Link to={picnic} className="sidebar-item">車椅子の方</Link>
            <Link to={picnic} className="sidebar-item">乳幼児</Link>
          </ul>
          </div>
        </>

    )
}


export default SidebarWith


