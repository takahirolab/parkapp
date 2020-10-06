import React, { Component, Fragment,useState } from 'react';
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

import Navbar from '../layout/Navbar'


import firebase, { storage }  from "../firebase/firebase";


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
    parkFeature:'',
    parkLocation:'',
    parkUrl:'',
    parkPrice:'',
    parkTag1:'',
    parkTag2:'',
    parkTag3:'',
    parkTag4:'',
    errors: {},
    parkImage:''
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
        parkTag4: '',
        parkImage:'',
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
  console.log( event)
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
      parkTag4: this.state.parkTag4,
      parkImage: this.state.parkImage
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

              <TextField
                name="parkFeature"
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
                name="parkLocation"
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
                name="parkPrice"
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
                name="parkTag1"
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
                name="parkTag2"
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
                name="parkTag3"
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
                name="parkTag4"
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
              />

              <ImageUpload
                type="file"
                name="parkImage"
                label="タグ4"
                rows="3"
                placeholder="image"
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








function ImageUpload() {
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleImage = event => {
    const image = event.target.files[0];
    setImage(image);
  };


  const onSubmit = event => {
    event.preventDefault();
    if (image === "") {
      console.log("ファイルが選択されていません");
    }
    // アップロード処理
    const uploadTask = storage.ref(`/images/${image.name}`).put(image);
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      next,
      error,
      complete
    );
  };


  const next = snapshot => {
    // 進行中のsnapshotを得る
    // アップロードの進行度を表示
    const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  };


  const error = error => {
    // エラーハンドリング
    console.log(error);
  };

  const complete = () => {
    // 完了後の処理
    // 画像表示のため、アップロードした画像のURLを取得
    storage
      .ref("images")
      .child(image.name)
      .getDownloadURL()
      .then(fireBaseUrl => {
        setImageUrl(fireBaseUrl);
      });
    
  };

  console.log(imageUrl)




  return (
    <div className="App">
      <h1>画像アップロード</h1>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={handleImage} />
        <button>Upload</button>
      </form>
      <img src={imageUrl} alt="uploaded" />
    </div>
  );
}




