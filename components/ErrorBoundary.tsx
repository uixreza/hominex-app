// app/components/ErrorBoundary.tsx
"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(_: any): State {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("🔥 ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>یه مشکل کوچیک پیش اومده 🤔</div>;
    }

    return this.props.children;
  }
}
