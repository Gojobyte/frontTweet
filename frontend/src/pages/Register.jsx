import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Register = () => {
  const { login, isAuthenticated } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://backtweet.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur lors de l'inscription");

      login(data.user, data.token);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4 text-center text-blue-600">
          Créer un compte
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 px-3 py-2 rounded mb-3 text-sm">
            {error}
          </div>
        )}

        <input
          type="text"
          placeholder="Nom d'utilisateur"
          className="w-full mb-3 px-4 py-2 border border-gray-300 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

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
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          S'inscrire
        </button>

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="w-full mt-3 bg-blue-100 text-blue-800 py-2 rounded hover:bg-blue-200 transition"
        >
          Déjà un compte ? Se connecter
        </button>
      </form>
    </div>
  );
};

export default Register;
