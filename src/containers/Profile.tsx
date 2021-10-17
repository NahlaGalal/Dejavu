import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actionTypes } from "../actionTypes";
import Memory from "../components/Memory";
import Navbar from "../components/Navbar";
import { IStore, IUsers } from "../storeTypes";

interface Props {
  token: string;
  loading: boolean;
  profile: IUsers["profile"];
  getProfile: (token: string) => void;
}

const memories = [
  {
    user: {
      username: "elsaeed",
      first_name: "El-Saeed",
      last_name: "Ahmed",
      avatar: "https://dejavu99.herokuapp.com/media/images/avatar.png",
    },
    content: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper at tellus integer ac gravida. Sed urna sed auctor pellentesque. Eu non sit amet, sed adipiscing cursus rhoncus velit in. Vivamus dolor porttitor sit arcu luctus id. Cursus sollicitudin pulvinar sagittis posuere quam lectus nibh cursus. Amet, pharetra, et, proin aliquet bibendum. Nulla aenean sit in mattis. Sit proin tellus fusce nam ipsum condimentum nisi. Sollicitudin id etiam tincidunt sodales non volutpat faucibus. Platea auctor nunc, malesuada donec sit quis. Scelerisque enim mi non elit cras accumsan pellentesque. Cras bibendum leo dui mattis tincidunt mi morbi quam. Fusce vitae porttitor scelerisque ac scelerisque. Luctus arcu massa ipsum ut nec. Fusce sed suspendisse et orci adipiscing at. Volutpat a sit neque at fermentum, tempor, suspendisse tellus nulla. Et, facilisis pharetra est semper adipiscing ac ultricies mauris. Fames fringilla fusce egestas egestas congue sapien, magnis congue aliquet. Lacus penatibus aliquam a, at. Sit ultricies turpis dignissim tristique tortor. Tellus, tellus accumsan, ipsum ac.",
      isPrivate: false,
      feeling: "Missed",
      time: "3’rd October, 11:00 PM",
      place: "El-Mahalla El-Kobra",
      usernames: ["Nahla Galal", "Ibrahim", "Eslam", "Mona", "Ahmed"],
      comments: [
        {
          user: {
            username: "elsaeed",
            first_name: "El-Saeed",
            last_name: "Ahmed",
            avatar: "https://dejavu99.herokuapp.com/media/images/avatar.png",
          },
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper at tellus integer ac gravida. Sed urna sed auctor pellentesque. Eu non sit amet, sed adipiscing cursus rhoncus velit in. Vivamus dolor porttitor sit arcu luctus id. Cursus sollicitudin pulvinar sagittis posuere quam lectus nibh cursus. Amet, pharetra, et, proin aliquet bibendum. Nulla aenean sit in mattis.",
          replies: [],
        },
        {
          user: {
            username: "elsaeed",
            first_name: "El-Saeed",
            last_name: "Ahmed",
            avatar: "https://dejavu99.herokuapp.com/media/images/avatar.png",
          },
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper at tellus integer ac gravida. Sed urna sed auctor pellentesque. Eu non sit amet, sed adipiscing cursus rhoncus velit in. Vivamus dolor porttitor sit arcu luctus id. Cursus sollicitudin pulvinar sagittis posuere quam lectus nibh cursus. Amet, pharetra, et, proin aliquet bibendum. Nulla aenean sit in mattis.",
          replies: [
            {
              user: {
                username: "elsaeed",
                first_name: "El-Saeed",
                last_name: "Ahmed",
                avatar:
                  "https://dejavu99.herokuapp.com/media/images/avatar.png",
              },
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper at tellus integer ac gravida. Sed urna sed auctor pellentesque. Eu non sit amet, sed adipiscing cursus rhoncus velit in. Vivamus dolor porttitor sit arcu luctus id. Cursus sollicitudin pulvinar sagittis posuere quam lectus nibh cursus. Amet, pharetra, et, proin aliquet bibendum. Nulla aenean sit in mattis.",
            },
            {
              user: {
                username: "elsaeed",
                first_name: "El-Saeed",
                last_name: "Ahmed",
                avatar:
                  "https://dejavu99.herokuapp.com/media/images/avatar.png",
              },
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper at tellus integer ac gravida. Sed urna sed auctor pellentesque. Eu non sit amet, sed adipiscing cursus rhoncus velit in. Vivamus dolor porttitor sit arcu luctus id. Cursus sollicitudin pulvinar sagittis posuere quam lectus nibh cursus. Amet, pharetra, et, proin aliquet bibendum. Nulla aenean sit in mattis.",
            },
          ],
        },
      ],
    },
  },
  {
    user: {
      username: "elsaeed",
      first_name: "El-Saeed",
      last_name: "Ahmed",
      avatar: "https://dejavu99.herokuapp.com/media/images/avatar.png",
    },
    content: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper at tellus integer ac gravida. Sed urna sed auctor pellentesque. Eu non sit amet, sed adipiscing cursus rhoncus velit in. Vivamus dolor porttitor sit arcu luctus id. Cursus sollicitudin pulvinar sagittis posuere quam lectus nibh cursus. Amet, pharetra, et, proin aliquet bibendum. Nulla aenean sit in mattis. Sit proin tellus fusce nam ipsum condimentum nisi. Sollicitudin id etiam tincidunt sodales non volutpat faucibus. Platea auctor nunc, malesuada donec sit quis. Scelerisque enim mi non elit cras accumsan pellentesque. Cras bibendum leo dui mattis tincidunt mi morbi quam. Fusce vitae porttitor scelerisque ac scelerisque. Luctus arcu massa ipsum ut nec. Fusce sed suspendisse et orci adipiscing at. Volutpat a sit neque at fermentum, tempor, suspendisse tellus nulla. Et, facilisis pharetra est semper adipiscing ac ultricies mauris. Fames fringilla fusce egestas egestas congue sapien, magnis congue aliquet. Lacus penatibus aliquam a, at. Sit ultricies turpis dignissim tristique tortor. Tellus, tellus accumsan, ipsum ac.",
      images: [
        "https://dejavu99.herokuapp.com/media/sliders/5cd3605b2100003000d37f48.jpeg",
        "https://dejavu99.herokuapp.com/media/sliders/5cd3605b2100003000d37f48.jpeg",
        "https://dejavu99.herokuapp.com/media/sliders/5cd3605b2100003000d37f48.jpeg",
        "https://dejavu99.herokuapp.com/media/sliders/5cd3605b2100003000d37f48.jpeg",
        "https://dejavu99.herokuapp.com/media/sliders/5cd3605b2100003000d37f48.jpeg",
      ],
      videos: ["https://i.temp.media/video/500-x-400-10.mp4"],
      isPrivate: false,
      feeling: "Missed",
      time: "3’rd October, 11:00 PM",
      comments: [],
    },
  },
];

