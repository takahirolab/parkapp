import React from 'react'
import M_readeMore from './M_readMore'

function l_parkSearch (props){
    return (
        <div className="container_paddinng searchpark-pc">
            <div className="FindParksResult-items-pc" >
                {props.children}
            </div>
            <M_readeMore rows={props.rows} ReadMore={() => { props.ReadMore(); }} Maker={props.Maker}/>
        </div>
    )
}

export default (l_parkSearch);




