import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actionTypes } from "../actionTypes";
import Loading from "../components/Loading";
import Profile from "../components/Profile";
import { IMemories, IStore, IUsers } from "../storeTypes";

interface Props {
  token: string;
  loading: boolean;
  profile: IUsers["profile"];
  memories: IMemories["results"];
  getProfile: (token: string) => void;
  getProfileMemories: (token: string) => void;
  history: any;
}

// const memories = [
//   {
//     user: {
//       username: "elsaeed",
//       first_name: "El-Saeed",
//       last_name: "Ahmed",
//       avatar: "https://eibrahim95.pythonanywhere.com/media/images/avatar.png",
//     },
//     content: {
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper at tellus integer ac gravida. Sed urna sed auctor pellentesque. Eu non sit amet, sed adipiscing cursus rhoncus velit in. Vivamus dolor porttitor sit arcu luctus id. Cursus sollicitudin pulvinar sagittis posuere quam lectus nibh cursus. Amet, pharetra, et, proin aliquet bibendum. Nulla aenean sit in mattis. Sit proin tellus fusce nam ipsum condimentum nisi. Sollicitudin id etiam tincidunt sodales non volutpat faucibus. Platea auctor nunc, malesuada donec sit quis. Scelerisque enim mi non elit cras accumsan pellentesque. Cras bibendum leo dui mattis tincidunt mi morbi quam. Fusce vitae porttitor scelerisque ac scelerisque. Luctus arcu massa ipsum ut nec. Fusce sed suspendisse et orci adipiscing at. Volutpat a sit neque at fermentum, tempor, suspendisse tellus nulla. Et, facilisis pharetra est semper adipiscing ac ultricies mauris. Fames fringilla fusce egestas egestas congue sapien, magnis congue aliquet. Lacus penatibus aliquam a, at. Sit ultricies turpis dignissim tristique tortor. Tellus, tellus accumsan, ipsum ac.",
//       isPrivate: false,
//       feeling: "Missed",
//       time: "3’rd October, 11:00 PM",
//       place: "El-Mahalla El-Kobra",
//       usernames: ["Nahla Galal", "Ibrahim", "Eslam", "Mona", "Ahmed"],
//       comments: [
//         {
//           user: {
//             username: "elsaeed",
//             first_name: "El-Saeed",
//             last_name: "Ahmed",
//             avatar: "https://eibrahim95.pythonanywhere.com/media/images/avatar.png",
//           },
//           body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper at tellus integer ac gravida. Sed urna sed auctor pellentesque. Eu non sit amet, sed adipiscing cursus rhoncus velit in. Vivamus dolor porttitor sit arcu luctus id. Cursus sollicitudin pulvinar sagittis posuere quam lectus nibh cursus. Amet, pharetra, et, proin aliquet bibendum. Nulla aenean sit in mattis.",
//           replies: [],
//         },
//         {
//           user: {
//             username: "elsaeed",
//             first_name: "El-Saeed",
//             last_name: "Ahmed",
//             avatar: "https://eibrahim95.pythonanywhere.com/media/images/avatar.png",
//           },
//           body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper at tellus integer ac gravida. Sed urna sed auctor pellentesque. Eu non sit amet, sed adipiscing cursus rhoncus velit in. Vivamus dolor porttitor sit arcu luctus id. Cursus sollicitudin pulvinar sagittis posuere quam lectus nibh cursus. Amet, pharetra, et, proin aliquet bibendum. Nulla aenean sit in mattis.",
//           replies: [
//             {
//               user: {
//                 username: "elsaeed",
//                 first_name: "El-Saeed",
//                 last_name: "Ahmed",
//                 avatar:
//                   "https://eibrahim95.pythonanywhere.com/media/images/avatar.png",
//               },
//               body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper at tellus integer ac gravida. Sed urna sed auctor pellentesque. Eu non sit amet, sed adipiscing cursus rhoncus velit in. Vivamus dolor porttitor sit arcu luctus id. Cursus sollicitudin pulvinar sagittis posuere quam lectus nibh cursus. Amet, pharetra, et, proin aliquet bibendum. Nulla aenean sit in mattis.",
//             },
//             {
//               user: {
//                 username: "elsaeed",
//                 first_name: "El-Saeed",
//                 last_name: "Ahmed",
//                 avatar:
//                   "https://eibrahim95.pythonanywhere.com/media/images/avatar.png",
//               },
//               body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper at tellus integer ac gravida. Sed urna sed auctor pellentesque. Eu non sit amet, sed adipiscing cursus rhoncus velit in. Vivamus dolor porttitor sit arcu luctus id. Cursus sollicitudin pulvinar sagittis posuere quam lectus nibh cursus. Amet, pharetra, et, proin aliquet bibendum. Nulla aenean sit in mattis.",
//             },
//           ],
//         },
//       ],
//     },
//   },
//   {
//     user: {
//       username: "elsaeed",
//       first_name: "El-Saeed",
//       last_name: "Ahmed",
//       avatar: "https://eibrahim95.pythonanywhere.com/media/images/avatar.png",
//     },
//     content: {
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper at tellus integer ac gravida. Sed urna sed auctor pellentesque. Eu non sit amet, sed adipiscing cursus rhoncus velit in. Vivamus dolor porttitor sit arcu luctus id. Cursus sollicitudin pulvinar sagittis posuere quam lectus nibh cursus. Amet, pharetra, et, proin aliquet bibendum. Nulla aenean sit in mattis. Sit proin tellus fusce nam ipsum condimentum nisi. Sollicitudin id etiam tincidunt sodales non volutpat faucibus. Platea auctor nunc, malesuada donec sit quis. Scelerisque enim mi non elit cras accumsan pellentesque. Cras bibendum leo dui mattis tincidunt mi morbi quam. Fusce vitae porttitor scelerisque ac scelerisque. Luctus arcu massa ipsum ut nec. Fusce sed suspendisse et orci adipiscing at. Volutpat a sit neque at fermentum, tempor, suspendisse tellus nulla. Et, facilisis pharetra est semper adipiscing ac ultricies mauris. Fames fringilla fusce egestas egestas congue sapien, magnis congue aliquet. Lacus penatibus aliquam a, at. Sit ultricies turpis dignissim tristique tortor. Tellus, tellus accumsan, ipsum ac.",
//       images: [
//         "https://eibrahim95.pythonanywhere.com/media/sliders/5cd3605b2100003000d37f48.jpeg",
//         "https://eibrahim95.pythonanywhere.com/media/sliders/5cd3605b2100003000d37f48.jpeg",
//         "https://eibrahim95.pythonanywhere.com/media/sliders/5cd3605b2100003000d37f48.jpeg",
//         "https://eibrahim95.pythonanywhere.com/media/sliders/5cd3605b2100003000d37f48.jpeg",
//         "https://eibrahim95.pythonanywhere.com/media/sliders/5cd3605b2100003000d37f48.jpeg",
//       ],
//       videos: ["https://i.temp.media/video/500-x-400-10.mp4"],
//       isPrivate: false,
//       feeling: "Missed",
//       time: "3’rd October, 11:00 PM",
//       comments: [],
//     },
//   },
// ];

const Me: React.FC<Props> = ({
  token,
  loading,
  getProfile,
  profile,
  history,
  getProfileMemories,
  memories,
}) => {
  useEffect(() => {
    getProfile(token);
    getProfileMemories(token);
  }, [token, getProfile, getProfileMemories]);

  return loading ? (
    <Loading />
  ) : (
    <Profile
      memories={memories}
      profile={profile}
      isOwnProfile={true}
      loading={loading}
      history={history}
      errors={[]}
      success={{}}
    />
  );
};

const mapStateToProps = (state: IStore) => ({
  token: state.user.token,
  loading: state.loading,
  profile: state.users.profile,
  memories: state.memories.results,
});

const mapDispatchToProps = (dispatch: any) => ({
  getProfile: (token: string) =>
    dispatch({ type: actionTypes.GET_PROFILE_SAGA, token }),
  getProfileMemories: (token: string) =>
    dispatch({ type: actionTypes.GET_PROFILE_MEMORIES_SAGA, token }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Me);
