import React from "react";
import BookLoading from "./Loading/BookLoading";
import DefaultLoading from "./Loading/DefaultLoading";

interface Props {
  defaultLoader?: boolean;
}

const Loading: React.FC<Props> = ({ defaultLoader = true }) => {
  return (
    <div className="Loading">
      {defaultLoader ? <DefaultLoading /> : <BookLoading />}
    </div>
  );
};

export default Loading;
