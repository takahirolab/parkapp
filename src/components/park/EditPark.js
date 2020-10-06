import React, { Component, Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import MyButton from '../../util/MyButton';

// MUI Stuff
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DeleteOutline from '@material-ui/icons/DeleteOutlined';

import { connect } from 'react-redux';
import { deleteScream } from '../../redux/actions/dataActions';


class EditPark extends Component {
  state = {
    parkName:'',
    parkAbout:'',
    parkFeature:'',
    parkPrice:'',
    parkTag1:'',
    parkTag2:'',
    parkTag4:'',
    parkUrl:'',
    parkLocation:'',
    open: false
  };



  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  deleteScream = () => {
    this.props.deleteScream(this.props.parkId);
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <MyButton
          tip="Delete Scream"
          onClick={this.handleOpen}
        >
          <DeleteOutline color="secondary"/>
        </MyButton>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >

          <DialogTitle>
            公園を削除しますか？？
          </DialogTitle>

          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              やめる
            </Button>
            <Button onClick={this.deleteScream} color="secondary">
            　削除する
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

EditPark.propTypes = {
  deleteScream: PropTypes.func.isRequired,
  parkId: PropTypes.string.isRequired
};

export default connect(
  null,
  { deleteScream }
)(EditPark);
