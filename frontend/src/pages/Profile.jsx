import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { getTweetsByUser } from "../features/tweets/tweetService";
import Tweet from "../features/tweets/Tweet";

const Profile = () => {
  const { user } = useAuth();
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    if (user?.id) {
      getTweetsByUser(user.id).then(setTweets).catch(console.error);
    }
  }, [user]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Profil de {user.username}</h2>
      <p className="text-gray-600">Email : {user.email}</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Tweets</h3>
      <div className="space-y-4">
        {tweets.length > 0 ? (
          tweets.map((tweet) => <Tweet key={tweet._id} tweet={tweet} />)
        ) : (
          <p className="text-gray-500">Aucun tweet pour le moment.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
