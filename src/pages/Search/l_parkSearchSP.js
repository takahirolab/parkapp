import React from 'react'
import M_readeMore from './M_readMore'

function l_parkSearchSP (props){
    return (
        <div className="container_paddinng searchpark-sp">
            <div className="FindParksResult-items">
                {props.children}
            </div>
            <M_readeMore rows = {props.rows} ReadMore={() => {props.ReadMore();}} Maker={props.Maker}/>
        </div>
    )
}

export default (l_parkSearchSP);



