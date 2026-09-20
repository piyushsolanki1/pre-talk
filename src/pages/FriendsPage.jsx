import { useNavigate } from "react-router-dom";

import { MessageCircle, Search, UserRound, ArrowLeft } from "lucide-react";

const FriendsPage = () => {
    const navigate = useNavigate();
  const friends = [
    {
      id: 1,
      name: "Alex",
      online: true,
    },
    {
      id: 2,
      name: "Sam",
      online: false,
    },
    {
      id: 3,
      name: "Jordan",
      online: true,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8">

      <div className="mx-auto w-full max-w-5xl">

        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate("/homepage")}
            className="rounded-xl p-2 text-gray-600 transition hover:bg-white hover:text-purple-600"
            aria-label="Go back"
          >
            <ArrowLeft size={22} />
          </button>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Your Profile
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage your Pretalk profile
            </p>
          </div>
        </div>
        {/* Search */}
        <div className="mb-6 flex items-center rounded-xl border border-gray-200 bg-white px-4 shadow-sm">
          <Search size={20} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search friends..."
            className="w-full bg-transparent px-3 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400"
          />
        </div>

        {/* Friends */}
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 w-full mx-auto">

          {friends.map((friend) => (
            <div
              key={friend.id}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition  hover:shadow-lg"
            >

              {/* Friend Info */}
              <div className="flex items-center gap-3">

                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <UserRound size={22} className="text-purple-500" />

                  {friend.online && (
                    <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
                  )}
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">
                    {friend.name}
                  </h2>

                  <p className="text-xs text-gray-500">
                    {friend.online ? "Online" : "Offline"}
                  </p>
                </div>

              </div>

              {/* Chat Button */}
              <button
                type="button"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-purple-600"
              >
                <MessageCircle size={18} />
                Chat
              </button>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
};

export default FriendsPage;
