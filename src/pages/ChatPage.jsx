import React, { useState } from "react";
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

  const [confirmSkip, setConfirmSkip] = useState(false);
  return (
    <main className="flex h-screen w-full flex-col bg-gray-50">
      {/* ================= HEADER ================= */}
      <header className="flex items-center justify-between border-b bg-white px-4 py-4 shadow-sm ">
        {/* Left */}
       <div className="w-6xl mx-auto flex justify-between"> 
       <div className="flex items-center gap-3 ">
          <button
            type="button"
            onClick={() => navigate("/homepage")}
            className="rounded-xl p-2 transition hover:bg-purple-50"
          >
            <ArrowLeft size={22} className="text-gray-700" />
          </button>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
            <UserRound size={20} className="text-purple-600" />
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-900">Stranger</h2>

            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-green-500" />

              <span className="text-xs text-gray-500">Online</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-1">
          <button
          onClick={() => alert("Sign In to use Call functionality.")}
            type="button"
            className="rounded-xl p-2.5 text-gray-600 transition hover:bg-purple-100 sm:block"
          >
            <Phone size={19} />
          </button>

          <button
          onClick={() => alert("Sign In to use Video Call functionality.")}
            type="button"
            className="rounded-xl p-2.5 text-gray-600 transition hover:bg-purple-100 sm:block"
          >
            <Video size={20} />
          </button>

          <button
            type="button"
            className="rounded-xl p-2.5 text-gray-600 transition hover:bg-purple-100"
          >
            <MoreVertical size={20} />
          </button>
        </div>
       </div>
      </header>

      {/* ================= CHAT AREA ================= */}
      <section className="flex-1 overflow-y-auto px-4 py-6">
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          {/* Chat Started */}
          <div className="my-2 text-center">
            <span className="rounded-full bg-gray-100 px-4 py-2 text-xs text-gray-500">
              You are now connected 🎉
            </span>
          </div>

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] sm:max-w-[60%] ${
                  msg.sender === "me" ? "items-end" : "items-start"
                } flex flex-col`}
              >
                <div
                  className={`rounded-2xl px-4 py-3 text-sm ${
                    msg.sender === "me"
                      ? "rounded-br-md bg-[#540edf] text-white"
                      : "rounded-bl-md bg-white text-gray-800 shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CHAT CONTROLS ================= */}
      <div className="bg-white p-1 mb-2">
        {/* Message Input */}
        <form
          onSubmit={handleSend}
          className="mx-auto flex max-w-5xl items-center gap-2 px-4 p-2"
        >
          <button
            type="button"
            onClick={() => {
              if (confirmSkip) {
                navigate("/homepage");
              } else {
                setConfirmSkip(true);
              }
            }}
            className={`rounded-xl p-3 text-white transition ${
              confirmSkip
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-purple-400 hover:bg-purple-500"
            }`}
          >
            {" "}
            {confirmSkip ? "Confirm" : "Skip"}{" "}
          </button>

          {/* Image */}
          <button
          onClick={() => alert("Sign In to use Image upload functionality.")}
            type="button"
            className="rounded-xl p-3 text-gray-500 transition bg-gray-200 hover:bg-gray-100 hover:text-purple-600"
          >
            <Image size={21} />
          </button>

          {/* Input */}
          <div className="flex flex-1 items-center rounded-2xl bg-gray-100 px-4">
            <input
              type="text"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);

                // Reset Confirm back to Skip when user starts typing
                if (confirmSkip) {
                  setConfirmSkip(false);
                }
              }}
              placeholder="Type a message..."
              className="w-full bg-transparent py-3 text-sm rounded-2xl text-gray-900 outline-none placeholder:text-gray-400"
            />
          </div>

          {/* Send */}
          <button
            type="submit"
            disabled={!message.trim()}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-600 text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Send size={19} />
          </button>
        </form>
      </div>
    </main>
  );
};

export default ChatPage;
