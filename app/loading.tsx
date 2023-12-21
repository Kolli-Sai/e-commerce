import { Loader } from "lucide-react";
import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className=" w-screen h-screen flex flex-col justify-center items-center">
      <Loader className=" w-10 h-10 animate-spin" />
    </div>
  );
};

export default Loading;
