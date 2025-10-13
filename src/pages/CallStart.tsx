// const CallStart = () => {
//   return <div>CallStart</div>;
// };

// export default CallStart;

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaPhoneAlt, FaRegClock } from "react-icons/fa";

const CallStart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const callData = location.state;

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  if (!callData) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-xl">
        No active call found.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 text-white">
      <div className="text-center space-y-6">
        {/* Phone Animation */}
        <div className="relative flex justify-center">
          <div className="absolute w-40 h-40 rounded-full bg-blue-400 opacity-20 animate-ping"></div>
          <div className="absolute w-32 h-32 rounded-full bg-blue-400 opacity-30 animate-ping delay-200"></div>
          <div className="relative w-24 h-24 flex justify-center items-center rounded-full bg-blue-700 shadow-lg">
            <FaPhoneAlt size={36} />
          </div>
        </div>

        {/* Caller Info */}
        <div>
          <h2 className="text-2xl font-bold">{callData.agent_persona}</h2>
          <p className="text-lg text-gray-200 mt-2">{callData.phone}</p>
          <p className="text-sm text-gray-300 italic mt-1">
            {callData.meeting_objective}
          </p>
        </div>

        {/* Timer */}
        <div className="flex justify-center items-center gap-2 text-lg font-medium">
          <FaRegClock />
          <span>{formatTime(seconds)}</span>
        </div>

        {/* End Call Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-8 bg-red-600 px-6 py-3 rounded-full font-semibold text-white hover:bg-red-700 transition-all shadow-lg"
        >
          End Call
        </button>
      </div>
    </div>
  );
};

export default CallStart;
