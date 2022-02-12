import React from "react";
import Loading from "../components/Loading";
import Memory from "../components/Memory";
import Navbar from "../components/Navbar";
import { IMemory } from "../storeTypes";
import { FiSettings, FiLogOut } from "react-icons/fi";
import CreateMemory from "../components/CreateMemory";

type Props = {
  loading: boolean;
  username: string;
};

const data: {
  cover: string;
  name: string;
  description: string;
  memories: IMemory[];
} = {
  cover:
    "https://images.unsplash.com/photo-1528569937393-ee892b976859?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  name: "Gang 2",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar pharetra feugiat facilisi non. Libero ut sit tortor, sit pharetra tincidunt eget vulputate sit. Varius sed aliquet dictum faucibus nunc eu pretium. Elementum libero montes, placerat auctor",
  memories: [
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper at tellus integer ac gravida. Sed urna sed auctor pellentesque. Eu non sit amet, sed adipiscing cursus rhoncus velit in. Vivamus dolor porttitor sit arcu luctus id. Cursus sollicitudin pulvinar sagittis posuere quam lectus nibh cursus. Amet, pharetra, et, proin aliquet bibendum. Nulla aenean sit in mattis. Sit proin tellus fusce nam ipsum condimentum nisi. Sollicitudin id etiam tincidunt sodales non volutpat faucibus. Platea auctor nunc, malesuada donec sit quis. Scelerisque enim mi non elit cras accumsan pellentesque. Cras bibendum leo dui mattis tincidunt mi morbi quam. Fusce vitae porttitor scelerisque ac scelerisque. Luctus arcu massa ipsum ut nec. Fusce sed suspendisse et orci adipiscing at. Volutpat a sit neque at fermentum, tempor, suspendisse tellus nulla. Et, facilisis pharetra est semper adipiscing ac ultricies mauris. Fames fringilla fusce egestas egestas congue sapien, magnis congue aliquet. Lacus penatibus aliquam a, at. Sit ultricies turpis dignissim tristique tortor. Tellus, tellus accumsan, ipsum ac.",
      statues: "Published",
      place: "",
      anonymous: false,
      author: {
        id: "1",
        username: "elsaeed",
        first_name: "Elsaeed",
        last_name: "Ahmed",
        avatar: "https://dejavu99.herokuapp.com/media/images/avatar.png",
        cover: "https://dejavu99.herokuapp.com/media/images/avatar.png",
        bio: "",
      },
      parties: [],
      feeling: {
        id: 1,
        name: "Happy",
        code: ":)",
      },
      gang: {
        id: 1,
        creator: "elsaeed",
        name: "Gang 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar pharetra feugiat facilisi non. Libero ut sit tortor, sit pharetra tincidunt eget vulputate sit. Varius sed aliquet dictum faucibus nunc eu pretium. Elementum libero montes, placerat auctor",
        cover:
          "https://images.unsplash.com/photo-1528569937393-ee892b976859?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
      },
      images: [
        {
          image:
            "https://dejavu99.herokuapp.com/media/sliders/5cd3605b2100003000d37f48.jpeg",
          video: "",
        },
        {
          image:
            "https://dejavu99.herokuapp.com/media/sliders/5cd3605b2100003000d37f48.jpeg",
          video: "",
        },
        {
          image:
            "https://dejavu99.herokuapp.com/media/sliders/5cd3605b2100003000d37f48.jpeg",
          video: "",
        },
        {
          image:
            "https://dejavu99.herokuapp.com/media/sliders/5cd3605b2100003000d37f48.jpeg",
          video: "",
        },
      ],
      videos: [
        {
          image: "",
          video: "https://i.temp.media/video/500-x-400-10.mp4",
        },
      ],
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper at tellus integer ac gravida. Sed urna sed auctor pellentesque. Eu non sit amet, sed adipiscing cursus rhoncus velit in. Vivamus dolor porttitor sit arcu luctus id. Cursus sollicitudin pulvinar sagittis posuere quam lectus nibh cursus. Amet, pharetra, et, proin aliquet bibendum. Nulla aenean sit in mattis. Sit proin tellus fusce nam ipsum condimentum nisi. Sollicitudin id etiam tincidunt sodales non volutpat faucibus. Platea auctor nunc, malesuada donec sit quis. Scelerisque enim mi non elit cras accumsan pellentesque. Cras bibendum leo dui mattis tincidunt mi morbi quam. Fusce vitae porttitor scelerisque ac scelerisque. Luctus arcu massa ipsum ut nec. Fusce sed suspendisse et orci adipiscing at. Volutpat a sit neque at fermentum, tempor, suspendisse tellus nulla. Et, facilisis pharetra est semper adipiscing ac ultricies mauris. Fames fringilla fusce egestas egestas congue sapien, magnis congue aliquet. Lacus penatibus aliquam a, at. Sit ultricies turpis dignissim tristique tortor. Tellus, tellus accumsan, ipsum ac.",
      statues: "Published",
      place: "",
      anonymous: true,
      public: true,
      author: {
        id: "1",
        username: "elsaeed",
        first_name: "Elsaeed",
        last_name: "Ahmed",
        avatar: "https://dejavu99.herokuapp.com/media/images/avatar.png",
        cover: "https://dejavu99.herokuapp.com/media/images/avatar.png",
        bio: "",
      },
      parties: [],
      feeling: {
        id: 1,
        name: "Happy",
        code: ":)",
      },
      gang: {
        id: 1,
        creator: "elsaeed",
        name: "Gang 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar pharetra feugiat facilisi non. Libero ut sit tortor, sit pharetra tincidunt eget vulputate sit. Varius sed aliquet dictum faucibus nunc eu pretium. Elementum libero montes, placerat auctor",
        cover:
          "https://images.unsplash.com/photo-1528569937393-ee892b976859?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
      },
      images: [],
      videos: [],
    },
  ],
};

/**
 * comments: [
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
 */

const Gang: React.FC<Props> = ({ loading = false, username = "" }) => {
  return loading ? (
    <Loading />
  ) : (
    <div className="Gang">
      <header className="Gang__header">
        {/* Navbar */}
        <Navbar />

        {/* User cover */}
        <div className="Gang__header__cover">
          <img src={data.cover} alt="Cover for profile" />
        </div>
      </header>

      <main className="Gang__main">
        <header className="Gang__main__header">
          {/* Gang name */}
          <h1 className="Gang__main__header__name">{data.name}</h1>
          {/* Settings and logout buttons */}
          <button className="Gang__main__header__btn Gang__main__header__btn--settings">
            <FiSettings size={24} color="#2F0B4D" title="Gang settings" />
          </button>
          <button className="Gang__main__header__btn">
            <FiLogOut size={24} color="#2F0B4D" title="Logout from gang" />
          </button>
          {/* Gang description */}
          <p className="Gang__main__header__desc">{data.description}</p>
        </header>

        <section className="Gang__main__memories">
          {/* Create memory */}
          <CreateMemory />

          {/* Show all memories */}
          {data.memories.map((memory, id) => (
            <Memory
              memory={memory}
              isOwnProfile={true}
              username={username}
              key={id}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Gang;
