import React, { Component }from 'react'
import { Link } from 'react-router-dom';

export class NavbarPC_CenterHome extends Component {
  constructor() {
    super();
    this.state = {
        currentPosition: 0
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', event => this.watchCurrentPosition(), true)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', event => this.watchCurrentPosition(), false)
  }

  watchCurrentPosition() {
    console.log(this.scrollTop())
  }

  scrollTop() {
    this.setState({
    currentPosition:Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop)
})

}
  render(){
    return (
      <ul className="nav-items_center">
        <Link to="/" className="nav-item nav-item__white" style={
          this.state.currentPosition > 170 ? { color: '#424242', textShadow: 'none', transition: '0.1s' } : { color: '#fff', transition: '0.1s' }
        }>ホーム</Link>
        <Link to="/about" className="nav-item nav-item__white" style={
          this.state.currentPosition > 170 ? { color: '#424242', textShadow: 'none', transition: '0.1s' } : { color: '#fff', transition: '0.1s' }
        }>サービスについて</Link>
        <Link to="/park/search" className="nav-item nav-item__white" style={
          this.state.currentPosition > 170 ? { color: '#424242', textShadow: 'none', transition: '0.1s' } : { color: '#fff', transition: '0.1s' }
        }>公園をさがす</Link>
      </ul>
    )
  }
}

export default NavbarPC_CenterHome
