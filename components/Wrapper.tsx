"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { useAuthToken } from "@/lib/hooks/useAuthToken";
import { useDispatch } from "react-redux";
import { setToken } from "@/Redux/Slices/token"; // your Redux slice
import { AppDispatch } from "@/Redux/store"; // typed dispatch

type WrapperProps = {
  children: ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { token, isLoading, error } = useAuthToken();
  const [stat, setStat] = useState<boolean | undefined>(true);

  // Dispatch token to Redux store when it's available
  useEffect(() => {
    if (!isLoading && token) {
      dispatch(setToken(token));
    }
  }, [token, isLoading, dispatch]);

  // Optionally handle token errors
  useEffect(() => {
    if (error) {
      console.error("Error fetching token:", error);
      setStat(false); // or handle error differently
    }
  }, [error]);

  return (
    <>
      {stat ? (
        children
      ) : (
        <div className="flex justify-center items-center h-screen">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        </div>
      )}
    </>
  );
}
