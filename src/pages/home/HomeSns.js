import React from 'react'
import PropTypes from 'prop-types'
import YoutubeLogo from '../../images/youtube.png'
import TwitterLogo from '../../images/Twitter_Logo_Blue.svg'
import InstaLogo from '../../images/insta.svg'
import FacebookLogo from '../../images/facebook.png'

const HomeSns = () => {
    return (
        <div className="SNS container_paddinng container-paddding-sp">
        <h2 className="park-city-item__h2 SNS_h2">ParkrのSNSをフォロー</h2>
        <p>「あなたの身近な公園を世界に」をコンセプトに、写真や動画を配信しております。
        </p>
        <div className="sns-follow-inner">
          <img src={YoutubeLogo} className="faLogo sns__padding"/>
          <img src={TwitterLogo} className="TwLogo sns__padding"/>
          <img src={InstaLogo} className="faLogo sns__padding"/>
          <img src={FacebookLogo} className="faLogo sns__padding"/>
        </div>
    </div>
    )
}

export default HomeSns
