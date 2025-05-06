import { useQuery } from "@tanstack/react-query";
import StoryCard from "./StoryCard"; // Make sure this exists

const fetchStoryIds = async (category) => {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/${category}.json?print=pretty`
  );
  return res.json();
};

const fetchStoryDetail = async (id) => {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  );
  return res.json();
};

const StoryList = ({ category }) => {
  const {
    data: storyIds,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["stories", category],
    queryFn: () => fetchStoryIds(category),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading stories</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {storyIds.slice(0, 10).map((id) => (
        <StoryCard key={id} storyId={id} />
      ))}
    </div>
  );
};

export default StoryList;
