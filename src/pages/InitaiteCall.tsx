// // const InitaiteCall = () => {
// //   return <div>InitaiteCall</div>;
// // };

// // export default InitaiteCall;

// import { useForm } from "react-hook-form";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";

// interface CallFormData {
//   caller_name: string;
//   phone: string;
//   agent_persona: string;
//   context: string;
//   meeting_objective: string;
// }

// const InitaiteCall = () => {
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<CallFormData>();

//   const onSubmit = (data: CallFormData) => {
//     console.log("📞 Form Data Submitted:", data);
//     // You can later call your API here to initiate the call
//     navigate("/call-start", { state: data });
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="pt-28 px-6 pb-12 bg-gray-50 min-h-screen flex justify-center">
//         <div className="w-full max-w-lg bg-white shadow-md rounded-2xl p-8">
//           <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
//             Initiate a Call
//           </h1>

//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Caller Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="John Doe"
//                 {...register("caller_name", {
//                   required: "Caller Name is required",
//                 })}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               />
//               {errors.caller_name && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.caller_name.message}
//                 </p>
//               )}
//             </div>

//             {/* Phone Number */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter phone number with country code"
//                 {...register("phone", {
//                   required: "Phone number is required",
//                   pattern: {
//                     value: /^\+\d{10,15}$/,
//                     message:
//                       "Enter a valid phone number with + and country code",
//                   },
//                 })}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               />
//               {errors.phone && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.phone.message}
//                 </p>
//               )}
//             </div>

//             {/* Agent Persona */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Agent Persona
//               </label>
//               <input
//                 type="text"
//                 placeholder="e.g., Support Agent, Sales Rep..."
//                 {...register("agent_persona", {
//                   required: "Agent persona is required",
//                 })}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               />
//               {errors.agent_persona && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.agent_persona.message}
//                 </p>
//               )}
//             </div>

//             {/* Context */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Context
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter context of the call"
//                 {...register("context", { required: "Context is required" })}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               />
//               {errors.context && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.context.message}
//                 </p>
//               )}
//             </div>

//             {/* Meeting Objective */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Meeting Objective
//               </label>
//               <input
//                 type="text"
//                 placeholder="What’s the goal of this meeting?"
//                 {...register("meeting_objective", {
//                   required: "Meeting objective is required",
//                 })}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               />
//               {errors.meeting_objective && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.meeting_objective.message}
//                 </p>
//               )}
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-blue-900 text-white py-3 cursor-pointer rounded-lg font-semibold hover:bg-blue-800 transition-all"
//             >
//               Start Call
//             </button>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default InitaiteCall;

import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface CallFormData {
  caller_name: string;
  phone: string;
  agent_persona: string;
  context: string;
  meeting_objective: string;
}

const InitaiteCall = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const apiBaseUrl = import.meta.env.VITE_API_URL2;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CallFormData>();

  const onSubmit = async (data: CallFormData) => {
    setLoading(true);
    setErrorMessage("");

    try {
      console.log("📞 Sending data to API:", data);

      const payload = {
        persona: data.agent_persona,
        context: data.context,
        caller_name: data.caller_name,
        meeting_objective: data.meeting_objective,
        sip_trunk_id: "ST_UByWd3sFg9Wg",
        phone_number: data.phone,
      };

      const response = await fetch(`${apiBaseUrl}/make-call`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Failed to initiate call (${response.status})`);
      }

      const result = await response.json();
      console.log("✅ API Response:", result);

      // Navigate to CallStart screen after successful API call
      navigate("/call-status", { state: { ...data, result } });
    } catch (error: unknown) {
      console.error("❌ Error initiating call:", error);
      setErrorMessage("Failed to initiate call. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="pt-28 px-6 pb-12 bg-gray-50 min-h-screen flex justify-center">
        <div className="w-full max-w-lg bg-white shadow-md rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Initiate a Call
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Caller Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Caller Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                {...register("caller_name", {
                  required: "Caller Name is required",
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.caller_name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.caller_name.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter phone number with country code"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\+\d{10,15}$/,
                    message:
                      "Enter a valid phone number with + and country code",
                  },
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Agent Persona */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Agent Persona
              </label>
              <input
                type="text"
                placeholder="e.g., Support Agent, Sales Rep..."
                {...register("agent_persona", {
                  required: "Agent persona is required",
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.agent_persona && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.agent_persona.message}
                </p>
              )}
            </div>

            {/* Context */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Context
              </label>
              <input
                type="text"
                placeholder="Enter context of the call"
                {...register("context", { required: "Context is required" })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.context && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.context.message}
                </p>
              )}
            </div>

            {/* Meeting Objective */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Meeting Objective
              </label>
              <input
                type="text"
                placeholder="What’s the goal of this meeting?"
                {...register("meeting_objective", {
                  required: "Meeting objective is required",
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.meeting_objective && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.meeting_objective.message}
                </p>
              )}
            </div>

            {/* Error message */}
            {errorMessage && (
              <p className="text-center text-red-500 text-sm">{errorMessage}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold text-white transition-all ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-900 hover:bg-blue-800"
              }`}
            >
              {loading ? "Starting Call..." : "Start Call"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InitaiteCall;
