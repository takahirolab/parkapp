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
import { postActivity, clearErrors } from '../redux/actions/dataActions';

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




class PostParksActivity extends Component {
  state = {
    open: false,
    AcName: '',
    // AcFeature:'',
    // AcAbout:'',
    // AcLocation:'',
    // parkUrl:'',
    // AcPrice:'',
    // AcTag1:'',
    // AcTag2:'',
    // AcTag3:'',
    // hostName:'',
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
        AcName: '',
        // AcFeature:'',
        // AcAbout:'',
        // AcLocation:'',
        // parkUrl:'',
        // AcPrice:'',
        // AcTag1:'',
        // AcTag2:'',
        // AcTag3:'',
        // hostName:'',
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
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postActivity({
      AcName: this.state.parkName
      // AcFeature: this.state.parkAbout,
      // AcAbout: this.state.parkFeature,
      // AcLocation: this.state.parkLocation,
      // parkUrl: this.state.parkUrl,
      // AcPrice: this.state.parkPrice,
      // AcTag1: this.state.parkTag1,
      // AcTag2: this.state.parkTag2,
      // AcTag3: this.state.parkTag3,
      // hostName: this.state.hostName,


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
          <DialogTitle>体験登録</DialogTitle>
          <DialogContent>

            <form onSubmit={this.handleSubmit}>
              <TextField
                name="AcName"
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

{/*
              <TextField
                name="AcFeature"
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

              <TextField
                name="AcAbout"
                type="text"
                label="公園の特徴"
                multiline
                rows="3"
                placeholder="しぜんがいっぱい"
                // error={errors.body ? true : false}
                // helperText={errors.body}
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              />

              <TextField
                name="AcLocation"
                type="text"
                label="所在地"
                multiline
                rows="3"
                placeholder="東京都"
                // error={errors.body ? true : false}
                // helperText={errors.body}
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="parkUrl"
                type="text"
                label="公園公式URL"
                multiline
                rows="3"
                placeholder="〇〇〇〇.com"
                // error={errors.body ? true : false}
                // helperText={errors.body}
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              />

                <TextField
                name="AcPrice"
                type="text"
                label="料金"
                multiline
                rows="3"
                placeholder="〇〇〇〇円"
                // error={errors.body ? true : false}
                // helperText={errors.body}
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="AcTag1"
                type="text"
                label="タグ1"
                multiline
                rows="3"
                placeholder="家族"
                // error={errors.body ? true : false}
                // helperText={errors.body}
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="AcTag2"
                type="text"
                label="タグ2"
                multiline
                rows="3"
                placeholder="大地"
                // error={errors.body ? true : false}
                // helperText={errors.body}
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="AcTag3"
                type="text"
                label="タグ3"
                multiline
                rows="3"
                placeholder="自然"
                // error={errors.body ? true : false}
                // helperText={errors.body}
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="hostName"
                type="text"
                label="タグ4"
                multiline
                rows="3"
                placeholder="デート"
                // error={errors.body ? true : false}
                // helperText={errors.body}
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              /> */}



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

PostParksActivity.propTypes = {
  postActivity: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  UI: state.UI
});

export default connect(mapStateToProps,{postActivity, clearErrors})(withStyles(styles)(PostParksActivity));

