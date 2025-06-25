import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const LeftMenu = () => {
  const { user } = useAuth();

  const linkStyle = "flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100";
  const activeStyle = "text-blue-600 font-semibold";

  return (
    <nav className="flex flex-col justify-between h-full">
      {/* Partie haute - Navigation */}
      <div className="space-y-6">
        <h1 className="text-2xl font-bold px-3">X</h1>

        <ul className="space-y-2 text-lg text-gray-800">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              🏠 <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              🔍 <span>Explorer</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/messages"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              ✉️ <span>Messages</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              👤 <span>Profil</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Partie basse - utilisateur */}
      <div className="text-sm text-gray-600 border-t pt-4 px-3">
        <div className="font-semibold">{user?.username}</div>
        <div className="text-xs">{user?.email}</div>
      </div>
    </nav>
  );
};

export default LeftMenu;
