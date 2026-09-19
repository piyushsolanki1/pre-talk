import { useState } from "react"
import{Mars,
  Venus,
  ArrowDown
} from "lucide-react"

const GenderCard = () => {

      const [showFilters, setShowFilters] = useState(false);


  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl bg-purple-100 p-4 shadow-xl">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />

            <div className="relative">
              {/* Header */}

              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <span className="flex h-fit w-fit rounded-xl border-2 border-purple-500 p-2">
                    <div className="flex">
                      <Mars size={28} className="text-purple-500" />
                      <Venus size={28} className="text-purple-500" />
                    </div>
                  </span>

                  <div>
                    <div className="text-xl font-semibold">
                      Gender and age filter
                    </div>

                    <div className="mt-1 text-sm font-medium text-gray-600">
                      Find people matching your preferences
                    </div>
                  </div>
                </div>

                {/* Toggle */}

                <button
                  type="button"
                  onClick={() => setShowFilters(!showFilters)}
                  className="rounded-full bg-white p-2 shadow-md transition hover:bg-purple-50"
                  aria-label="Toggle filters"
                >
                  <ArrowDown
                    size={20}
                    className={`text-purple-500 transition-transform duration-300 ${
                      showFilters ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Filter Content */}

              {showFilters && (
                <div className="mt-8">
                  {/* Gender */}

                  <div>
                    <div className="text-lg font-semibold">Gender</div>

                    <div className="mt-3 flex flex-wrap gap-3">
                      <button
                        type="button"
                        className="rounded-xl bg-white px-5 py-3 text-sm shadow-sm transition hover:bg-purple-50"
                      >
                        Male
                      </button>

                      <button
                        type="button"
                        className="rounded-xl bg-white px-5 py-3 text-sm shadow-sm transition hover:bg-purple-50"
                      >
                        Female
                      </button>

                      <button
                        type="button"
                        className="rounded-xl bg-white px-5 py-3 text-sm shadow-sm transition hover:bg-purple-50"
                      >
                        Any
                      </button>
                    </div>
                  </div>

                  {/* Age */}

                  <div className="mt-8">
                    <div className="text-lg font-semibold">Age range</div>

                    <div className="mt-3 flex items-center gap-3">
                      <input
                        type="number"
                        placeholder="18"
                        className="w-24 rounded-xl bg-white p-3 text-center outline-none focus:ring-2 focus:ring-purple-300"
                      />

                      <span className="text-gray-500">to</span>

                      <input
                        type="number"
                        placeholder="30"
                        className="w-24 rounded-xl bg-white p-3 text-center outline-none focus:ring-2 focus:ring-purple-300"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

    </div>
  )
}

export default GenderCard
