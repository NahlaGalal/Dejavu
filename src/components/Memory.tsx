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
import { Link } from "react-router-dom";
import { IMemory } from "../storeTypes";
import Attachement from "./Attachement";
// import Comment from "./Comment";

interface Props {
  memory: IMemory;
  isOwnProfile: boolean;
  username: string;
}

const Memory: React.FC<Props> = ({ memory, isOwnProfile, username }) => {
  const commentsRef = useRef<any>();
  const [attachments, setAttachments] = useState<
    { url: string; type: string }[]
  >([]);

  useEffect(() => {
    const videos = memory.videos
      ? memory.videos.map((url) => ({ url: url.video, type: "Video" }))
      : [];
    const images = memory.images
      ? memory.images.map((url) => ({ url: url.image, type: "Image" }))
      : [];
    setAttachments([...videos, ...images]);
  }, [memory]);

  return (
    <section className="Memory">
      <div className="Profile__main__user_data">
        <div className="Profile__main__user_data__avatar">
          {/* Memory publisher avatar */}
          <img src={memory.author.avatar} alt="User avatar" />
        </div>
        {/* Memory publisher full name and user name */}
        <div className="Profile__main__user_data__name">
          {/* User full name */}
          <p className="Profile__main__user_data__name__full">
            <Link to={`/user/${memory.author.username}`}>
              {memory.author.first_name} {memory.author.last_name}
            </Link>
          </p>
          {/* User user name */}
          <p className="Profile__main__user_data__name__user">
            <Link to={`/user/${memory.author.username}`}>
              @{memory.author.username}
            </Link>
          </p>
        </div>
        <div className="Memory__controls">
          {isOwnProfile || memory.author.username === username ? (
            <>
              {/* Lock / Unlock memory if it's my own profile */}
              <button>
                {!memory.public ? (
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
          ) : !memory.public ? (
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
          <span>{memory.feeling.name}</span>
        </p>
        {memory.place && (
          <p>
            <BsGeoAlt size={16} title="Memory location" color="#2F0B4D" />
            Location:
            <span>{memory.place}</span>
          </p>
        )}
        <p>
          <BsCalendar size={16} title="Memory time" color="#2F0B4D" />
          Time of memory:
          {/* <span>{memory.time}</span> */}
        </p>
      </div>
      {/* Memory content */}
      <p className="Memory__content">{memory.content}</p>
      {/* Users tagged in memory */}
      {memory.parties.length ? (
        <p className="Memory__tags">
          <BsPersonCheck
            size={16}
            title="Users tagged in memory"
            color="#2F0B4D"
          />
          {memory.parties.filter((m) => m.public).length === 1 ? (
            <Link to={`/user/${memory.parties[0].receiver.username}`}>
              {memory.parties[0].receiver.username}
            </Link>
          ) : (
            <>
              <Link to={`/user/${memory.parties[0].receiver.username}`}>
                {memory.parties[0].receiver.username}
              </Link>
              {", "}
              <Link to={`/user/${memory.parties[1].receiver.username}`}>
                {memory.parties[1].receiver.username}
              </Link>{" "}
            </>
          )}
          {memory.parties.filter((m) => m.public).length > 2 && (
            <button> and {memory.parties.length - 2} others</button>
          )}
        </p>
      ) : undefined}
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
            {/* {content.comments.length} Comments */}
          </button>
          <button>
            <BsBell size={16} title="Remind memory" color="#2F0B4D" />
            Remind
          </button>
        </div>
        {/* Comments */}
        {/* {content.comments.map((comment, i) => (
          <Comment
            key={i}
            user={comment.user}
            body={comment.body}
            replies={comment.replies}
          />
        ))} */}
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
