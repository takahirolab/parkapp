import React, { Component } from 'react'
import { Link } from 'react-router-dom';




  const SidebarWith = () => {
    return (
      <>
        <div className="sidebar-search">
          <h2>一緒にいくひと</h2>
            <ul className="sidebar-items">
            <Link to={{ pathname: "/park/search", state: { parkTag2: '家族' } }} className="sidebar-item">家族</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag2: 'カップル' } }} className="sidebar-item">カップル</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag2: '同僚' } }} className="sidebar-item">同僚</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag2: '友人' } }}  className="sidebar-item">友人</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag2: 'ひとり' } }}  className="sidebar-item">ひとり</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag2: '小さい子ども' } }}  className="sidebar-item">小さい子ども</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag2: '車椅子の方' } }}  className="sidebar-item">車椅子の方</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag2: '乳幼児' } }}  className="sidebar-item">乳幼児</Link>
          </ul>
          </div>
        </>

    )
}


export default SidebarWith


