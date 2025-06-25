import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import AuthenticatedLayout from "./components/AuthenticatedLayout";

const App = () => {
  return (
    <Routes>
      {/* Routes publiques */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Routes protégées avec layout */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <AuthenticatedLayout>
              <Home />
            </AuthenticatedLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/messages"
        element={
          <PrivateRoute>
            <AuthenticatedLayout>
              <Messages />
            </AuthenticatedLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <AuthenticatedLayout>
              <Profile />
            </AuthenticatedLayout>
          </PrivateRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
