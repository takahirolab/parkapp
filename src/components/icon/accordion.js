import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

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
              <li className="admin_item"><Link to="/admin/parklist">公園一覧</Link></li>
              <li className="admin_item"><Link to="/admin/parklist">体験一覧</Link></li>
              <li className="admin_item"><Link to="/admin/parklist">記事一覧</Link></li>
              <li className="admin_item"><Link to="/admin/parklist">ユーザー一覧</Link></li>
              <li className="admin_item"><Link to="/admin/parklist">管理者設定</Link></li>
          </ul>
      </div>
  );
}
