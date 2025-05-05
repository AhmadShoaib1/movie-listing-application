import { useQuery } from 'react-query';

const fetchStoryDetails = async (storyId) => {
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`);
    const data = await res.json();
    return data;
  };
  

function StoryCard({ storyId }) {
    const { data, error, isLoading } = useQuery(['story', storyId], () => fetchStoryDetails(storyId));
    if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching story details</div>;
  return (
    <div>
      <h3>{data.Title}</h3>
    </div>
  );
}

export default StoryCard;
