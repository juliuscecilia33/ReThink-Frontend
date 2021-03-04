import React from "react";
import { SignUp3 } from "../components";
import * as ROUTES from "../constants/routes";

export function SignUp3Container() {
  return (
    <>
      <SignUp3>
        <SignUp3.Slogan>
          Sign up <br />
          <span>with us, you'll like it here</span>
        </SignUp3.Slogan>
        <SignUp3.Label>Hi Michael!</SignUp3.Label>
        <SignUp3.Description>
          Does the information below look correct?
        </SignUp3.Description>
        <SignUp3.Rectangle>
          <SignUp3.InfoSec>
            <SignUp3.InfoTitle>Fair Trade Winds</SignUp3.InfoTitle>
            <SignUp3.InfoDescr>
              5329 Ballard Ave NW, Seattle, WA, 98107
            </SignUp3.InfoDescr>
            <SignUp3.InfoSecDescr>Clothing Store</SignUp3.InfoSecDescr>
          </SignUp3.InfoSec>
          <SignUp3.InfoTitle>Contact Information</SignUp3.InfoTitle>
          <SignUp3.InfoDescr>Michael Hulme</SignUp3.InfoDescr>
          <SignUp3.InfoSecDescr>michaelhulme@gmail.com</SignUp3.InfoSecDescr>
        </SignUp3.Rectangle>
        <SignUp3.Button to={ROUTES.SIGNUP}>Submit</SignUp3.Button>
        <SignUp3.DarkTallPlant />
        <SignUp3.TallPlant />
      </SignUp3>
    </>
  );
}
