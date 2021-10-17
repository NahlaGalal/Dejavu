import React from "react";
import Memory from "../components/Memory";
import Navbar from "../components/Navbar";
import { IUsers } from "../storeTypes";

interface Props {
  profile: IUsers["profile"];
  memories: {
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
        user: {
          username: string;
          first_name: string;
          last_name: string;
          avatar: string;
        };
        body: string;
        replies: {
          user: {
            username: string;
            first_name: string;
            last_name: string;
            avatar: string;
          };
          body: string;
        }[];
      }[];
    };
  }[];
  isOwnProfile: boolean;
}

const Profile: React.FC<Props> = ({ profile, memories, isOwnProfile }) => {
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
          {isOwnProfile && (
            <button className="btn btn-primary">Create gang</button>
          )}
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

            {!isOwnProfile && (
              <div className="Profile__main__details__bio__gangs">
                <h2>Gangs in common</h2>
                <ul>
                  <li>Gang 1</li>
                  <li>Deja vu</li>
                  <li>Group</li>
                  <li>Gang gang gang</li>
                </ul>
              </div>
            )}
          </section>

          <section className="Profile__main__details__memories">
            {memories.map((memory, i) => (
              <Memory
                user={memory.user}
                content={memory.content}
                isOwnProfile={isOwnProfile}
                key={i}
              />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Profile;
