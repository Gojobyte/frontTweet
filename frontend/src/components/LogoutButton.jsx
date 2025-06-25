import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const LogoutButton = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) return null;

  return (
    <button
      onClick={handleLogout}
      className="text-sm text-red-500 hover:underline mt-4"
    >
      Se déconnecter
    </button>
  );
};

export default LogoutButton;
