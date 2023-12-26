import * as React from "react";
import { useAuth } from "../../hooks/authHooks";

const AdminNav = ({ children }) => {
  
  const { handleSignIn, handleSignOut } = useAuth();
  return (
    <div className="flex">
      {/* Left Section */}
      <div className="w-1/4 bg-blue-500 p-4">
        <nav>
          <ul className="flex flex-col space-y-2 text-white">
            <li>
                <a className="hover:underline">Name</a>
            </li>
            <li>
                <button className="hover:underline" onClick={handleSignOut} >Logout</button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Right Section */}
      <div className="w-3/4 p-4">
        {children}
      </div>
    </div>
  );
};

export default AdminNav;