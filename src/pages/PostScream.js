import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '../util/MyButton';
// MUI Stuff
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
// Redux stuff
import { connect } from 'react-redux';
import { postScream, clearErrors } from '../redux/actions/dataActions';

import  Navbar  from '../layout/Navbar'


const styles = (theme) => ({
  ...theme.spreadThis,
  submitButton: {
    position: 'relative',
    float: 'right',
    marginTop: 10
  },
  progressSpinner: {
    position: 'absolute'
  },
  closeButton: {
    position: 'absolute',
    left: '91%',
    top: '6%'
  }
});




class PostScream extends Component {
  state = {
    open: false,
    parkName: '',
    parkAbout:'',
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors
      });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({
        parkName: '',
        parkAbout: '',
        open: false, errors: {},

      });

    }
  }
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.clearErrors();
    this.setState({ open: false, errors: {} });
  };

  handleChange = (event) => {
    this.setState({
      parkName: event.target.value,
      parkAbout: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postScream({
      parkName: this.state.parkName,
      parkAbout: this.state.parkAbout
     });

  };
  render() {
    const { errors } = this.state;
    const {
      classes,
      UI: { loading }
    } = this.props;
    return (

      <Fragment>
        <MyButton onClick={this.handleOpen} tip="Post a Scream!">
        　<div className=" admin_btn admin_color">
        <AddIcon/>　新規登録
          </div>
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <MyButton
            tip="Close"
            onClick={this.handleClose}
            tipClassName={classes.closeButton}
          >
            <CloseIcon />
          </MyButton>
          <DialogTitle>公園登録</DialogTitle>
          <DialogContent>
            <form onSubmit={this.handleSubmit}>
              <TextField
                name="parkName"
                type="text"
                label="公園名"
                multiline
                rows="3"
                placeholder="〇〇公園"
                // error={errors.body ? true : false}
                // helperText={errors.body}
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              />


              <TextField
                name="parkAbout"
                type="text"
                label="公園について"
                multiline
                rows="3"
                placeholder="〇〇公園"
                // error={errors.body ? true : false}
                // helperText={errors.body}
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              />


              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submitButton}
                disabled={loading}
              >
                登録する
                {loading && (
                  <CircularProgress
                    size={30}
                    className={classes.progressSpinner}
                  />


                )}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

PostScream.propTypes = {
  postScream: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  UI: state.UI
});

export default connect(mapStateToProps,{ postScream, clearErrors})(withStyles(styles)(PostScream));
