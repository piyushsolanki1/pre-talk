import{ useState } from "react";
import { ArrowLeft, Camera, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EditprofilePage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("Piyush");
  const [bio, setBio] = useState("");
  const [interests, setInterests] = useState([
    "Music",
    "Anime",
    "Gaming",
    "Technology",
  ]);

  const [newInterest, setNewInterest] = useState("");

  const addInterest = (e) => {
    e.preventDefault();

    const interest = newInterest.trim();

    if (!interest || interests.includes(interest)) {
      return;
    }

    setInterests((prev) => [...prev, interest]);
    setNewInterest("");
  };

  const removeInterest = (interestToRemove) => {
    setInterests((prev) =>
      prev.filter((interest) => interest !== interestToRemove)
    );
  };

  const handleSave = (e) => {
    e.preventDefault();

    console.log({
      username,
      bio,
      interests,
    });

    navigate("/profile");
  };

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto w-full max-w-2xl">

        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate("/profile")}
            className="rounded-xl p-2 text-gray-600 transition hover:bg-white hover:text-purple-600"
          >
            <ArrowLeft size={22} />
          </button>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Edit Profile
            </h1>

            <p className="text-sm text-gray-500">
              Update your Pretalk profile
            </p>
          </div>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSave}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
        >

          {/* Avatar */}
          <div className="mb-8 flex flex-col items-center">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-purple-100">
              <span className="text-3xl font-bold text-purple-600">
                P
              </span>

              <button
              onClick={ () => alert("Change profile picture functionality not implemented yet.")}
                type="button"
                className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-purple-600 text-white shadow-md transition hover:bg-purple-700"
              >
                <Camera size={17} />
              </button>
            </div>

            <p className="mt-3 text-xs text-gray-500">
              Change profile picture
            </p>
          </div>

          {/* Username */}
          <div className="mb-6">
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Username
            </label>

            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
            />
          </div>

          {/* Bio */}
          <div className="mb-6">
            <label
              htmlFor="bio"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Bio
            </label>

            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell people a little about yourself..."
              rows="4"
              maxLength="150"
              className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
            />

            <p className="mt-1 text-right text-xs text-gray-400">
              {bio.length}/150
            </p>
          </div>

          {/* Interests */}
          <div className="mb-8">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Interests
            </label>

            <div className="mb-3 flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="flex items-center gap-1.5 rounded-full bg-purple-100 px-3 py-1.5 text-xs font-medium text-purple-700"
                >
                  {interest}

                  <button
                    type="button"
                    onClick={() => removeInterest(interest)}
                    className="rounded-full transition hover:text-red-500"
                  >
                    <X size={13} />
                  </button>
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={newInterest}
                onChange={(e) => setNewInterest(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addInterest(e);
                  }
                }}
                placeholder="Add an interest"
                className="min-w-0 flex-1 rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />

              <button
                type="button"
                onClick={addInterest}
                className="rounded-xl bg-purple-100 px-4 py-3 text-sm font-medium text-purple-700 transition hover:bg-purple-200"
              >
                Add
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-purple-700"
            >
              Save Changes
            </button>

          </div>

        </form>
      </div>
    </main>
  );
};

export default EditprofilePage;
