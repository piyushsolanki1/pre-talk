// import { useState } from "react";
// import{
// ListCheck,
// ArrowDown,
// Check
// } from "lucide-react"

// const InterestCard = () => {
//  const [showInterests, setShowInterests] = useState(false);

//   return (
//     <div>
//       <div className="relative overflow-hidden rounded-2xl bg-purple-100 p-4 shadow-xl">
//         <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />

//         <div className="relative">
//           {/* Header */}

//           <div className="flex items-center justify-between">
//             <div className="flex gap-3">
//               <span className="flex h-fit w-fit rounded-xl border-2 border-purple-500 p-2">
//                 <ListCheck size={30} className="text-purple-500" />
//               </span>

//               <div>
//                 <div className="text-xl font-semibold">Type your interests</div>

//                 <div className="mt-1 text-sm font-medium text-gray-600">
//                   Type what you like
//                 </div>
//               </div>
//             </div>

//             {/* Toggle */}

//             <button
//               type="button"
//               onClick={() => setShowInterests(!showInterests)}
//               className="rounded-full bg-white p-2 shadow-md transition hover:bg-purple-50"
//               aria-label="Toggle interests"
//             >
//               <ArrowDown
//                 size={20}
//                 className={`text-purple-500 transition-transform duration-300 ${
//                   showInterests ? "rotate-180" : ""
//                 }`}
//               />
//             </button>
//           </div>

//           {/* Interest Content */}

//           {showInterests && (
//             <div className="mt-6">
//               {/* Interest Input */}

//               <div className="relative w-full">
//                 <input
//                   type="text"
//                   placeholder="Enter your interests"
//                   className="w-full rounded-xl bg-white p-3 pr-12 text-black shadow-sm outline-none ring-purple-300 transition focus:ring-2"
//                 />

//                 <button
//                   type="button"
//                   className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-purple-50 p-1.5 transition hover:bg-purple-100"
//                 >
//                   <Check size={22} className="text-purple-500" />
//                 </button>
//               </div>

//               {/* Max Wait Time */}

//               <div className="mt-8">
//                 <div className="text-lg font-semibold">Max wait time</div>

//                 <div className="mt-3 flex flex-wrap gap-3">
//                   {["5 sec", "10 sec", "15 sec", "30 sec", "Unlimited"].map(
//                     (time) => (
//                       <button
//                         key={time}
//                         type="button"
//                         className="rounded-xl bg-white px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:bg-purple-50 hover:shadow-md"
//                       >
//                         {time}
//                       </button>
//                     ),
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };


// export default InterestCard
