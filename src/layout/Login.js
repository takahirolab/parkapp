import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Logoimg from '../images/logoimg.svg';
import Googleicon from '../images/google.svg';
import TwLogo from '../images/Twitter_Logo.svg'
import { Link } from 'react-router-dom';


export class Login extends Component {
    render() {
        const classes = useStyles();
        // getModalStyle is not a pure function, we roll the style only on the first render
        const [modalStyle] = React.useState(getModalStyle);
        const [open, setOpen] = React.useState(false);

        const handleOpen = () => {setOpen(true);};
        const handleClose = () => {setOpen(false);};



        return (
            <div>
                <button type="button" onClick={handleOpen}>
                    Open Modal
                </button>
                <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div className="login-modal">
                        <div className="login-modal-inner">
                            <div className="login-title-head">
                                <h2>ログインする</h2>
                                <img src={Logoimg} className="gl-logo__" />
                                <h2 className="login-title-size ">Parkrへようこそ</h2>
                            </div>
                            <div className="sns-login-items">
                                <div className="sns-login">
                                    <img src={Googleicon} className="gl-logo" />
                                    <p>Googleではじめる</p>
                                </div>
                                <div className="sns-login tw-color">
                                    <img src={TwLogo} className="tw-logo" />
                                    <p>twitterではじめる</p>
                                </div>
                            </div>
                            <div className="mail-login">
                                <h2>メールアドレスではじめる</h2>


                                {/* onSubmit={this.handleSubmit}  */}

                                <form noValidate className="login-form">
                                    <div className="login-mail-input">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            label="Email"
                                            className="mail-input"
                                            placeholder="メールアドレス"
                                            //   helperText={this.state.error.email}
                                            //   error={this.state.errors ? true : false}
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            fullWidth
                                        />
                                    </div>

                                    <div className="login-mail-input">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            label="Password"
                                            className="mail-input"
                                            placeholder="パスワード"
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                            fullWidth
                                        />
                                    </div>
                                    <p className="guidline">登録することで、利用規約とプライバシーポリシーに同意したものとみなされます。</p>

                                    <div className="login-mail-input btn-color">
                                        <button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            className="mail-registar"
                                        >
                                            はじめる
                                            </button >
                                    </div>
                                    <br />
                                    <small>
                                        dont have an account ? sign up <Link to="/signup">here</Link>
                                    </small>
                                </form>
                            </div>

                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Login


function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
