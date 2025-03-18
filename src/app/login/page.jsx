import React from "react";


export const metadata = {
  title: "Login",
  description: "Kirish",
};

export default function LoginPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[72vh] bg-gray-100">
      {/* Login Section */}
      <section className="p-8 flex flex-col items-center bg-white shadow-md rounded-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6">Login</h2>
        <div className="w-full">
          <input type="text" placeholder="Username" className="w-full p-3 border border-gray-300 rounded-md mb-4" />
          <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-md mb-4" />
          <button className="w-full p-3 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500 transition">Login</button>
        </div>
      </section>
    </div>
  );
}
