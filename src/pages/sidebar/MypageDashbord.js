// import { Dashboard } from '@material-ui/icons'
import React from 'react'
import MapageMain  from './MypageMain'

export const MypageDashbord = () => {
    return (
        <MapageMain>

            <div className="Mypage-item-padding">
            <h2 className="Mypage-item-h2 Mypage-item-h2__margin">パークル掲示板</h2>
                <div className="Mypage-news">
                    <div className="Mypage-newsh2"><p>パークルからのお知らせ</p></div>
                    <div className="MYpagenews-iteminner">
                        <p>現在お知らせはありません。</p>
                    </div>
                </div>
            </div>
        </MapageMain>
    )
}


