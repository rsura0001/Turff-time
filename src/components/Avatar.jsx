// AvatarDropdown.js
import React, { useState } from 'react';

const Avatar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-n-8 border border-n-6"
      >
        {/* Replace with your avatar image */}
        <img
          src="https://via.placeholder.com/40" 
          alt="Avatar"
          className="w-full h-full object-cover"
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-n-8 border border-n-6 rounded-md shadow-lg">
          <a
            href="#profile"
            className="block px-4 py-2 text-n-1 hover:bg-n-7 rounded-t-md transition-colors"
          >
            Profile
          </a>
          <a
            href="#settings"
            className="block px-4 py-2 text-n-1 hover:bg-n-7 transition-colors"
          >
            Settings
          </a>
          <a
            href="#logout"
            className="block px-4 py-2 text-n-1 hover:bg-n-7 rounded-b-md transition-colors"
          >
            Logout
          </a>
        </div>
      )}
    </div>
  );
};

export default Avatar;
