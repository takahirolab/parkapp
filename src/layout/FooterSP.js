import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../style.css'

import { ReactComponent as LogoWhite } from '../images/LogoWhite.svg';
import { ReactComponent as TwitterWhite } from '../images/TwitterWH.svg';
import { ReactComponent as IGWhite } from '../images/IGWhite.svg';
import FacebookLogo from '../images/FR.png';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



export class FooterSP extends Component {
    render() {
        return (
            <div className="footer footerSP">
                {/* < Footer_bk className="footer_bk"/> */}
                <div className="footer_container">

                    <div className="footer-contents">

                        {/* <div className="footer-sns">
                        <h2>Parkrをフォローして、<br/> 全国の公園を見にいこう</h2>
                        <div className="sociallogo-footer">
                        <TwitterWhite style={{ width:46 }} />
                        <IGWhite style={{ width:39 ,marginRight:12}} />
                        <img src={FacebookLogo} style={{ width:'27px'}} />
                            </div>
                            </div> */}
                    <div className="footerLogo-inner">
                        <LogoWhite className="footer_Log" />

                    </div>
                        <div className="footer-itemsRtght">

                            <div className="footer-content">

                            <h2 className="footer_h2">公園を探す</h2>
                            <ul className="footer-items footer-right">
                                    <li className="footer_item"><Link to="/park/search" className="footer_white">人気の公園一覧<ArrowForwardIosIcon style={{fontSize:12}}/></Link></li>
                                <li className="footer_item"><Link to="/park/search" className="footer_white">東京都の公園一覧<ArrowForwardIosIcon style={{fontSize:12}}/></Link></li>
                                <li className="footer_item"> <Link to="/park/search" className="footer_white">おすすめの公園一覧<ArrowForwardIosIcon style={{fontSize:12}}/></Link></li>
                                <li className="footer_item"> <Link to="/park/search" className="footer_white">おもしろい公園一覧<ArrowForwardIosIcon style={{fontSize:12}}/></Link></li>
                            </ul>
                        </div>
                        {/* <div className="footer-content">
                        <h2 className="footer_h2">体験を探す</h2>
                            <ul className="footer-items footer-right">
                                <li　className="footer_item"><Link to="/" className="footer_white">人気体験</Link></li>
                                <li className="footer_item"><Link to="/" className="footer_white">東京都の体験</Link></li>
                            </ul>
                        </div> */}
                        <div className="footer-content">
                        <h2 className="footer_h2">本サービスについて</h2>
                            <ul className="footer-items footer-right">
                                <li　className="footer_item"><Link to="/" className="footer_white">パークルとは？<ArrowForwardIosIcon style={{fontSize:12}}/></Link></li>
                                <li className="footer_item"><Link to="/" className="footer_white">お問い合わせ<ArrowForwardIosIcon style={{fontSize:12}}/></Link></li>
                                <li className="footer_item"><Link to="/" className="footer_white">利用規約<ArrowForwardIosIcon style={{fontSize:12}}/></Link></li>
                            </ul>
                        </div>
                     </div>

                    </div>

                    <div className="sociallogo-footer sociallogo-footerPC">
                                    <TwitterWhite style={{ width:50,marginRight:14 }} />
                                    <IGWhite style={{ width:49 ,marginRight:21}} />
                                <img src={FacebookLogo} style={{ width: '35px' }} />
                        </div>


                    <div className="footer-incLog">

                        <p className="footer_inc">©2020 Parkr, Inc.</p>
                    </div>

                </div>
            </div>
    )
}
}

export default FooterSP

