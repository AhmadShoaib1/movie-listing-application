import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const fetchStoryDetail = async (storyId) => {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`
  );
  return res.json();
};

const StoryCard = ({ storyId }) => {
  const {
    data: story,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["story", storyId],
    queryFn: () => fetchStoryDetail(storyId),
  });

  if (isLoading) return <div>Loading story...</div>;
  if (isError || !story) return <div>Error loading story</div>;

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Link to={`/story/${story.id}`} className="text-blue-600 font-bold text-lg hover:underline">
  {story.title}
</Link>
      <p className="text-sm text-gray-700">
        {story.score} points by {story.by}
      </p>
      <p className="text-xs text-gray-500">
        {new Date(story.time * 1000).toLocaleString()}
      </p>
    </div>
  );
};

export default StoryCard;
