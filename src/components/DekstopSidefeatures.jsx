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
    <aside className="hidden w-fit shrink-0 lg:block">
      <div className="sticky top-24 rounded-2xl   bg-purple-100 p-4 shadow-xl">
        {/* Profile / Settings */}
        <div className="flex items-center justify-between rounded-xl bg-white p-2 shadow-sm">
          <button
            type="button"
            onClick={() => navigate("/profile")}
            className="flex h-11 w-11 items-center cursor-pointer justify-center rounded-full border-2 border-purple-400 transition hover:bg-purple-50"
          >
            <UserRound size={22} className="text-purple-600" />
          </button>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => navigate("/settings")}
              className="rounded-lg p-1 cursor-pointer transition hover:bg-purple-50 border-2 border-purple-400"
              aria-label="Settings"
            >
              <Settings size={18} className="text-purple-500" />
            </button>

            <button
              type="button"
              className="rounded-lg cursor-pointer p-1 transition hover:bg-purple-50 border-2 border-purple-400"
              aria-label="Theme"
            >
              <Sun size={18} className="text-purple-500" />
            </button>
          </div>
        </div>

        {/* Start New Chat */}
        <button
          type="button"
          onClick={() => navigate("/matching")}
          className="mt-5 w-full rounded-xl cursor-pointer bg-purple-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-purple-600"
        >
          Start New Chat
        </button>

        {/* Features + Friends / Requests */}
        <div className="mt-4">
          <div className="flex items-start gap-3">
            {/* Feature Buttons */}
            <div className="w-fit space-y-2">
              {/* Premium */}
              <button
                type="button"
                className="flex w-fit items-center cursor-pointer rounded-xl bg-purple-200 p-3 transition hover:bg-purple-300"
                aria-label="Premium"
              >
                <Crown size={21} className="text-yellow-500" />
              </button>

              {/* Friends */}
              <button
                type="button"
                onClick={() => {
                  setShowFriends(true);
                  setActiveFriendTab("friends");
                }}
                className={`relative flex w-fit items-center cursor-pointer rounded-xl p-3 transition ${
                  showFriends && activeFriendTab === "friends"
                    ? "bg-purple-200"
                    : "bg-purple-200 hover:bg-purple-300"
                }`}
                aria-label="Friends"
              >
                <Users size={21} className="text-purple-500" />

                {friendRequests.length > 0 && (
                  <span className="absolute -right-1 -top-1 rounded-full bg-purple-500 px-1.5 py-0.5 text-[10px] text-white">
                    {friendRequests.length}
                  </span>
                )}
              </button>

              {/* Chats */}
              <button
                type="button"
                onClick={() => navigate("/chat")}
                className="flex w-fit items-center cursor-pointer rounded-xl bg-purple-200 p-3 transition hover:bg-purple-300"
                aria-label="Chats"
              >
                <MessageSquareTextIcon size={21} className="text-purple-500" />
              </button>

              {/* Saved */}
              <button
                type="button"
                className="flex w-fit items-center cursor-pointer rounded-xl bg-purple-200 p-3 transition hover:bg-purple-300"
                aria-label="Saved"
              >
                <Heart size={21} className="text-purple-500" />
              </button>
            </div>

            {/* Friends / Requests Panel */}
            <div className="min-w-0 flex-1">
              <div className="overflow-hidden rounded-xl border border-purple-200 bg-purple-50 shadow-sm">
                {/* Tabs */}
                <div className="flex border-b border-purple-200">
                  <button
                    type="button"
                    onClick={() => {
                      setShowFriends(true);
                      setActiveFriendTab("friends");
                    }}
                    className={`w-1/2 py-2 text-sm font-semibold transition ${
                      showFriends && activeFriendTab === "friends"
                        ? "bg-purple-200 text-purple-700"
                        : "text-gray-500 hover:bg-purple-100"
                    }`}
                  >
                    Friends
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setShowFriends(true);
                      setActiveFriendTab("requests");
                    }}
                    className={`w-1/2 py-2 text-sm font-semibold transition ${
                      showFriends && activeFriendTab === "requests"
                        ? "bg-purple-200 text-purple-700"
                        : "text-gray-500 hover:bg-purple-100"
                    }`}
                  >
                    Requests
                    {friendRequests.length > 0 && (
                      <span className="ml-1 rounded-full bg-purple-500 px-1.5 text-xs text-white">
                        {friendRequests.length}
                      </span>
                    )}
                  </button>
                </div>

                {/* Friends Content */}
                {showFriends && activeFriendTab === "friends" && (
                  <div className="p-3">
                    {friends.length === 0 ? (
                      <div className="rounded-lg bg-white p-4 text-center">
                        <Users
                          size={24}
                          className="mx-auto mb-2 text-purple-400"
                        />

                        <p className="text-sm font-semibold text-gray-700">
                          No friends yet
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          Your friends will appear here.
                        </p>
                      </div>
                    ) : (
                      friends.map((friend) => (
                        <div
                          key={friend.id}
                          className="mb-2 rounded-lg bg-white p-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100">
                              <UserRound
                                size={18}
                                className="text-purple-500"
                              />
                            </div>

                            <div>
                              <p className="text-sm font-semibold">
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

                {/* Requests Content */}
                {showFriends && activeFriendTab === "requests" && (
                  <div className="p-3">
                    {friendRequests.length === 0 ? (
                      <div className="rounded-lg bg-white p-4 text-center">
                        <Users
                          size={24}
                          className="mx-auto mb-2 text-purple-400"
                        />

                        <p className="text-sm font-semibold text-gray-700">
                          No requests
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          New requests will appear here.
                        </p>
                      </div>
                    ) : (
                      friendRequests.map((request) => (
                        <div
                          key={request.id}
                          className="mb-2 flex items-center justify-between rounded-lg bg-white p-3"
                        >
                          <div className="flex items-center gap-2">
                            <UserRound size={18} className="text-purple-500" />

                            <span className="text-sm font-semibold">
                              {request.username}
                            </span>
                          </div>

                          <button
                            type="button"
                            className="rounded-lg bg-purple-500 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-purple-600"
                          >
                            Accept
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                )}

                {/* Default State */}
                {!showFriends && (
                  <div className="p-4 text-center">
                    <Users size={24} className="mx-auto mb-2 text-purple-400" />

                    <p className="text-sm font-semibold text-gray-700">
                      Friends & Requests
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Select an option to view it.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
            <button type="button"
            onClick={()=> {navigate("/login")}}
          className="mt-5 w-full rounded-xl cursor-pointer bg-purple-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-purple-600"
            >
            sign up
        </button>
       
      </div>
      
      
    </aside>
  );
};

export default DekstopSidefeatures;
