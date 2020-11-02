
 import React, { Component, Fragment } from 'react'
 import PropTypes from 'prop-types';
 import withStyles from '@material-ui/core/styles/withStyles';
 import Button from '@material-ui/core/Button'
 import Grid from '@material-ui/core/Grid'
 import TextField from '@material-ui/core/TextField'


 import {connect} from 'react-redux';
 import {submitComment} from '../../redux/actions/dataActions'
import { Park } from './Park';
import { SET_ERRORS } from '../../redux/types';




 const styles = theme => ({
     ...theme.spreadThis,
 })


 class CommentForm extends Component {
   state = {
    comment:'',
       errors:{}
   }

   componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }


   handleChange= (event) => {
       this.setState({[event.target.name]:event.target.value});
   }

   handleSubmit = (event) => {
       event.preventDefault();
       this.props.submitComment(this.props.parkId,{comment:this.state.comment});
   }

    render() {
        const {classes, authenticated} =this.props;
        const errors = this.state.errors;
        console.log(this.state.comment)
        console.log(this.props.parkId)
        const CommentForMarkup =authenticated ?(

                <form onSubmit={this.handleSubmit} className="ParkInf-flex">
                    <input
                    name="comment"s
                    type="textarea"
                    label="Comment on park"
                    // error={errors.comment ? true :false}
                    // helperText={errors.comment}
                    value={this.state.comment}
                    onChange={this.handleChange}
                    className="Comment-input"
                    />
                    <button type="submit"
                    className="comment-btn">
                    コメントする
                    </button>
                </form>


        ):null
        return CommentForMarkup;
    }
}


CommentForm.propTypes ={
    submitComment:PropTypes.func.isRequired,
    UI:PropTypes.object.isRequired,
    classes:PropTypes.object.isRequired,
    parkId:PropTypes.string.isRequired,
    authenticated:PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    UI:state.UI,
    authenticated:state.user.authenticated
})



export default connect(mapStateToProps,{submitComment})(withStyles(styles)(CommentForm));
