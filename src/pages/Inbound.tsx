// // import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

// const Inbound = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="mt-22">hi</div>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default Inbound;

import Navbar from "../components/Navbar";

const Inbound = () => {
  // Example mock data — replace later with real API data
  const inboundCalls = [
    {
      id: 1,
      callerName: "John Doe",
      phone: "+1 234 567 890",
      duration: "02:15",
      time: "2025-10-09 14:35",
      status: "Completed",
    },
    {
      id: 2,
      callerName: "Sarah Smith",
      phone: "+1 987 654 321",
      duration: "00:45",
      time: "2025-10-09 15:10",
      status: "Missed",
    },
    {
      id: 3,
      callerName: "Michael Brown",
      phone: "+1 444 888 222",
      duration: "03:05",
      time: "2025-10-09 15:45",
      status: "Completed",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="pt-28 px-6 pb-12 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Inbound Call Details
        </h1>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto bg-white shadow-md rounded-2xl">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-blue-900 text-white text-left text-sm md:text-base">
                <th className="px-4 py-3 rounded-tl-2xl">Caller Name</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Duration</th>
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3 rounded-tr-2xl">Status</th>
              </tr>
            </thead>
            <tbody>
              {inboundCalls.map((call) => (
                <tr
                  key={call.id}
                  className="border-t text-gray-700 hover:bg-gray-100 transition"
                >
                  <td className="px-4 py-3 font-medium">{call.callerName}</td>
                  <td className="px-4 py-3">{call.phone}</td>
                  <td className="px-4 py-3">{call.duration}</td>
                  <td className="px-4 py-3">{call.time}</td>
                  <td
                    className={`px-4 py-3 font-semibold ${
                      call.status === "Completed"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {call.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inbound;
