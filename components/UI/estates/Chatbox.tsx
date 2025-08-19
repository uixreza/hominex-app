"use client";
import React, { useState, useRef } from "react";
import { IoChatbubblesOutline, IoSend } from "react-icons/io5";
import { X } from "lucide-react";

type ChatBoxProps = {
  title?: string;
  placeholder?: string;
  onSend?: (message: string) => void;
  chat: boolean;
  setChat: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ChatBox({
  title = "ارتباط با املاک",
  placeholder = "پیام خود را بنویسید ...",
  onSend,
  chat,
  setChat,
}: ChatBoxProps) {
  const [message, setMessage] = useState("");
  const taRef = useRef<HTMLTextAreaElement | null>(null);

  const send = () => {
    const text = message.trim();
    if (!text || chat == false) return;
    onSend?.(text);
    setMessage("");
    autoGrow(); // reset height after clearing
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const autoGrow = () => {
    const ta = taRef.current;
    if (!ta) return;
    ta.style.height = "0px";
    ta.style.height = Math.min(ta.scrollHeight, 160) + "px"; // cap growth
  };

  return (
    <div
      className={`fixed sm:right-5 right-0 z-20 w-full max-w-lg sm:rounded-2xl border bg-white/90 backdrop-blur px-3 pt-3 sm:pb-3 pb-16 shadow-sm transition-all duration-300
        ${chat ? "sm:bottom-5 bottom-0 opacity-100" : "-bottom-96 opacity-0"}`}>
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-3">
        <div className="flex items-center gap-2">
          <IoChatbubblesOutline className="h-6 w-6 text-gray-700" />
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        </div>
        <button
          onClick={() => setChat(false)}
          className="p-1 rounded-full hover:bg-gray-200 transition"
          aria-label="Close chat">
          <X className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      {/* Input row */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
        className="mt-3 flex items-end gap-2">
        <textarea
          ref={taRef}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            autoGrow();
          }}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          rows={2}
          className="flex-1 resize-none rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
          aria-label="Message"
        />
        <button
          type="submit"
          disabled={!message.trim()}
          className="inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-medium text-white transition
                     disabled:opacity-50 disabled:cursor-not-allowed
                     bg-gray-800 hover:bg-gray-700"
          aria-label="Send message"
          title="Send (Enter)">
          <IoSend className="h-4 w-4" />
          ارسال
        </button>
      </form>

      {/* Helper text */}
      <p className="mt-2 text-xs text-gray-500">
        <kbd className="rounded bg-gray-100 px-1">Enter</kbd> جهت ارسال،{" "}
        <kbd className="rounded bg-gray-100 px-1">Shift</kbd>+
        <kbd className="rounded bg-gray-100 px-1">Enter</kbd> رفتن به خط بعد.
      </p>
    </div>
  );
}
