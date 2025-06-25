import { Home, User, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const MobileBottomMenu = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around py-2 md:hidden z-50">
      <Link to="/" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
        <Home size={22} />
        <span className="text-xs">Accueil</span>
      </Link>
      <Link to="/profile" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
        <User size={22} />
        <span className="text-xs">Profil</span>
      </Link>
      <Link to="/messages" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
        <MessageCircle size={22} />
        <span className="text-xs">Messages</span>
      </Link>
    </nav>
  );
};

export default MobileBottomMenu;
