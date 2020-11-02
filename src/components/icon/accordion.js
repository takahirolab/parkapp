import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import DescriptionIcon from '@material-ui/icons/Description';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import CommentRoundedIcon from '@material-ui/icons/CommentRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
      <div>
          <ul className="admin_items">
              <li className="admin_item">
                <Link to="/admin/parklist" className="side_nav">
                  <PersonIcon style={{ fontSize:25,marginRight:15}}/>公園リスト
                </Link></li>

              <li className="admin_item">
                <Link to="/admin/" className="side_nav">
                  <DirectionsRunIcon style={{ fontSize:25,marginRight:15}}/>体験リスト
             　 </Link></li>
              <li className="admin_item" ><Link to="/admin/parklist" className="side_nav">
              <DescriptionIcon style={{ fontSize:25,marginRight:15}} />記事リスト</Link></li>
              <li className="admin_item"><Link to="/admin/parklist"className="side_nav" >
              <PeopleAltRoundedIcon style={{ fontSize:25,marginRight:15}}/>ユーザーリスト</Link></li>
              <li className="admin_item"><Link to="/admin/parklist" className="side_nav">
              <CommentRoundedIcon style={{ fontSize:25,marginRight:15}}/>コメントリスト</Link></li>
              <li className="admin_item"><Link to="/admin/parklist" className="side_nav">
              <SettingsRoundedIcon style={{ fontSize:25,marginRight:15}}/>管理者設定</Link></li>
          </ul>
      </div>
  );
}
