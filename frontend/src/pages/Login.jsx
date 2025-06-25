import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  const fetchLogin = async (retries = 3, delay = 2000) => {
    try {
      const res = await fetch("https://backtweet.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur de connexion");

      login(data.user, data.token);
      navigate("/");
    } catch (err) {
      if (retries > 0) {
        setTimeout(() => {
          fetchLogin(retries - 1, delay);
        }, delay);
      } else {
        setError(err.message || "Échec de la connexion après plusieurs tentatives.");
        setLoading(false);
      }
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    fetchLogin(); // Ne passe pas l'événement `e` ici
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-semibold mb-4 text-center text-blue-600">
          Se connecter
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 px-3 py-2 rounded mb-3 text-sm">
            {error}
          </div>
        )}

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
          disabled={loading}
          className={`w-full ${
            loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          } text-white py-2 rounded transition`}
        >
          {loading ? "Connexion en cours..." : "Se connecter"}
        </button>

        <button
          type="button"
          onClick={() => navigate("/register")}
          className="w-full mt-3 bg-blue-100 text-blue-800 py-2 rounded hover:bg-blue-200 transition"
        >
          Pas encore de compte ? S'inscrire
        </button>
      </form>
    </div>
  );
};

export default Login;
