import React from 'react';

const Header = () => {
  return (
    <header className="bg-white py-4 px-10 rounded-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <p className="text-sm px-10">Last Scan 07.11.2027</p>
          <p className="text-sm px-10">05:34 PM</p>
          <p className="text-sm px-10">Store ID -7943</p>
        </div>
          <p className="text-sm underline">Store Supervisor</p>
          <p className="text-sm">John Doe</p>
      </div>
    </header>
  );
};

export default Header;
