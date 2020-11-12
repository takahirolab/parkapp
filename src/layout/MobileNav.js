import React,{Component} from 'react'

import TemporayDrawer from './TemporayDrawer'
import { Link } from 'react-router-dom';
import { loginUser } from '../redux/actions/userActions';
import { connect } from 'react-redux';

export class MobileNav extends Component {
    constructor() {
        super();
        this.state = {
        };
      }
    render() {
        console.log(this.props.user)
        const { authenticated } = this.props;
    return (
        <div className="nav-mobile">

            {authenticated ? (
                <TemporayDrawer user={this.props.user}/>
            ) : (

                    <div className="Nav-LoginReg">
                        <Link to="/signup" className="Nav-Registar">
                            新規登録
                                </Link>
                        <Link to="/login" className="Nav-Login">
                            ログイン
                        </Link>
                    </div>
                )}

        </div>
    )
}
}


const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated,
    user:state.user,
    UI:state.UI
  });



  const mapActionsToProps = {loginUser};
  export default connect(mapStateToProps,mapActionsToProps)(MobileNav);
