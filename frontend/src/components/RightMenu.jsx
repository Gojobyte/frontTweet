const RightMenu = () => {
  return (
    <div className="space-y-6">

      {/* What's happening */}
      <div className="bg-white rounded-xl shadow p-4">
        <h3 className="font-bold text-lg mb-3">🔥 What's happening</h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>#JavaScript</li>
          <li>#ReactJS</li>
          <li>#MongoDB</li>
        </ul>
      </div>

      {/* Who to follow */}
      <div className="bg-white rounded-xl shadow p-4">
        <h3 className="font-bold text-lg mb-3">👥 Who to follow</h3>
        <ul className="text-sm text-gray-700 space-y-3">
          <li className="flex justify-between items-center">
            <span>Eva FoX</span>
            <button className="text-blue-500 hover:underline">Follow</button>
          </li>
          <li className="flex justify-between items-center">
            <span>Dylan W.</span>
            <button className="text-blue-500 hover:underline">Follow</button>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default RightMenu;
