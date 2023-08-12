import { VscGithub } from "react-icons/vsc";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";

import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="h-[calc(100vh-64px)]">
      <div className="flex items-center justify-center h-full px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign up to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <Input
                type="text"
                label="username"
                name="username"
                placeholder="john doe"
                value={username}
                onChange={setUsername}
              />
              <Input
                type="email"
                label="email"
                name="email"
                placeholder="name@example.com"
                value={email}
                onChange={setEmail}
              />
              <Input
                type="password"
                label="password"
                name="password"
                placeholder="••••••••"
                value={password}
                onChange={setPassword}
              />

              <Button>Sign un now</Button>
              <p className="text-sm text-center font-medium text-gray-500">
                Or continue with
              </p>
              <div className="flex items-center gap-4">
                <Button>
                  <BsGoogle />
                  <span>Google</span>
                </Button>
                <Button>
                  <VscGithub />
                  <span>Github</span>
                </Button>
              </div>
              <p className="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline -500"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
