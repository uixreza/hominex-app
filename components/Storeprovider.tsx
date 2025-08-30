"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/Redux/store";

type Props = {
  children: ReactNode;
};
export default function Storeprovider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
