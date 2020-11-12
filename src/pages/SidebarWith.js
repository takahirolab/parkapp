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
            <Link to={{ pathname: "/park/search", state: { scene: '家族' } }} className="sidebar-item">家族</Link>
            <Link to={{ pathname: "/park/search", state: { scene: 'カップル' } }} className="sidebar-item">カップル</Link>
            <Link to={{ pathname: "/park/search", state: { scene: '同僚' } }} className="sidebar-item">同僚</Link>
            <Link to={{ pathname: "/park/search", state: { scene: '友人' } }}  className="sidebar-item">友人</Link>
            <Link to={{ pathname: "/park/search", state: { scene: 'ひとり' } }}  className="sidebar-item">ひとり</Link>
            <Link to={{ pathname: "/park/search", state: { scene: '小さい子ども' } }}  className="sidebar-item">小さい子ども</Link>
            <Link to={{ pathname: "/park/search", state: { scene: '車椅子の方' } }}  className="sidebar-item">車椅子の方</Link>
            <Link to={{ pathname: "/park/search", state: { scene: '乳幼児' } }}  className="sidebar-item">乳幼児</Link>
          </ul>
          </div>
        </>

    )
}


export default SidebarWith


