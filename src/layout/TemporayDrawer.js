import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

import { ReactComponent as Humbergar }  from '../images/humbergar.svg'
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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
                  <Link to="/Mypage">マイページ</Link>
          </ListItem>
          <ListItem className="nav-rectangle-item">
                  <Link to="/like">いいね一覧</Link>
          </ListItem>
          <ListItem className="nav-rectangle-item">
                  <Link to="/postedPark">投稿した公園</Link>
          </ListItem>
          {/* <ListItem className="nav-rectangle-item">
                  <Link to="/postedActivity">投稿したアクティビティ</Link>
          </ListItem> */}
          <ListItem className="nav-rectangle-item">
                  <Link to="/about">サービスについて</Link>
          </ListItem>
          <ListItem className="nav-rectangle-item">
                  <Link to="/guid">ガイド</Link>
          </ListItem>
          {/* <ListItem className="nav-rectangle-item">
                  <Link to="/joinActivity">参加予定のアクティビティ</Link>
          </ListItem> */}
          <ListItem className="nav-rectangle-item">
                  <Link to="/ask">問い合わせ</Link>
          </ListItem>
          <ListItem className="nav-rectangle-item">
              <div className="Mypage-Park-Post" >公園を投稿する</div>
          </ListItem>
          {/* <ListItem className="nav-rectangle-item">
              <div className="Mypage-Park-Post Mypage-color" >アクティビティを投稿する</div>
          </ListItem> */}

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
