import Image from "next/image";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="bg-blue-100 h-full p-4 rounded-xl px-4">
      <div className="flex justify-center items-center pt-4 pb-2">
        <Image
          src="/unnamed.jpg"
          width={300}
          height={300}
          alt="profile picture"
          className="w-1/4 aspect-square rounded-full border-4 border-white"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Armonthep Chrtree</h1>
        <p className="text-base">Software Engineer</p>
      </div>

      <div className="py-10 text-center ">" May the force be with you "</div>
      <div className="p-6 mx-1 xl:mx-6 bg-blue-300 rounded-md">
        <p>
          <b>Age:</b> 26
        </p>
        <p>
          <b>Status:</b> Single
        </p>
        <p>
          <b>Location:</b> Bangkok
        </p>
      </div>
    </div>
  );
};

export default Profile;
