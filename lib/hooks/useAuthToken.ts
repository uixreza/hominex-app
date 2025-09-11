// lib/hooks/useAuthToken.ts
"use client";

import { useState, useEffect } from "react";
import { token_name } from "@/config/urls";

interface UseAuthTokenResult {
  token: string | null; // null means no token (logged out)
  isLoading: boolean; // true while reading cookie
  error: string | null; // only unexpected errors
}

export function useAuthToken(): UseAuthTokenResult {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const getCookie = (name: string): string | null => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
          return parts.pop()?.split(";").shift() || null;
        }
        return null;
      };

      const sessionToken = getCookie(token_name);
      setToken(sessionToken); // null if not found (logged out)
    } catch (err) {
      if (err) setError("خطا در دسترسی به توکن جلسه");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { token, isLoading, error };
}
