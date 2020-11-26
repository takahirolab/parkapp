import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import CircularProgress from '@material-ui/core/CircularProgress';

// Redux stuff
import { connect } from 'react-redux';
import { postScream, clearErrors } from '../redux/actions/dataActions';




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


class Contact extends Component {
  state = {
    open: false,
    parkName: '',
    parkAbout:'',
    parkFeature:'',
    parkLocation:'',
    parkUrl:'',
    parkPrice:'',
    parkTag1:'',
    parkTag2:'',
    parkTag3:'',
    parkTag4:'',
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
        parkAbout:'',
        parkFeature:'',
        parkLocation:'',
        parkUrl:'',
        parkPrice:'',
        parkTag1:'',
        parkTag2:'',
        parkTag3:'',
        parkTag4:'',
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
    this.props.postScream({
      parkName: this.state.parkName,
      parkAbout: this.state.parkAbout,
      parkFeature: this.state.parkFeature,
      parkLocation: this.state.parkLocation,
      parkUrl: this.state.parkUrl,
      parkPrice: this.state.parkPrice,
      parkTag1: this.state.parkTag1,
      parkTag2: this.state.parkTag2,
      parkTag3: this.state.parkTag3,
      parkTag4: this.state.parkTag4

     });

  };
  render() {
    const { errors } = this.state;
    const {
      classes,
      UI: { loading }
    } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className="ParkPost-form">
         <h2>公園名</h2>
              <input
                name="parkName"
                type="text"
                label="公園名"

                rows="4"
                placeholder="〇〇公園"
                // error={errors.body ? true : false}
                // helperText={errors.body}
                className="input parkName-input"
                onChange={this.handleChange}
                fullWidth
        />

              <button
                type="submit"
                variant="contained"
                color="primary"
                className="btn-submit"
                disabled={loading}
              >
                問い合わせをする
                {loading && (
                  <CircularProgress
                    size={30}
                    className={classes.progressSpinner}
                  />
                )}
              </button>
            </form>
    );
  }
}

Contact.propTypes = {
  postScream: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  UI: state.UI
});

export default connect(mapStateToProps,{ postScream, clearErrors})(withStyles(styles)(Contact));

