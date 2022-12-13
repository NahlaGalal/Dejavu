import React, { useState } from "react";
import Memory from "../components/Memory";
import Navbar from "../components/Navbar";
import { IMemories, IUsers } from "../storeTypes";
import CreateMemory from "./CreateMemory";
import CreateGang from "./Popups/CreateGang";

interface Props {
  profile: IUsers["profile"];
  memories: IMemories["results"]
  isOwnProfile: boolean;
  loading?: boolean;
  history?: any;
  success?: any;
  errors?: any;
}

const Profile: React.FC<Props> = ({
  profile,
  memories,
  isOwnProfile,
  loading,
  history,
  success,
  errors,
}) => {
  const [createGangOverlay, setCreateGangOverlay] = useState<boolean>(false);

  return (
    <div className="Profile">
      <header className="Profile__header">
        {/* Navbar */}
        <Navbar />
        {/* User cover */}
        <div className="Profile__header__cover">
          <img
            src={`https://eibrahim95.pythonanywhere.com/${profile.cover}`}
            alt="Cover for profile"
          />
        </div>
      </header>
      <main className="Profile__main">
        <div className="Profile__main__user_data">
          <div className="Profile__main__user_data__avatar">
            {/* User avatar */}
            <img
              src={`https://eibrahim95.pythonanywhere.com/${profile.avatar}`}
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
            <button
              className="btn btn-primary"
              onClick={() => setCreateGangOverlay(true)}
            >
              Create gang
            </button>
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
            {/* Create memory */}
            {!isOwnProfile && <CreateMemory />}

            {memories.map((memory, i) => (
              <Memory
                memory={memory}
                isOwnProfile={isOwnProfile}
                username={profile.username}
                key={i}
              />
            ))}
          </section>
        </div>
      </main>

      {createGangOverlay && (
        <CreateGang
          errors={errors}
          history={history}
          loading={loading || false}
          success={success}
          onClose={() => setCreateGangOverlay(false)}
        />
      )}
    </div>
  );
};

export default Profile;
