import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';


import CircularProgress from '@material-ui/core/CircularProgress';

// Redux stuff
import { connect } from 'react-redux';
import { postScream, clearErrors } from '../../redux/actions/dataActions';




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




class ParkPost extends Component {
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

                rows="3"
                placeholder="〇〇公園"
                // error={errors.body ? true : false}
                // helperText={errors.body}
                className="input parkName-input"
                onChange={this.handleChange}
                fullWidth
              />

            <h2>公園について</h2>
              <input
                name="parkAbout"
                type="text"
                label="公園について"
                multiline
                rows="3"
                placeholder="〇〇公園"
                // error={errors.body ? true : false}
                // helperText={errors.body}
                className="input parkName-input"
                onChange={this.handleChange}
                fullWidth
              />

            <h2>公園の特徴</h2>
              <input
                name="parkFeature"
                type="text"
                label="公園の特徴"
                multiline
                rows="3"
                placeholder="しぜんがいっぱい"
                // error={errors.body ? true : false}
                // helperText={errors.body}
                className="input parkName-input"
                onChange={this.handleChange}
                fullWidth
              />
              <h2>所在地</h2>
              <input
                name="parkLocation"
                type="text"
                label="所在地"
                multiline
                rows="3"
                placeholder="東京都"
                // error={errors.body ? true : false}
                // helperText={errors.body}
                className="input parkName-input"
                onChange={this.handleChange}
                fullWidth
        />
               <h2>URL</h2>
              <input
                name="parkUrl"
                type="text"
                label="公園公式URL"
                multiline
                rows="3"
                placeholder="〇〇〇〇.com"
                // error={errors.body ? true : false}
                // helperText={errors.body}
                className="input parkName-input"
                onChange={this.handleChange}
                fullWidth
              />

                <h2>料金</h2>
                <input
                name="parkPrice"
                type="text"
                label="料金"
                multiline
                rows="3"
                placeholder="〇〇〇〇円"
                // error={errors.body ? true : false}
                // helperText={errors.body}
                className="input parkName-input"
                onChange={this.handleChange}
                fullWidth
        />
               <h2>タグ1</h2>
              <input
                name="parkTag1"
                type="text"
                label="タグ1"
                multiline
                rows="3"
                placeholder="家族"
                // error={errors.body ? true : false}
                // helperText={errors.body}
                className="input parkName-input"
                onChange={this.handleChange}
                fullWidth
        />
         {/* <h2>タグ2</h2>
              <input
                name="parkTag2"
                type="text"
                label="タグ2"
                multiline
                rows="3"
                placeholder="大地"
                // error={errors.body ? true : false}
                // helperText={errors.body}
                className="input parkName-input"
                onChange={this.handleChange}
                fullWidth
        />
         <h2>タグ3</h2>
              <input
                name="parkTag3"
                type="text"
                label="タグ3"
                multiline
                rows="3"
                placeholder="自然"
                // error={errors.body ? true : false}
                // helperText={errors.body}
                className="input parkName-input"
                onChange={this.handleChange}
                fullWidth
        />
         <h2>タグ4</h2>
              <input
                name="parkTag4"
                type="text"
                label="タグ4"
                multiline
                rows="3"
                placeholder="デート"
                // error={errors.body ? true : false}
                // helperText={errors.body}
                className="input parkName-input"
                onChange={this.handleChange}
                fullWidth
              /> */}



              <button
                type="submit"
                variant="contained"
                color="primary"
                className="btn-submit"
                disabled={loading}
              >
                登録する
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

ParkPost.propTypes = {
  postScream: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  UI: state.UI
});

export default connect(mapStateToProps,{ postScream, clearErrors})(withStyles(styles)(ParkPost));

