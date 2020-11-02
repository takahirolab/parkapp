import React, { Component, Fragment } from 'react'
import { getPark } from '../../redux/actions/dataActions';
import { connect } from 'react-redux';


export class Comments extends Component {
    constructor(props) {
        super(props);
        };

    componentDidMount() {
        this.props.getPark();
    }

     render(){
         const { park } = this.props.data;
        const parkcomments =park.comments

         return (
            <>
                 {parkcomments.map((parkcomment,index)=>{
                    return (
                        <div class="user-comment">
                        <div className="user-comment_inner">
                            <img src={parkcomment.userImage} className="userProfile_img"/>
                        </div>
                        <div className="userComment userComment-margin">
                            <div className="userNaem">{parkcomment.userName} </div>
                            <div className="userComment comment-inner"><p>{parkcomment.comment} </p></div>
                        </div>
                  </div>
                    )
                })}
             </>
         )
     }

 }




const mapStateToProps = (state) =>({
    data: state.data,
    user:state.user,
    UI: state.UI,
    authenticated: state.user.authenticated,
  })

  export default connect(mapStateToProps,{getPark})(Comments);

