import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  X,
  UserRound,
  Sun,
  Crown,
  Users,
  MessageSquareTextIcon,
  Heart,
  Settings,
} from "lucide-react";

const SideFeature = ({ menuOpen, setMenuOpen }) => {
  const navigate = useNavigate();

  // Friends / Requests panel
  const [showFriends, setShowFriends] = useState(false);
  const [activeFriendTab, setActiveFriendTab] = useState("friends");

  // These will later come from your backend/database.
  const [friends] = useState([]);
  const [friendRequests] = useState([]);

  return (
    <div>
      {/* ================= BACKDROP ================= */}

      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ================= SIDE MENU ================= */}

      <aside
        className={`fixed left-0 top-0 z-50 h-full w-[82%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">

          {/* ================= MENU HEADER ================= */}

          <div className="flex items-center justify-between border-b px-6 py-5">
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                navigate("/");
              }}
              className="ml-12 text-4xl font-bold tracking-tight text-purple-600"
            >
              PreTalk
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="rounded-full p-2 transition hover:bg-purple-50"
              aria-label="Close menu"
            >
              <X size={24} className="text-gray-700" />
            </button>
          </div>

          {/* ================= MENU CONTENT ================= */}

          <div className="flex flex-1 flex-col px-4 py-6">

            {/* ================= PROFILE / SETTINGS BAR ================= */}

            <div className="flex w-full items-center justify-between rounded-xl bg-white p-2 shadow-2xl">

              {/* Profile */}

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-400">
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/profile");
                  }}
                  aria-label="Profile"
                >
                  <UserRound
                    size={24}
                    className="text-purple-600"
                  />
                </button>
              </div>

              {/* Settings / Theme */}

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    // Settings can be added later
                  }}
                  className="rounded-md border p-1 transition hover:bg-purple-50"
                  aria-label="Settings"
                >
                  <Settings
                    size={20}
                    className="text-purple-500"
                  />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    // Theme toggle can be added later
                  }}
                  className="rounded-md border p-1 transition hover:bg-purple-50"
                  aria-label="Theme"
                >
                  <Sun
                    size={20}
                    className="text-purple-500"
                  />
                </button>
              </div>
            </div>

            {/* ================= SIDE MENU ICONS + CONTENT ================= */}

            <div className="mt-6 flex justify-around gap-4">

              {/* ================= ICON COLUMN ================= */}

              <div className="flex h-fit flex-col gap-6">

                {/* Premium */}

                <button
                  type="button"
                  aria-label="Premium"
                  className="w-fit rounded-2xl bg-purple-100 p-2 transition hover:bg-purple-200 focus:bg-purple-200"
                >
                  <Crown
                    size={32}
                    className="text-yellow-500"
                  />
                </button>

                {/* Friends / Requests */}

                <button
                  type="button"
                  onClick={() => {
                    setShowFriends(!showFriends);

                    if (!showFriends) {
                      setActiveFriendTab("friends");
                    }
                  }}
                  aria-label="Friends and requests"
                  className={`w-fit rounded-2xl p-2 transition ${
                    showFriends
                      ? "bg-purple-200"
                      : "bg-purple-100 hover:bg-purple-200"
                  }`}
                >
                  <Users
                    size={32}
                    className="text-purple-500"
                  />
                </button>

                {/* Chats */}

                <button
                  type="button"
                  aria-label="Chats"
                  className="w-fit rounded-2xl bg-purple-100 p-2 transition hover:bg-purple-200 focus:bg-purple-200"
                >
                  <MessageSquareTextIcon
                    size={32}
                    className="text-purple-500"
                  />
                </button>

                {/* Saved / Favorites */}

                <button
                  type="button"
                  aria-label="Saved"
                  className="w-fit rounded-2xl bg-purple-100 p-2 transition hover:bg-purple-200 focus:bg-purple-200"
                >
                  <Heart
                    size={32}
                    className="text-purple-500"
                  />
                </button>
              </div>

              {/* ================= RIGHT SIDE CONTENT ================= */}

              <div className="w-full">

                {/* ================= START NEW CHAT ================= */}

                <div className="flex w-full justify-center rounded-2xl border bg-purple-400">
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      navigate("/matching");
                    }}
                    className="w-full p-2 text-2xl font-medium transition hover:text-white"
                  >
                    Start New Chat
                  </button>
                </div>

                {/* ================= FRIENDS + REQUESTS PANEL ================= */}

                {showFriends && (
                  <div className="mt-4 overflow-hidden rounded-xl border border-purple-300 bg-purple-100">

                    {/* ================= TABS ================= */}

                    <div className="flex border-b border-purple-300">

                      <button
                        type="button"
                        onClick={() => setActiveFriendTab("friends")}
                        className={`w-1/2 rounded-t-xl py-2 text-sm font-semibold transition ${
                          activeFriendTab === "friends"
                            ? "bg-purple-200 text-purple-700"
                            : "text-gray-500 hover:bg-purple-100"
                        }`}
                      >
                        Friends
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveFriendTab("requests")}
                        className={`w-1/2 rounded-t-xl py-2 text-sm font-semibold transition ${
                          activeFriendTab === "requests"
                            ? "bg-purple-200 text-purple-700"
                            : "text-gray-500 hover:bg-purple-100"
                        }`}
                      >
                        Requests

                        {friendRequests.length > 0 && (
                          <span className="ml-2 rounded-full bg-purple-500 px-2 py-0.5 text-xs text-white">
                            {friendRequests.length}
                          </span>
                        )}
                      </button>

                    </div>

                    {/* ================= FRIENDS ================= */}

                    {activeFriendTab === "friends" && (
                      <div className="max-h-52 overflow-y-auto p-3">

                        {friends.length === 0 ? (
                          <div className="rounded-lg bg-white p-4 text-center">

                            <Users
                              size={28}
                              className="mx-auto mb-2 text-purple-400"
                            />

                            <p className="text-sm font-semibold text-gray-700">
                              No friends yet
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                              People you become friends with will appear here.
                            </p>

                          </div>
                        ) : (
                          friends.map((friend) => (
                            <div
                              key={friend.id}
                              className="mb-2 flex items-center justify-between rounded-lg bg-white p-3"
                            >

                              <div className="flex items-center gap-3">

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                                  <UserRound
                                    size={20}
                                    className="text-purple-500"
                                  />
                                </div>

                                <div>
                                  <p className="text-sm font-semibold text-gray-800">
                                    {friend.username}
                                  </p>

                                  <p className="text-xs text-gray-400">
                                    {friend.online
                                      ? "Online"
                                      : "Offline"}
                                  </p>
                                </div>

                              </div>

                            </div>
                          ))
                        )}

                      </div>
                    )}

                    {/* ================= REQUESTS ================= */}

                    {activeFriendTab === "requests" && (
                      <div className="max-h-52 overflow-y-auto p-3">

                        {friendRequests.length === 0 ? (
                          <div className="rounded-lg bg-white p-4 text-center">

                            <Users
                              size={28}
                              className="mx-auto mb-2 text-purple-400"
                            />

                            <p className="text-sm font-semibold text-gray-700">
                              No requests
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                              New friend requests will appear here.
                            </p>

                          </div>
                        ) : (
                          friendRequests.map((request) => (
                            <div
                              key={request.id}
                              className="mb-2 flex items-center justify-between rounded-lg bg-white p-3"
                            >

                              <div className="flex items-center gap-3">

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                                  <UserRound
                                    size={20}
                                    className="text-purple-500"
                                  />
                                </div>

                                <p className="text-sm font-semibold text-gray-800">
                                  {request.username}
                                </p>

                              </div>

                              <button
                                type="button"
                                className="rounded-lg bg-purple-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-purple-600"
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

                {/* ================= DEFAULT SIDE CARD ================= */}

                {!showFriends && (
                  <div className="mt-4 h-full rounded-xl border border-purple-300 bg-purple-100">

                    <div className="flex justify-around rounded-2xl border-b border-purple-300">

                      <button
                        type="button"
                        onClick={() => {
                          setShowFriends(true);
                          setActiveFriendTab("friends");
                        }}
                        className="w-full rounded-2xl p-2 text-sm font-medium text-purple-600 transition hover:bg-purple-200"
                      >
                        Friends
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setShowFriends(true);
                          setActiveFriendTab("requests");
                        }}
                        className="w-full rounded-2xl p-2 text-sm font-medium text-gray-600 transition hover:bg-purple-200"
                      >
                        Requests
                      </button>

                    </div>

                    <div className="p-4 text-center">
                      <p className="text-xs text-gray-500">
                        Tap the Friends icon to view your connections.
                      </p>
                    </div>

                  </div>
                )}

              </div>
            </div>

            {/* ================= MOBILE SIGN IN ================= */}

            <div className="mt-auto border-t border-gray-100 pt-6">

              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/login");
                }}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold transition hover:border-purple-300 hover:bg-purple-50"
              >
                Sign In
              </button>

            </div>

          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideFeature;