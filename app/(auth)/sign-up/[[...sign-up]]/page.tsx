"use client";
import React from "react";
import { SignUp } from "@clerk/nextjs";
const SignUpPage = () => {
  return (
    <main className="flex h-screen items-center m-12 justify-center">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
