import React from 'react';
import {unixTimeToString} from '../util.js';
import {Link} from 'react-router';

export default class Comment extends React.Component {

  /**
   * Returns 'true' if the user liked the item.
   * Returns 'false' if the user has not liked the item.
   */
  didUserLike() {
    var likeCounter = this.props.likeCount;
    var liked = false;
    // Look for a likeCounter entry with userId 4 -- which is the
    // current user.
    for (var i = 0; i < likeCounter.length; i++) {
      if (likeCounter[i]._id  === 4) {
        liked = true;
        break;
      }
    }
    return liked;
  }

  render() {
    var likeButtonText = "Like";
    var hasLiked = false;
    if (this.didUserLike()) {
      likeButtonText = "Unlike";
      hasLiked = true;
    }
    return (
      <div>
        <div className="media-left media-top">
          PIC
        </div>
        <div className="media-body">
          <Link to={"/profile/" + this.props.author._id}>{this.props.author.fullName}</Link> {this.props.children}
          <br /><a href="#" onClick={(e) => this.props.handleClick(e, hasLiked)}> {likeButtonText} </a> · {this.props.likeCount.length} people like this· <a href="#">Reply</a> ·
            {unixTimeToString(this.props.postDate)}
        </div>
      </div>
    )
  }
}
