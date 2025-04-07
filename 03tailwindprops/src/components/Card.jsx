import React from 'react';

function Card({ username, btnText="visit me" }) {
  return (
    <div className="w-[300px] h-[460px] rounded-xl overflow-hidden shadow-lg bg-white">
      {/* Profile Image */}
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&q=60"
        alt="Profile"
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
        <h2 className="text-xl font-bold text-gray-800">{username}</h2>

        <p className="text-sm text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, fugiat, ipsa!
        </p>

        <button className="mt-4 bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-blue-700">
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;
