import { useQuery } from 'react-query';
import StoryCard from './StoryCard';

const fetchStories = async (category) => {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/${category}.json?print=pretty`);
  const data = await res.json();
  return data;
};

function StoryList({ category }) {
  const { data, error, isLoading } = useQuery(category, () => fetchStories(category));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching stories</div>;

  return (
    <div className="grid grid-cols-5 gap-4">
      {data?.slice(0, 25).map((storyId) => (
        <StoryCard key={storyId} storyId={storyId} />
      ))}
    </div>
  );
}

export default StoryList;
