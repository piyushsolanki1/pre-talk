import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Send,
  Image,
  Phone,
  Video,
  MoreVertical,
  UserRound,
} from "lucide-react";

const ChatPage = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [confirmSkip, setConfirmSkip] = useState(false);

  // Reference to the bottom of the chat
  const messagesEndRef = useRef(null);

  // Temporary messages for UI development
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey! 👋",
      sender: "stranger",
      time: "10:42 AM",
    },
    {
      id: 2,
      text: "Hey! How are you?",
      sender: "me",
      time: "10:43 AM",
    },
    {
      id: 3,
      text: "I'm good! Where are you from?",
      sender: "stranger",
      time: "10:43 AM",
    },
  ]);

  // Automatically scroll to the newest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: message,
      sender: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");
  };

  const handleSkip = () => {
    if (confirmSkip) {
      navigate("/homepage");
    } else {
      setConfirmSkip(true);
    }
  };

  return (
    <main className="flex h-[100dvh] w-full flex-col overflow-hidden bg-gray-50">

      {/* ================= HEADER ================= */}
      <header className="shrink-0 border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-3 sm:px-4">

          {/* Left */}
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">

            <button
              type="button"
              onClick={() => navigate("/homepage")}
              className="shrink-0 rounded-xl p-2 transition hover:bg-purple-50 active:scale-95"
              aria-label="Back"
            >
              <ArrowLeft size={22} className="text-gray-700" />
            </button>

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-100 sm:h-10 sm:w-10">
              <UserRound
                size={19}
                className="text-purple-600"
              />
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-sm font-semibold text-gray-900">
                Stranger
              </h2>

              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 shrink-0 rounded-full bg-green-500" />

                <span className="text-xs text-gray-500">
                  Online
                </span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">

            <button
              type="button"
              onClick={() =>
                alert("Sign In to use Call functionality.")
              }
              className="rounded-xl p-2.5 text-gray-600 transition hover:bg-purple-100 active:scale-95"
              aria-label="Voice call"
            >
              <Phone size={19} />
            </button>

            <button
              type="button"
              onClick={() =>
                alert("Sign In to use Video Call functionality.")
              }
              className="rounded-xl p-2.5 text-gray-600 transition hover:bg-purple-100 active:scale-95"
              aria-label="Video call"
            >
              <Video size={20} />
            </button>

            <button
              type="button"
              className="rounded-xl p-2.5 text-gray-600 transition hover:bg-purple-100 active:scale-95"
              aria-label="More options"
            >
              <MoreVertical size={20} />
            </button>

          </div>
        </div>
      </header>

      {/* ================= CHAT AREA ================= */}
      <section className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-5 sm:px-4 sm:py-6">

        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">

          {/* Chat Started */}
          <div className="my-1 text-center sm:my-2">
            <span className="inline-block rounded-full bg-gray-100 px-4 py-2 text-xs text-gray-500">
              You are now connected 🎉
            </span>
          </div>

          {/* Messages */}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "me"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`flex max-w-[85%] flex-col sm:max-w-[65%] ${
                  msg.sender === "me"
                    ? "items-end"
                    : "items-start"
                }`}
              >
                <div
                  className={`rounded-2xl px-4 py-3 text-sm leading-5 ${
                    msg.sender === "me"
                      ? "rounded-br-md bg-[#540edf] text-white"
                      : "rounded-bl-md bg-white text-gray-800 shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>

                <span className="mt-1 px-1 text-[10px] text-gray-400">
                  {msg.time}
                </span>
              </div>
            </div>
          ))}

          {/* Scroll target */}
          <div ref={messagesEndRef} />

        </div>
      </section>

      {/* ================= CHAT CONTROLS ================= */}
      <div className="shrink-0 border-t border-gray-200 bg-white pb-[env(safe-area-inset-bottom)]">

        <form
          onSubmit={handleSend}
          className="mx-auto flex w-full max-w-5xl items-center gap-2 px-3 py-2 sm:px-4 sm:py-3"
        >

          {/* Skip */}
          <button
            type="button"
            onClick={handleSkip}
            className={`shrink-0 rounded-xl px-3 py-3 text-sm font-medium text-white transition active:scale-95 sm:px-4 ${
              confirmSkip
                ? "bg-red-500 hover:bg-red-600"
                : "bg-purple-400 hover:bg-purple-500"
            }`}
          >
            {confirmSkip ? "Confirm" : "Skip"}
          </button>

          {/* Image */}
          <button
            type="button"
            onClick={() =>
              alert("Sign In to use Image upload functionality.")
            }
            className="shrink-0 rounded-xl bg-gray-100 p-3 text-gray-500 transition hover:bg-purple-50 hover:text-purple-600 active:scale-95"
            aria-label="Upload image"
          >
            <Image size={21} />
          </button>

          {/* Input */}
          <div className="flex min-w-0 flex-1 items-center rounded-2xl bg-gray-100 px-4">

            <input
              type="text"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);

                if (confirmSkip) {
                  setConfirmSkip(false);
                }
              }}
              placeholder="Type a message..."
              className="min-w-0 w-full bg-transparent py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400"
            />

          </div>

          {/* Send */}
          <button
            type="submit"
            disabled={!message.trim()}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-600 text-white transition hover:bg-purple-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Send message"
          >
            <Send size={19} />
          </button>

        </form>
      </div>

    </main>
  );
};

export default ChatPage;