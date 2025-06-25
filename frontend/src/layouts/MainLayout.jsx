import ThreeColumnLayout from "./ThreeColumnLayout";
import MobileBottomMenu from "./MobileBottomMenu";
import { Outlet } from "react-router-dom";
import { Home as HomeIcon, User, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const LeftMenu = () => (
  <nav className="flex flex-col gap-6">
    <h1 className="text-2xl font-bold text-blue-600">MyTwitter</h1>
    <ul className="space-y-3">
      <li>
        <Link to="/" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
          <HomeIcon size={20} />
          <span>Accueil</span>
        </Link>
      </li>
      <li>
        <Link to="/profile" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
          <User size={20} />
          <span>Profil</span>
        </Link>
      </li>
      <li>
        <Link to="/messages" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
          <MessageCircle size={20} />
          <span>Messages</span>
        </Link>
      </li>
    </ul>
  </nav>
);

const RightPanel = () => (
  <div className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200">
    <h2 className="text-lg font-semibold mb-4">Qui suivre</h2>
    <ul className="space-y-3">
      <li className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-800">@OpenAI</span>
        <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full hover:bg-blue-600">
          Suivre
        </button>
      </li>
      <li className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-800">@DymaFormation</span>
        <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full hover:bg-blue-600">
          Suivre
        </button>
      </li>
      <li className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-800">@SalahDev</span>
        <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full hover:bg-blue-600">
          Suivre
        </button>
      </li>
    </ul>
  </div>
);

const MainLayout = () => {
  return (
    <>
      <ThreeColumnLayout
        left={<LeftMenu />}
        center={<Outlet />}
        right={<RightPanel />}
      />
      <MobileBottomMenu />
    </>
  );
};

export default MainLayout;
