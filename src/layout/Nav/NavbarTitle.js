import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as LogoWhite } from '../../images/LogoWhite.svg';


export class NavbarTitle extends Component {
        constructor(props) {
          super(props);
          this.state = {
              currentPosition: 0
          };
        }


    scrollTop() {
        this.setState({
        currentPosition:Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop)})}

    componentDidMount() {
        window.addEventListener('scroll', event => this.watchCurrentPosition(), true)
      }

      componentWillUnmount() {
        window.removeEventListener('scroll', event => this.watchCurrentPosition(), false)
      }

      watchCurrentPosition() {
        console.log(this.scrollTop())
      }



    render() {
        return (
                          <div className="nav-title">
                              <Link to="/" className="nav-titile-logo">
                              {this.state.currentPosition < 170? <LogoWhite className="logo__size"/>: <Logo className="logo__size"/>}
                              </Link>
                          </div>
        )
    }
}

  export default (NavbarTitle);
