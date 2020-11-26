import React, { Component } from 'react'
import Accordion from '../../components/icon/accordion';
import Navbar_admin from '../../layout/Navbar_admin'



export class home extends Component {
    render() {
        return (
            <div>
           <Navbar_admin/>
                <div className="contents_admin">
                    <div className="contents_admin_left">
                      <Accordion/>
                    </div>
                    <div className ="contets_admin">
                    </div>
                </div>
             </div>
        )
    }
}

export default (home);

