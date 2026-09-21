import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  UserRound,
  Sun,
  Crown,
  Users,
  MessageSquareTextIcon,
  Heart,
  Settings,
} from "lucide-react";

const DekstopSidefeatures = () => {
  const navigate = useNavigate();

  const [showFriends, setShowFriends] = useState(false);
  const [activeFriendTab, setActiveFriendTab] = useState("friends");

  const [friends] = useState([]);
  const [friendRequests] = useState([]);

  return (
    <aside className="hidden w-[330px] shrink-0 lg:block">
      <div className="sticky top-8 rounded-2xl border border-gray-200 bg-white shadow-sm">

        {/* ================= HEADER ================= */}

        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-2xl font-bold tracking-tight text-purple-600 transition hover:text-purple-700"
          >
            PreTalk
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 transition hover:border-purple-200 hover:bg-purple-50"
              aria-label="Profile"
            >
              <UserRound
                size={20}
                className="text-purple-600"
              />
            </button>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 transition hover:border-purple-200 hover:bg-purple-50"
              aria-label="Settings"
            >
              <Settings
                size={19}
                className="text-gray-500"
              />
            </button>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 transition hover:border-purple-200 hover:bg-purple-50"
              aria-label="Theme"
            >
              <Sun
                size={19}
                className="text-gray-500"
              />
            </button>
          </div>
        </div>

        {/* ================= CONTENT ================= */}

        <div className="p-4">

          {/* ================= START CHAT ================= */}

          <button
            type="button"
            onClick={() => navigate("/matching")}
            className="flex w-full items-center justify-center rounded-xl bg-purple-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-700 hover:shadow-md active:scale-[0.99]"
          >
            Start New Chat
          </button>

          {/* ================= QUICK ACTIONS ================= */}

          <div className="mt-5">
            <p className="mb-3 px-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Quick Access
            </p>

            <div className="grid grid-cols-4 gap-2">

              {/* Premium */}

              <button
                type="button"
                aria-label="Premium"
                className="group flex flex-col items-center justify-center gap-1.5 rounded-xl border border-gray-100 bg-gray-50 py-3 transition hover:border-purple-200 hover:bg-purple-50"
              >
                <Crown
                  size={21}
                  className="text-yellow-500 transition group-hover:scale-110"
                />

                <span className="text-[11px] font-medium text-gray-500">
                  Premium
                </span>
              </button>

              {/* Friends */}

              <button
                type="button"
                onClick={() => {
                  setShowFriends(!showFriends);

                  if (!showFriends) {
                    setActiveFriendTab("friends");
                  }
                }}
                aria-label="Friends and requests"
                className={`group relative flex flex-col items-center justify-center gap-1.5 rounded-xl border py-3 transition ${
                  showFriends
                    ? "border-purple-200 bg-purple-50"
                    : "border-gray-100 bg-gray-50 hover:border-purple-200 hover:bg-purple-50"
                }`}
              >
                <Users
                  size={21}
                  className={
                    showFriends
                      ? "text-purple-600"
                      : "text-gray-500 group-hover:text-purple-600"
                  }
                />

                <span
                  className={`text-[11px] font-medium ${
                    showFriends
                      ? "text-purple-600"
                      : "text-gray-500"
                  }`}
                >
                  Friends
                </span>

                {friendRequests.length > 0 && (
                  <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-purple-600 px-1 text-[9px] font-bold text-white">
                    {friendRequests.length}
                  </span>
                )}
              </button>

              {/* Chats */}

              <button
                type="button"
                onClick={() => navigate("/chat")}
                aria-label="Chats"
                className="group flex flex-col items-center justify-center gap-1.5 rounded-xl border border-gray-100 bg-gray-50 py-3 transition hover:border-purple-200 hover:bg-purple-50"
              >
                <MessageSquareTextIcon
                  size={21}
                  className="text-gray-500 transition group-hover:text-purple-600"
                />

                <span className="text-[11px] font-medium text-gray-500 group-hover:text-purple-600">
                  Chats
                </span>
              </button>

              {/* Saved */}

              <button
                type="button"
                aria-label="Saved"
                className="group flex flex-col items-center justify-center gap-1.5 rounded-xl border border-gray-100 bg-gray-50 py-3 transition hover:border-purple-200 hover:bg-purple-50"
              >
                <Heart
                  size={21}
                  className="text-gray-500 transition group-hover:text-purple-600"
                />

                <span className="text-[11px] font-medium text-gray-500 group-hover:text-purple-600">
                  Saved
                </span>
              </button>

            </div>
          </div>

          {/* ================= FRIENDS / REQUESTS ================= */}

          {showFriends && (
            <div className="mt-5 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">

              {/* TABS */}

              <div className="flex border-b border-gray-200 bg-white">

                <button
                  type="button"
                  onClick={() => setActiveFriendTab("friends")}
                  className={`relative w-1/2 py-3 text-sm font-semibold transition ${
                    activeFriendTab === "friends"
                      ? "text-purple-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Friends

                  {activeFriendTab === "friends" && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-10 -translate-x-1/2 rounded-full bg-purple-600" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setActiveFriendTab("requests")}
                  className={`relative w-1/2 py-3 text-sm font-semibold transition ${
                    activeFriendTab === "requests"
                      ? "text-purple-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Requests

                  {friendRequests.length > 0 && (
                    <span className="ml-1.5 rounded-full bg-purple-600 px-1.5 py-0.5 text-[10px] text-white">
                      {friendRequests.length}
                    </span>
                  )}

                  {activeFriendTab === "requests" && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-10 -translate-x-1/2 rounded-full bg-purple-600" />
                  )}
                </button>

              </div>

              {/* FRIENDS */}

              {activeFriendTab === "friends" && (
                <div className="max-h-56 overflow-y-auto p-3">

                  {friends.length === 0 ? (
                    <div className="rounded-xl bg-white px-4 py-6 text-center">

                      <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-purple-50">
                        <Users
                          size={21}
                          className="text-purple-500"
                        />
                      </div>

                      <p className="text-sm font-semibold text-gray-700">
                        No friends yet
                      </p>

                      <p className="mx-auto mt-1 max-w-[200px] text-xs leading-5 text-gray-400">
                        People you become friends with will appear here.
                      </p>

                    </div>
                  ) : (
                    friends.map((friend) => (
                      <div
                        key={friend.id}
                        className="mb-2 flex items-center justify-between rounded-xl bg-white p-3"
                      >
                        <div className="flex items-center gap-3">

                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50">
                            <UserRound
                              size={19}
                              className="text-purple-500"
                            />
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-gray-800">
                              {friend.username}
                            </p>

                            <p className="text-xs text-gray-400">
                              {friend.online ? "Online" : "Offline"}
                            </p>
                          </div>

                        </div>
                      </div>
                    ))
                  )}

                </div>
              )}

              {/* REQUESTS */}

              {activeFriendTab === "requests" && (
                <div className="max-h-56 overflow-y-auto p-3">

                  {friendRequests.length === 0 ? (
                    <div className="rounded-xl bg-white px-4 py-6 text-center">

                      <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-purple-50">
                        <Users
                          size={21}
                          className="text-purple-500"
                        />
                      </div>

                      <p className="text-sm font-semibold text-gray-700">
                        No requests
                      </p>

                      <p className="mx-auto mt-1 max-w-[200px] text-xs leading-5 text-gray-400">
                        New friend requests will appear here.
                      </p>

                    </div>
                  ) : (
                    friendRequests.map((request) => (
                      <div
                        key={request.id}
                        className="mb-2 flex items-center justify-between rounded-xl bg-white p-3"
                      >

                        <div className="flex items-center gap-3">

                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50">
                            <UserRound
                              size={19}
                              className="text-purple-500"
                            />
                          </div>

                          <p className="text-sm font-semibold text-gray-800">
                            {request.username}
                          </p>

                        </div>

                        <button
                          type="button"
                          className="rounded-lg bg-purple-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-purple-700"
                        >
                          Accept
                        </button>

                      </div>
                    ))
                  )}

                </div>
              )}

            </div>
          )}

          {/* ================= DEFAULT FRIENDS / REQUESTS ================= */}

          {!showFriends && (
            <div className="mt-5 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">

              <div className="flex">

                <button
                  type="button"
                  onClick={() => {
                    setShowFriends(true);
                    setActiveFriendTab("friends");
                  }}
                  className="flex flex-1 items-center justify-center gap-2 border-r border-gray-200 bg-white py-3 text-sm font-medium text-gray-600 transition hover:bg-purple-50 hover:text-purple-600"
                >
                  <Users size={16} />
                  Friends
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowFriends(true);
                    setActiveFriendTab("requests");
                  }}
                  className="flex flex-1 items-center justify-center gap-2 bg-white py-3 text-sm font-medium text-gray-600 transition hover:bg-purple-50 hover:text-purple-600"
                >
                  <Users size={16} />
                  Requests
                </button>

              </div>

            </div>
          )}

          {/* ================= SIGN IN ================= */}

          <div className="mt-5 border-t border-gray-100 pt-5">

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="w-full rounded-xl border border-purple-600 bg-white px-4 py-3 text-sm font-semibold text-purple-600 transition hover:bg-purple-600 hover:text-white"
            >
              Sign In
            </button>

          </div>

        </div>
      </div>
    </aside>
  );
};

export default DekstopSidefeatures;