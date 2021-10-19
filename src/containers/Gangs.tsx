import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

interface Props {}

const gangs: {
  id: number;
  name: string;
  description: string;
  cover?: string;
  users: {
    id: number;
    username: string;
    avatar: string;
  }[];
}[] = [
  {
    id: 1,
    name: "Gang 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar pharetra feugiat facilisi non. Libero ut sit tortor, sit pharetra tincidunt eget vulputate sit. Varius sed aliquet dictum faucibus nunc eu pretium. Elementum libero montes, placerat auctor...",
    users: [
      {
        id: 1,
        username: "nahlaglal",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      },
      {
        id: 2,
        username: "elsaeed",
        avatar:
          "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: 3,
        username: "ibrahem",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80",
      },
    ],
  },
  {
    id: 2,
    name: "Gang 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar pharetra feugiat facilisi non. Libero ut sit tortor, sit pharetra tincidunt eget vulputate sit. Varius sed aliquet dictum faucibus nunc eu pretium. Elementum libero montes, placerat auctor...",
    cover:
      "https://images.unsplash.com/photo-1528569937393-ee892b976859?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    users: [
      {
        id: 1,
        username: "nahlaglal",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      },
      {
        id: 2,
        username: "elsaeed",
        avatar:
          "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: 3,
        username: "ibrahem",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80",
      },
      {
        id: 4,
        username: "string",
        avatar: "",
      },
    ],
  },
  {
    id: 3,
    name: "Gang 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar pharetra feugiat facilisi non. Libero ut sit tortor, sit pharetra tincidunt eget vulputate sit. Varius sed aliquet dictum faucibus nunc eu pretium. Elementum libero montes, placerat auctor...",
    users: [
      {
        id: 1,
        username: "nahlaglal",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      },
    ],
  },
  {
    id: 4,
    name: "Gang 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar pharetra feugiat facilisi non. Libero ut sit tortor, sit pharetra tincidunt eget vulputate sit. Varius sed aliquet dictum faucibus nunc eu pretium. Elementum libero montes, placerat auctor...",
    users: [
      {
        id: 1,
        username: "nahlaglal",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      },
      {
        id: 2,
        username: "elsaeed",
        avatar:
          "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
      },
    ],
  },
  {
    id: 5,
    name: "Gang 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar pharetra feugiat facilisi non. Libero ut sit tortor, sit pharetra tincidunt eget vulputate sit. Varius sed aliquet dictum faucibus nunc eu pretium. Elementum libero montes, placerat auctor...",
    cover:
      "https://images.unsplash.com/photo-1528569937393-ee892b976859?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    users: [
      {
        id: 1,
        username: "nahlaglal",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      },
      {
        id: 2,
        username: "elsaeed",
        avatar:
          "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: 3,
        username: "ibrahem",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80",
      },
      {
        id: 4,
        username: "string",
        avatar: "",
      },
    ],
  },
];

const Gangs = (props: Props) => {
  return (
    <div className="Gangs">
      <header className="Gangs__header">
        <Navbar />
        <h1>Discover your gangs</h1>
      </header>
      <main className="Gangs__container">
        {gangs.map((gang) => (
          <section
            key={gang.id}
            style={gang.cover ? { backgroundImage: `url(${gang.cover})`, backgroundColor: `rgba(255, 255, 231, 0.8)` } : {}}
            className="Gangs__container__gang"
          >
            <h2 className="Gangs__container__gang__name">{gang.name}</h2>
            <p className="Gangs__container__gang__description">
              {gang.description}
            </p>
            <div className="Gangs__container__gang__open">
              <Link to="/" className="btn btn-primary">Open</Link>
              <div className="Gangs__container__gang__open__members">
                {gang.users.slice(0, 3).map((user) => (
                  <img
                    className="Gangs__container__gang__open__members__avatar"
                    src={user.avatar}
                    alt="Group user avatar"
                    key={user.id}
                    title={user.username}
                  />
                ))}
                {gang.users.length > 3 && (
                  <span className="Gangs__container__gang__open__members__num">
                    +{gang.users.length - 3}
                  </span>
                )}
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Gangs;
