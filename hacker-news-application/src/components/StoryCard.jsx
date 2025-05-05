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
    <div className="bg-white p-4 rounded shadow">
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        <h3 className="text-lg font-semibold">{data.title}</h3>
      </a>
      <p>{data.score} points by {data.by}</p>
      <p>{new Date(data.time * 1000).toLocaleString()}</p>
    </div>
  );
  
}

export default StoryCard;
