import React from "react";
import Memory from "../components/Memory";
import Navbar from "../components/Navbar";
import { IMemory } from "../storeTypes";

type Props = {};

const memories: IMemory[] = [
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
];

const Lane = (props: Props) => {
  return (
    <div className="Lane">
      <header className="Lane__header">
        {/* Navbar */}
        <Navbar />

        <h1>Memories publisthed on this day</h1>
      </header>

      <main className="Lane__main">
        {memories.length ? (
          memories.map((memory, id) => (
            <Memory key={id} isOwnProfile={true} username="" memory={memory} />
          ))
        ) : (
          <p>No memories for this day</p>
        )}
      </main>
    </div>
  );
};

export default Lane;
