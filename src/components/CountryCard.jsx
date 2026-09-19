import {useState} from 'react'
import countries from '../assets/Data/countries';
import {
  Check,
  ArrowDown,
  Globe2,
  Search,
} from "lucide-react";

const CountryCard = () => {

     const [showCountry, setShowCountry] = useState(false);
  const [country, setCountry] = useState("All Countries");
  const [countrySearch, setCountrySearch] = useState("");

   // ================= COUNTRY SEARCH =================

  const filteredCountries = countries.filter((item) =>
    item.toLowerCase().includes(countrySearch.toLowerCase()),
  );

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl bg-purple-100 p-4 shadow-xl">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />

            <div className="relative">
              {/* Header */}

              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <span className="flex h-fit w-fit rounded-xl border-2 border-purple-500 p-2">
                    <Globe2 size={30} className="text-purple-500" />
                  </span>

                  <div>
                    <div className="text-xl font-semibold">Country</div>

                    <div className="mt-1 text-sm font-medium text-gray-600">
                      {country === "All Countries"
                        ? "Meet people from anywhere"
                        : `Looking for people from ${country}`}
                    </div>
                  </div>
                </div>

                {/* Toggle */}

                <button
                  type="button"
                  onClick={() => setShowCountry(!showCountry)}
                  className="rounded-full bg-white p-2 shadow-md transition hover:bg-purple-50"
                  aria-label="Toggle country selection"
                >
                  <ArrowDown
                    size={20}
                    className={`text-purple-500 transition-transform duration-300 ${
                      showCountry ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Country Content */}

              {showCountry && (
                <div className="mt-8">
                  {/* Search */}

                  <div className="relative w-full">
                    <Search
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="text"
                      value={countrySearch}
                      onChange={(e) => setCountrySearch(e.target.value)}
                      placeholder="Search countries..."
                      className="w-full rounded-xl bg-white py-3 pl-10 pr-4 text-black shadow-sm outline-none ring-purple-300 transition focus:ring-2"
                    />
                  </div>

                  {/* Country List */}

                  <div className="mt-4 max-h-64 overflow-y-auto">
                    {/* All Countries */}

                    <button
                      type="button"
                      onClick={() => {
                        setCountry("All Countries");
                        setCountrySearch("");
                      }}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm shadow-sm transition ${
                        country === "All Countries"
                          ? "bg-white font-medium text-purple-600"
                          : "bg-white hover:bg-purple-50"
                      }`}
                    >
                      <span>🌎 All Countries</span>

                      {country === "All Countries" && (
                        <Check size={18} className="text-purple-500" />
                      )}
                    </button>

                    {/* Countries */}

                    <div className="mt-2 space-y-2">
                      {filteredCountries.length > 0 ? (
                        filteredCountries.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => {
                              setCountry(item);
                              setCountrySearch("");
                            }}
                            className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm shadow-sm transition ${
                              country === item
                                ? "bg-white font-medium text-purple-600"
                                : "bg-white text-gray-700 hover:bg-purple-50"
                            }`}
                          >
                            <span>{item}</span>

                            {country === item && (
                              <Check size={18} className="text-purple-500" />
                            )}
                          </button>
                        ))
                      ) : (
                        <div className="py-8 text-center">
                          <p className="text-sm font-medium text-gray-700">
                            No countries found
                          </p>

                          <p className="mt-1 text-xs text-gray-400">
                            Try a different search
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
    </div>
  )
}

export default CountryCard
