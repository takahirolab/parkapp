import React, { Component } from 'react'
import { Link } from 'react-router-dom';


import { ReactComponent as LogoWhite } from '../images/LogoWhite.svg';
import { ReactComponent as TwitterWhite } from '../images/TwitterWH.svg';
import { ReactComponent as IGWhite } from '../images/IGWhite.svg';
import FacebookLogo from '../images/FR.png';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



export class Footer extends Component {
    constructor() {
        super()
        this.openInNewTab = this.openInNewTab.bind(this)
    }

    openInNewTab (url) {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null}

    render() {
        return (
            <footer className="footer">
                <div className="footer-main">
                <div className="footerLogo-inner">
                        <Link to={{ pathname: "/" }}><LogoWhite className="footer_Log" /></Link>
                    </div>

                        <div className="footer-itemsRtght">
                            <div className="footer-content">
                            <h2 className="footer_h2">公園を探す</h2>
                            <ul className="footer-items footer-right">
                                    <li className="footer_item"><Link to={{ pathname: "/park/search", search: `?parkTag=${'all'}` }}className="footer_white">すべての公園一覧</Link></li>
                                <li className="footer_item"><Link to={{ pathname: "/park/search",state: { parklocation: '東京都' } , search: `?parklocation=${'東京都'}` }} className="footer_white">東京都の公園一覧</Link></li>

                            </ul>
                        </div>
                        <div className="footer-content">
                        <h2 className="footer_h2">本サービスについて</h2>
                            <ul className="footer-items footer-right">
                                <li　className="footer_item"><Link to="/about" className="footer_white">パークルについて</Link></li>
                                <li className="footer_item"><Link to="/" className="footer_white">お問い合わせ</Link></li>
                                <li className="footer_item"><Link to="/" className="footer_white">利用規約</Link></li>
                            </ul>
                        </div>
                </div>
                </div>
                <hr className="footer-border"></hr>

                <div className="footer-incLog">
                         <div className="sociallogo-footer sociallogo-footerPC">
                         <a style={{display: "table-cell"}} href = "https://twitter.com/parkr52047111" target = "_blank"rel = "noopener noreferrer"> <TwitterWhite style={{ width:37,marginRight:7,height:'auto'}}/></a>
                         <a style={{display: "table-cell"}} href = "https://www.instagram.com/parkrofficial/?hl=ja" target = "_blank"rel = "noopener noreferrer"> <IGWhite style={{ width:34 ,marginRight:14,height:'auto'}} /></a>
                         <a style={{display: "table-cell"}} href = "https://www.facebook.com/Parkr-%E3%83%91%E3%83%BC%E3%82%AF%E3%83%AB-100986448535651" target = "_blank"rel = "noopener noreferrer"> <img src={FacebookLogo} style={{ width:'25px',marginBottom:'0.5rem'}} /></a>
                        </div>
                        <p className="footer_inc">©2020 Parkr, Inc.</p>
                    </div>
            </footer>
    )
}
}

export default Footer
