import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Edit3,
  UserRound,
  Settings,
  LogOut,
  ArrowLeft,
} from "lucide-react";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto w-full max-w-3xl">

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

        {/* Profile Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

          {/* Profile Info */}
          <div className="flex flex-col items-center text-center sm:flex-row sm:text-left">

            {/* Avatar */}
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-purple-100">
              <UserRound size={42} className="text-purple-600" />
            </div>

            {/* Name */}
            <div className="mt-4 sm:ml-6 sm:mt-0">
              <h2 className="text-2xl font-bold text-gray-900">
                Piyush
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Anonymous Pretalk user
              </p>

              <button
                type="button"
                onClick={() => navigate("/editprofile")}
                className="mt-3 inline-flex items-center gap-2 rounded-xl bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 transition hover:bg-purple-200"
              >
                <Edit3 size={16} />
                Edit Profile
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-gray-200" />

          {/* Bio */}
          <div className="mb-6">
            <h3 className="mb-2 text-sm font-semibold text-gray-900">
              About you
            </h3>

            <p className="text-sm leading-6 text-gray-500">
              Tell people a little about yourself and what you like talking
              about.
            </p>
          </div>

          {/* Interests */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">
              Interests
            </h3>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-purple-100 px-3 py-1.5 text-xs font-medium text-purple-700">
                Music
              </span>

              <span className="rounded-full bg-purple-100 px-3 py-1.5 text-xs font-medium text-purple-700">
                Anime
              </span>

              <span className="rounded-full bg-purple-100 px-3 py-1.5 text-xs font-medium text-purple-700">
                Gaming
              </span>

              <span className="rounded-full bg-purple-100 px-3 py-1.5 text-xs font-medium text-purple-700">
                Technology
              </span>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="mt-5 rounded-2xl border border-gray-200 bg-white shadow-sm">

          {/* Settings Button */}
          <button
            type="button"
            className="flex w-full items-center gap-3 p-5 text-left transition hover:bg-gray-50"
          >
            <Settings size={20} className="text-gray-600" />

            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Settings
              </h3>

              <p className="text-xs text-gray-500">
                Manage your account and preferences
              </p>
            </div>
          </button>

          <div className="border-t border-gray-200" />

          {/* Logout Button */}
          <button
            type="button"
            className="flex w-full items-center gap-3 p-5 text-left text-red-600 transition hover:bg-red-50"
          >
            <LogOut size={20} />

            <div>
              <h3 className="text-sm font-semibold">
                Log Out
              </h3>

              <p className="text-xs text-red-400">
                Sign out of your Pretalk account
              </p>
            </div>
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;