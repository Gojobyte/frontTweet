import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://backtweet.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur lors de la connexion");

      login(data.user, data.token);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4 text-center text-blue-600">
          Connexion
        </h2>

        {error && <div className="bg-red-100 text-red-700 px-3 py-2 rounded mb-3 text-sm">{error}</div>}

        <input
          type="email"
          placeholder="Adresse email"
          className="w-full mb-3 px-4 py-2 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Se connecter
        </button>

        <button
          type="button"
          onClick={() => navigate("/register")}
          className="w-full mt-3 bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400 transition"
        >
          Créer un compte
        </button>
      </form>
    </div>
  );
};

export default Login;
