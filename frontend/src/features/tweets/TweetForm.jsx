// ✅ TweetForm.jsx
import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

const TweetForm = ({ onSubmit, initialValue }) => {
  const { user } = useAuth();
  const [content, setContent] = useState("");

  useEffect(() => {
    if (initialValue) {
      setContent(initialValue.content);
    }
  }, [initialValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content || !user) return;

    onSubmit({
      user: user.username,
      userId: user.id,
      content,
    });

    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow p-4 mb-6 border border-gray-200 space-y-3"
    >
      <textarea
        placeholder="Quoi de neuf ?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border p-2 rounded-md resize-none h-24 focus:ring-2 ring-blue-400"
        required
      />
      <div className="text-right">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
        >
          {initialValue ? "Modifier" : "Tweeter"}
        </button>
      </div>
    </form>
  );
};

export default TweetForm;
