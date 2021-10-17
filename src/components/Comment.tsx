import React from "react";
import { Link } from "react-router-dom";

interface Props {
  user: {
    username: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  body: string;
  replies: {
    user: Props["user"];
    body: string;
  }[];
}

const Comment: React.FC<Props> = ({ user, body, replies }) => {
  return (
    <div className="Memory__comments__comment">
      <div className="Profile__main__user_data">
        <div className="Profile__main__user_data__avatar">
          {/* Comment publisher avatar */}
          <img src={user.avatar} alt="User avatar" />
        </div>
        {/* Comment publisher full name and user name */}
        <div className="Profile__main__user_data__name">
          <p className="Profile__main__user_data__name__full">
            <Link to={`/user/${user.username}`}>
              {user.first_name} {user.last_name}
            </Link>
          </p>
          <p className="Profile__main__user_data__name__user">
            <Link to={`/user/${user.username}`}>@{user.username}</Link>
          </p>
        </div>
      </div>
      {/* Comment content */}
      <p className="Memory__content">{body}</p>
      {/* Replies */}
      {replies.map((reply, i) => (
        <div className="Memory__comments__comment__replies" key={i}>
          <div className="Profile__main__user_data">
            <div className="Profile__main__user_data__avatar">
              {/* Reply publisher avatar */}
              <img src={reply.user.avatar} alt="User avatar" />
            </div>
            {/* Reply publisher full name and user name */}
            <div className="Profile__main__user_data__name">
              <p className="Profile__main__user_data__name__full">
                <Link to={`/user/${reply.user.username}`}>
                  {reply.user.first_name} {reply.user.last_name}
                </Link>
              </p>
              <p className="Profile__main__user_data__name__user">
                <Link to={`/user/${reply.user.username}`}>
                  @{reply.user.username}
                </Link>
              </p>
            </div>
          </div>
          {/* Reply content */}
          <p className="Memory__content">{reply.body}</p>
        </div>
      ))}
      {/* Write a reply */}
      <div className="Memory__comments__write">
        <textarea name="comment" id="comment" placeholder="Write a reply..." />
        <button className="btn btn-primary">Reply</button>
      </div>
    </div>
  );
};

export default Comment;
