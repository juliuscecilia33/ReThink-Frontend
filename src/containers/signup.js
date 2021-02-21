import React from "react";
import { SignUp } from "../components";

export function SignUpContainer() {
  return (
    <>
      <SignUp>
        <SignUp.Slogan>
          Sign up <br />
          <span>with us, you'll like it here</span>
        </SignUp.Slogan>
        <SignUp.Description>
          Start by entering the name of your business
        </SignUp.Description>
        <SignUp.Input />
        <SignUp.LeafDots />
      </SignUp>
    </>
  );
}