const Profile: React.FC<Props> = ({ token, loading, getProfile, profile }) => {
  useEffect(() => {
    getProfile(token);
  }, [token, getProfile]);

  return (
    <div className="Profile">
      <header className="Profile__header">
        {/* Navbar */}
        <Navbar />
        {/* User cover */}
        <div className="Profile__header__cover">
          <img
            src="https://dejavu99.herokuapp.com/media/sliders/5cd3605b2100003000d37f48.jpeg"
            alt="Cover for profile"
          />
        </div>
      </header>
      <main className="Profile__main">
        <div className="Profile__main__user_data">
          <div className="Profile__main__user_data__avatar">
            {/* User avatar */}
            <img
              src={`https://dejavu99.herokuapp.com${profile.avatar}`}
              alt="User avatar"
            />
          </div>
          <div className="Profile__main__user_data__name">
            {/* User full name */}
            <p className="Profile__main__user_data__name__full">
              {profile.first_name} {profile.last_name}
            </p>
            {/* User user name */}
            <p className="Profile__main__user_data__name__user">
              @{profile.username}
            </p>
          </div>
          {/* Create gang */}
          <button className="btn btn-primary">Create gang</button>
        </div>

        <div className="Profile__main__details">
          <section className="Profile__main__details__bio">
            <h2>Bio</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ullamcorper at tellus integer ac gravida. Sed urna sed auctor
              pellentesque. Eu non sit amet, sed adipiscing cursus rhoncus velit
              in. Vivamus dolor porttitor sit arcu luctus id. Cursus
              sollicitudin pulvinar sagittis posuere quam lectus nibh cursus.
              Amet, pharetra, et, proin aliquet bibendum. Nulla aenean sit in
              mattis.
            </p>
          </section>

          <section className="Profile__main__details__memories">
            {memories.map((memory, i) => (
              <Memory
                user={memory.user}
                content={memory.content}
                isOwnProfile={true}
                key={i}
              />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state: IStore) => ({
  token: state.user.token,
  loading: state.loading,
  profile: state.users.profile,
});

const mapDispatchToProps = (dispatch: any) => ({
  getProfile: (token: string) =>
    dispatch({ type: actionTypes.GET_PROFILE_SAGA, token }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
