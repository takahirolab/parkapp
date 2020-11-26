import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { ReactComponent as LogoWhite } from '../images/LogoWhite.svg';
import { ReactComponent as TwitterWhite } from '../images/TwitterWH.svg';
import { ReactComponent as IGWhite } from '../images/IGWhite.svg';
import FacebookLogo from '../images/FR.png';
import Footermodulescss from './Footer.module.scss'



export class Footer extends Component {
    render() {
        return (
            <footer className={Footermodulescss.footer}>
                <div className={Footermodulescss.footer__inner}>
                    <div className={Footermodulescss.footer__main}>
                <div className={Footermodulescss.footerLogo__inner}>
                            <Link to={{ pathname: "/" }}><LogoWhite className={Footermodulescss.footer___Log} /></Link>
                    </div>
                        <div className={Footermodulescss.footer__itemsRtght}>
                            <div className={Footermodulescss.footer__content}>
                                <h2 className={Footermodulescss.footer__h2}>公園を探す</h2>
                                <ul className={(Footermodulescss.footer__items,Footermodulescss.footer__right)}>
                                    <li className={Footermodulescss.footer__item}><Link to={{ pathname: "/park/search", search: `?parkTag=${'all'}` }} className={Footermodulescss.footer_white}>すべての公園一覧</Link></li>
                                <li className={Footermodulescss.footer__item}><Link to={{ pathname: "/park/search",state: { parklocation: '東京都' } , search: `?parklocation=${'東京都'}` }} className={Footermodulescss.footer_white}>東京都の公園一覧</Link></li>
                            </ul>
                        </div>
                        <div className={Footermodulescss.footer__content}>
                        <h2 className={Footermodulescss.footer_h2}>本サービスについて</h2>
                            <ul className={(Footermodulescss.footer_items_footer_right)}>
                                    <li className={Footermodulescss.footer_item}><Link to="/about" className={Footermodulescss.footer_white}>パークルについて</Link></li>
                                    <li className={Footermodulescss.footer_item}><Link to="/" className={Footermodulescss.footer_white}>お問い合わせ</Link></li>
                                    <li className={Footermodulescss.footer_item}><Link to="/" className={Footermodulescss.footer_white}>利用規約</Link></li>
                            </ul>
                        </div>
                </div>
                </div>
                <hr className={Footermodulescss.footer_border}></hr>

                <div className={Footermodulescss.footer_incLog}>

                         <div className={(Footermodulescss.sociallogo_footer,Footermodulescss.sociallogo_footerPC,Footermodulescss.footer_sp_log)}>
                                    <TwitterWhite style={{ width:37,marginRight:7,height:'auto' }} />
                                    <IGWhite style={{ width:34 ,marginRight:14,height:'auto'}} />
                                     <img src={FacebookLogo} style={{ width: '25px' }} />
                        </div>
                        <p className={Footermodulescss.footer_inc}>©2020 Parkr, Inc.</p>
                    </div>
                    </div>
            </footer>
    )
}
}

export default Footer

