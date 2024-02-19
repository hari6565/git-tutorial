"use client";
import Link from "next/link";
import { Button, Label, TextInput } from "flowbite-react";
import GitHub from "../../assests/gitHub.png";
import Google from "../../assests/google.webp";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" flex flex-col border-2 border-slate-300 rounded-lg p-8 gap-4">
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Username" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <Button color="light" type="submit">
            Sign in with Creatials{" "}
          </Button>
        </form>
        <Link
          href="/GitHubLogin"
          className="flex justify-between bg-black p-3 rounded-md"
        >
          <Image
            src={GitHub}
            className="mr-3 h-6 sm:h-9 w-6"
            alt="Flowbite React Logo"
          />

          <h2 className="text-white">Sign in with GitHub</h2>
        </Link>
        <Link
          href="/components/Googlelogin"
          className="flex justify-between p-3 rounded-md"
        >
          <Image
            src={Google}
            className="mr-3 h-6 sm:h-9 w-6"
            alt="Flowbite React Logo"
          />
          <h2>Sign in with Google</h2>
        </Link>
      </div>
    </div>
  );
};

export default page;
