// ✅ TweetList.jsx
import { useEffect, useState } from "react";
import TweetForm from "./TweetForm";
import Tweet from "./Tweet";
import {
  getTweets,
  createTweet,
  deleteTweet,
  updateTweet,
} from "./tweetService";

const TweetList = () => {
  const [tweets, setTweets] = useState([]);
  const [editingTweet, setEditingTweet] = useState(null);

  const loadTweets = async () => {
    const data = await getTweets();
    setTweets(data);
  };

  const handleCreate = async (tweet) => {
    const newTweet = await createTweet(tweet);
    setTweets([newTweet, ...tweets]);
  };

  const handleDelete = async (id) => {
    if (!id) {
      console.error("ID du tweet non défini !");
      return;
    }
    await deleteTweet(id);
    setTweets(tweets.filter((t) => t._id !== id));
  };

  const handleUpdate = async (tweetData) => {
    const updated = await updateTweet(editingTweet._id, tweetData);
    setTweets(tweets.map((t) => (t._id === editingTweet._id ? updated : t)));
    setEditingTweet(null);
  };

  useEffect(() => {
    loadTweets();
  }, []);

  return (
    <div>
      <TweetForm
        onSubmit={editingTweet ? handleUpdate : handleCreate}
        initialValue={editingTweet}
      />
      {tweets.map((tweet) => (
        <Tweet
          key={tweet._id}
          tweet={tweet}
          onDelete={() => handleDelete(tweet._id)}
          onEdit={setEditingTweet}
        />
      ))}
    </div>
  );
};

export default TweetList;
