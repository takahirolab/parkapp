import React from 'react'
import Navbar from '../../layout/Navbar'


import MainLeft from './MypageLeft'
import Footer from '../../layout/Footer'



function MypageMain (props){
        return (
            <>
                   <Navbar />
                <div className="MypageMain">
                    <div className="MypageMain-inner">
                        <MainLeft/>
                        <div className="MypageRight">
                        {props.children}
                         </div>
                    </div>
                </div>
                <Footer/>
            </>

        )
    }

export default (MypageMain);

