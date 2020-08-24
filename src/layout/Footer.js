import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../style.css'

export class Footer extends Component {
    render() {
        return (

            <div className="footer">
                <div className="container footer-inner">
                <div className="footer-contents">
                    <div className="footer-content">
                        <h2>イベントをさがす</h2>
                        <ul className="footer-items footer-right">
                        <li><Link to="/">イベントをさがす</Link></li>
                        <li><Link to="/">イベントをさがす</Link></li>
                        <li><Link to="/">イベントをさがす</Link></li>
                        <li><Link to="/">イベントをさがす</Link></li>

                        </ul>
                    </div>

                </div>
                </div>
                <p>© 2013-2020 Parkr, Inc.</p>
            </div>
        )
    }
}

export default Footer
