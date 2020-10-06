import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../style.css'

import { ReactComponent as Footer_bk } from '../images/footer.svg';



export class Footer extends Component {
    render() {
        return (

            <div className="footer">
                {/* < Footer_bk className="footer_bk"/> */}
                <div className="footer_container">
                    <div className="footer-contents">
                        <div className="footer-content">
                            <h2 className="footer_h2">公園を探す</h2>
                            <ul className="footer-items footer-right">
                                <li　className="footer_item"><Link to="/" className="footer_white">人気の公園一覧</Link></li>
                                <li className="footer_item"><Link to="/" className="footer_white">東京都の公園一覧</Link></li>
                                <li className="footer_item"> <Link to="/" className="footer_white">おすすめの公園一覧</Link></li>
                                <li className="footer_item"> <Link to="/" className="footer_white">おもしろい公園一覧</Link></li>
                            </ul>

                        </div>
                        <div className="footer-content">
                        <h2 className="footer_h2">体験を探す</h2>
                            <ul className="footer-items footer-right">
                                <li　className="footer_item"><Link to="/" className="footer_white">人気体験</Link></li>
                                <li className="footer_item"><Link to="/" className="footer_white">東京都の体験</Link></li>
                            </ul>

                        </div>
                        <div className="footer-content">
                        <h2 className="footer_h2">本サービスについて</h2>
                            <ul className="footer-items footer-right">
                                <li　className="footer_item"><Link to="/" className="footer_white">パークルとは？</Link></li>
                                <li className="footer_item"><Link to="/" className="footer_white">お問い合わせ</Link></li>
                            </ul>

                        </div>

                    </div>

                </div>
                <p className="footer_inc">©2020 Parkr, Inc.</p>
            </div>
    )
}
}

export default Footer
