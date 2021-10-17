import React, { useEffect, useRef, useState } from "react";
import {
  BsTrash,
  BsUnlock,
  BsLock,
  BsEmojiExpressionless,
  BsCalendar,
  BsGeoAlt,
  BsPersonCheck,
  BsChatText,
  BsBell,
} from "react-icons/bs";
import Attachement from "./Attachement";
import Comment from "./Comment";

interface Props {
  user: {
    username: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  content: {
    text: string;
    images?: string[];
    videos?: string[];
    isPrivate: boolean;
    feeling: string;
    time: string;
    place?: string;
    usernames?: string[];
    comments: {
      user: Props["user"];
      body: string;
      replies: {
        user: Props["user"];
        body: string;
      }[];
    }[];
  };
  isOwnProfile: boolean;
}

const Memory: React.FC<Props> = ({ user, content, isOwnProfile }) => {
  const commentsRef = useRef<any>();
  const [attachments, setAttachments] = useState<
    { url: string; type: string }[]
  >([]);

  useEffect(() => {
    const videos = content.videos
      ? content.videos.map((video) => ({ url: video, type: "Video" }))
      : [];
    const images = content.images
      ? content.images.map((img) => ({ url: img, type: "Image" }))
      : [];
    // console.log([...videos, ...images])
    setAttachments([...videos, ...images]);
  }, [content]);

  return (
    <section className="Memory">
      <div className="Profile__main__user_data">
        <div className="Profile__main__user_data__avatar">
          {/* Memory publisher avatar */}
          <img src={user.avatar} alt="User avatar" />
        </div>
        {/* Memory publisher full name and user name */}
        <div className="Profile__main__user_data__name">
          {/* User full name */}
          <p className="Profile__main__user_data__name__full">
            {user.first_name} {user.last_name}
          </p>
          {/* User user name */}
          <p className="Profile__main__user_data__name__user">
            @{user.username}
          </p>
        </div>
        <div className="Memory__controls">
          {isOwnProfile ? (
            <>
              {/* Lock / Unlock memory if it's my own profile */}
              <button>
                {content.isPrivate ? (
                  <BsLock size={24} title="Private memory" color="#2F0B4D" />
                ) : (
                  <BsUnlock size={24} title="Public memory" color="#2F0B4D" />
                )}
              </button>
              {/* Delete memory if it's my own profile or I'm  the publisher */}
              <button>
                <BsTrash size={24} title="Delete memory" color="#2F0B4D" />
              </button>
            </>
          ) : content.isPrivate ? (
            // Show whether the memory is locked or not
            <BsLock size={24} title="Private memory" color="#2F0B4D" />
          ) : (
            <BsUnlock size={24} title="Public memory" color="#2F0B4D" />
          )}
        </div>
      </div>
      {/* Memory feeling, place and time */}
      <div className="Memory__description">
        <p>
          <BsEmojiExpressionless
            size={16}
            title="Memory feeling"
            color="#2F0B4D"
          />
          Feeling:
          <span>{content.feeling}</span>
        </p>
        {content.place && (
          <p>
            <BsGeoAlt size={16} title="Memory location" color="#2F0B4D" />
            Location:
            <span>{content.place}</span>
          </p>
        )}
        <p>
          <BsCalendar size={16} title="Memory time" color="#2F0B4D" />
          Time of memory:
          <span>{content.time}</span>
        </p>
      </div>
      {/* Memory content */}
      <p className="Memory__content">{content.text}</p>
      {/* Users tagged in memory */}
      {content.usernames && content.usernames.length && (
        <p className="Memory__tags">
          <BsPersonCheck
            size={16}
            title="Users tagged in memory"
            color="#2F0B4D"
          />
          {content.usernames.length === 1
            ? content.usernames[0]
            : `${content.usernames[0]}, ${content.usernames[1]} `}
          {content.usernames.length > 2 && (
            <button> and {content.usernames.length - 2} others</button>
          )}
        </p>
      )}
      {/* Memory images and videos */}
      {attachments.length ? (
        <div className="Memory__attachments">
          <Attachement attachment={attachments[0]} />
          {attachments.length >= 3 ? (
            <div className="Memory__attachments__col">
              <Attachement attachment={attachments[1]} />
              <Attachement
                attachment={attachments[2]}
                data_num={
                  attachments.length > 3 ? `+${attachments.length - 3}` : ""
                }
                style={attachments.length > 3 && { filter: "brightness(0.5)" }}
              />
            </div>
          ) : (
            attachments.length === 2 && (
              <Attachement attachment={attachments[1]} />
            )
          )}
        </div>
      ) : undefined}
      {/* Comments */}
      <div className="Memory__comments" ref={commentsRef}>
        {/* Number of comment and reminder button */}
        <div className="Memory__comments__num">
          <button
            onClick={() => commentsRef.current.classList.toggle("active")}
          >
            <BsChatText size={16} title="Number of comments" color="#2F0B4D" />
            {content.comments.length} Comments
          </button>
          <button>
            <BsBell size={16} title="Remind memory" color="#2F0B4D" />
            Remind
          </button>
        </div>
        {/* Comments */}
        {content.comments.map((comment, i) => (
          <Comment
            key={i}
            user={comment.user}
            body={comment.body}
            replies={comment.replies}
          />
        ))}
        {/* Write a comment */}
        <div className="Memory__comments__write">
          <textarea
            name="comment"
            id="comment"
            placeholder="Write a comment..."
          />
          <button className="btn btn-primary">Comment</button>
        </div>
      </div>
    </section>
  );
};

export default Memory;

// TODO: Lock / unlock or delete memory if I'm a publisher
