// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";

// type InboundCall = {
//   id: number;
//   callerName: string;
//   phone: string;
//   duration: string;
//   time: string;
//   status: string;
// };

// const Inbound = () => {
//   const [inboundCalls, setInboundCalls] = useState<InboundCall[]>([]);
//   const [loading, setLoading] = useState(true);

//   const apiBaseUrl = import.meta.env.VITE_API_URL;

//   useEffect(() => {
//     const fetchInboundCalls = async () => {
//       try {
//         const response = await fetch(`${apiBaseUrl}/latest-events`, {
//           headers: {
//             "ngrok-skip-browser-warning": "true",
//           },
//         });
//         if (!response.ok) {
//           throw new Error("Failed to fetch inbound calls");
//         }

//         const data: InboundCall[] = await response.json();
//         console.log("✅ API Data:", data);
//         setInboundCalls(data);
//       } catch (error) {
//         console.error("❌ Error fetching data:", error);

//         // fallback mock data
//         setInboundCalls([
//           {
//             id: 1,
//             callerName: "John Doe",
//             phone: "+1 234 567 890",
//             duration: "02:15",
//             time: "2025-10-09 14:35",
//             status: "Completed",
//           },
//           {
//             id: 2,
//             callerName: "Sarah Smith",
//             phone: "+1 987 654 321",
//             duration: "00:45",
//             time: "2025-10-09 15:10",
//             status: "Missed",
//           },
//         ]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchInboundCalls();
//   }, [apiBaseUrl]);

//   return (
//     <div>
//       <Navbar />
//       <div className="pt-28 px-6 pb-12 bg-gray-50 min-h-screen">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
//           Inbound Call Details
//         </h1>

//         {loading ? (
//           //   <div className="text-center text-gray-600">Loading...</div>
//           <div className="flex justify-center items-center h-[60vh]">
//             <div className="w-12 h-12 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
//           </div>
//         ) : (
//           <div className="overflow-x-auto bg-white shadow-md rounded-2xl">
//             <table className="min-w-full border-collapse">
//               <thead>
//                 <tr className="bg-blue-900 text-white text-left text-sm md:text-base">
//                   <th className="px-4 py-3 rounded-tl-2xl">Caller Name</th>
//                   <th className="px-4 py-3">Phone</th>
//                   <th className="px-4 py-3">Duration</th>
//                   <th className="px-4 py-3">Time</th>
//                   <th className="px-4 py-3 rounded-tr-2xl">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {inboundCalls.map((call) => (
//                   <tr
//                     key={call.id}
//                     className="border-t text-gray-700 hover:bg-gray-100 transition"
//                   >
//                     <td className="px-4 py-3 font-medium">{call.callerName}</td>
//                     <td className="px-4 py-3">{call.phone}</td>
//                     <td className="px-4 py-3">{call.duration}</td>
//                     <td className="px-4 py-3">{call.time}</td>
//                     <td
//                       className={`px-4 py-3 font-semibold ${
//                         call.status === "Completed"
//                           ? "text-green-600"
//                           : "text-red-600"
//                       }`}
//                     >
//                       {call.status}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Inbound;

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type LivekitEvent = {
  id: string;
  event: string;
  createdAt: string;
  room: {
    sid: string;
    name: string;
    emptyTimeout: number;
    creationTime: string;
    enabledCodecs: { mime: string }[];
  };
};

const Inbound = () => {
  const [events, setEvents] = useState<LivekitEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const apiBaseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/latest-events`, {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const json = await response.json();
        console.log("✅ API Data:", json);

        // Handle API structure properly
        if (json?.events && Array.isArray(json.events)) {
          setEvents(json.events);
        } else {
          setEvents([]);
        }
      } catch (error) {
        console.error("❌ Error fetching data:", error);

        // fallback mock data
        setEvents([
          {
            id: "EV_12345",
            event: "room_started",
            createdAt: "1760267311",
            room: {
              sid: "RM_123",
              name: "Demo Room",
              emptyTimeout: 300,
              creationTime: "1692627281",
              enabledCodecs: [{ mime: "video/H264" }],
            },
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [apiBaseUrl]);

  return (
    <div>
      <Navbar />
      <div className="pt-28 px-6 pb-12 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          LiveKit Events
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-[60vh]">
            <div className="w-12 h-12 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : events.length === 0 ? (
          <div className="text-center text-gray-600">No events found</div>
        ) : (
          <div className="overflow-x-auto bg-white shadow-md rounded-2xl">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white text-left text-sm md:text-base">
                  <th className="px-4 py-3 rounded-tl-2xl">Event</th>
                  <th className="px-4 py-3">Room Name</th>
                  <th className="px-4 py-3">Room SID</th>
                  <th className="px-4 py-3">Created At</th>
                  <th className="px-4 py-3 rounded-tr-2xl">Enabled Codecs</th>
                </tr>
              </thead>
              <tbody>
                {events.map((e) => (
                  <tr
                    key={e.id}
                    className="border-t text-gray-700 hover:bg-gray-100 transition"
                  >
                    <td className="px-4 py-3 font-medium">{e.event}</td>
                    <td className="px-4 py-3">{e.room?.name || "N/A"}</td>
                    <td className="px-4 py-3">{e.room?.sid || "N/A"}</td>
                    <td className="px-4 py-3">
                      {new Date(Number(e.createdAt) * 1000).toLocaleString()}
                    </td>
                    <td className="px-4 py-3">
                      {e.room?.enabledCodecs?.map((c) => c.mime).join(", ") ||
                        "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Inbound;
