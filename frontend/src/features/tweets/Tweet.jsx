// ✅ Tweet.jsx
const Tweet = ({ tweet, onDelete, onEdit }) => {
  const getInitial = (name) => {
    return name && typeof name === "string" ? name.charAt(0).toUpperCase() : "?";
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 mb-4">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-blue-100 text-blue-600 font-bold flex items-center justify-center rounded-full uppercase">
          {getInitial(tweet.user)}
        </div>
        <div className="flex-1">
          <div className="text-sm text-gray-500 mb-1">
            <strong className="text-gray-800">{tweet.user}</strong> · {" "}
            {new Date(tweet.createdAt).toLocaleString()}
          </div>
          <p className="text-gray-900">{tweet.content}</p>
          <div className="mt-2 flex gap-4 text-sm">
            <button
              onClick={() => onEdit(tweet)}
              className="text-blue-500 hover:underline"
            >
              Modifier
            </button>
            <button
              onClick={() => onDelete(tweet._id)}
              className="text-red-500 hover:underline"
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
