import React, { Component } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import CommentRoundedIcon from '@material-ui/icons/CommentRounded';
import { ReactComponent as Humbergar }  from '../images/humbergar.svg'
import { Link } from 'react-router-dom';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import {logoutUser,uploadImage,loginUser} from '../redux/actions/userActions';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  console.log(props.user.credentials.imageUrl)

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >


      <List>
        <ListItem className="nav-rectangle-item">
                  <img src={props.user.credentials.imageUrl} className="Nav-profileImage" />
                  <Link to="/sp/Mypage/">マイページ</Link>
        </ListItem>
        <ListItem className="nav-rectangle-item">
                  <DashboardRoundedIcon style={{ fontSize: '20', color: '#93918f' ,marginRight:'1rem'}} />
                  <Link to="/sp/dashbord">ダッシュボード</Link>
          </ListItem>
        <ListItem className="nav-rectangle-item">
                  <FavoriteRoundedIcon style={{ fontSize: '20', color: '#93918f' ,marginRight:'1rem'}} />
                  <Link to="/sp/like">いいね一覧</Link>
          </ListItem>
        <ListItem className="nav-rectangle-item">
                  <CommentRoundedIcon style={{ fontSize: '20', color: '#93918f' ,marginRight:'1rem'}} />
                  <Link to="/about">あなたのコメント</Link>
          </ListItem>

          {/* <ListItem className="nav-rectangle-item">
                  <Link to="/joinActivity">参加予定のアクティビティ</Link>
          </ListItem> */}
          <ListItem className="nav-rectangle-item">
                  <Link to="/ask">問い合わせ</Link>
          </ListItem>
          <ListItem className="nav-rectangle-item">
              <Link to="/sp/mypage/post" className="Mypage-Park-Post" >公園を投稿する</Link>
          </ListItem>
          <MypageSignOut/>

      </List>
      <Divider />

    </div>
  );

  return (
<>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>

          <Humbergar onClick={toggleDrawer(anchor, true)}>{anchor}</Humbergar >
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>

        </React.Fragment>
      ))}
      </>

  );
}



class MypageSignOut extends Component{
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout = () => {
    this.props.logoutUser();
  }
  render() {
    return (
      <div className="nav-rectangle-item" onClick={this.handleLogout}>サインアウト</div>
    )
}
}

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  user:state.user,
  UI:state.UI
});

connect(mapStateToProps,{logoutUser})(MypageSignOut);
