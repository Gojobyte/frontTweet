import { useAuth } from "../contexts/AuthContext";
import LogoutButton from "../components/LogoutButton";

const ThreeColumnLayout = ({ left, center, right }) => {
  const { user } = useAuth();

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen bg-gray-100 text-gray-800 ">
      {/* Colonne gauche */}
      <aside className="hidden md:block md:col-span-2 p-4 border-r border-gray-200 bg-white rounded-xl">
        <div className="flex flex-col justify-between h-full">
          <div>
            {left}

            {/* Affichage info utilisateur */}
            {user && (
              <div className="mt-6 text-sm text-gray-600">
                Connecté en tant que :
                <div className="font-medium text-gray-800">{user.username}</div>
                 <div className="font-medium text-gray-800">{user.email}</div>
              </div>
            )}
          </div>

          {/* Déconnexion */}
          {user && (
            <div className="mt-6">
              <LogoutButton />
            </div>
          )}
        </div>
      </aside>

      {/* Colonne centrale */}
      <main className="col-span-1 md:col-span-7 p-4 sm:p-6">{center}</main>

      {/* Colonne droite */}
      <aside className="hidden lg:block lg:col-span-3 p-4 border-l border-gray-200 bg-white rounded-xl">
        {right}
      </aside>
    </div>
  );
};

export default ThreeColumnLayout;
