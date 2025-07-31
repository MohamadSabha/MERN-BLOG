import React from "react";
import { useSelector } from "react-redux";
import { TextInput, Button } from "flowbite-react";
export default function DashProfile() {
  const { CurrentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        <input type="file" accept="image/*" hidden />
        <div className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
          <img
            src={CurrentUser.ProfilePicture}
            alt="user"
            className="rounded-full w-full h-full object-cover border-8 border-white"
          />
        </div>

        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={CurrentUser.username}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={CurrentUser.email}
        />
        <TextInput type="password" id="password" placeholder="password" />

        <Button
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800"
          outline
        >
          "Update"
        </Button>
      </form>
    </div>
  );
}
