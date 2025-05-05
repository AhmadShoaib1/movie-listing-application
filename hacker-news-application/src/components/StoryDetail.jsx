import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const fetchStoryDetails = async (storyId) => {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`);
  const data = await res.json();
  return data;
};

function StoryDetails() {
  const { id } = useParams(); // Get story ID from URL
  const { data, error, isLoading } = useQuery(['story', id], () => fetchStoryDetails(id));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching story details</div>;

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold">{data.title}</h3>
      <p>By: {data.by}</p>
      <p>Score: {data.score}</p>
      <p>Type: {data.type}</p>
      <p>URL: <a href={data.url} target="_blank" rel="noopener noreferrer">{data.url}</a></p>
      <p>{new Date(data.time * 1000).toLocaleString()}</p>
    </div>
  );
}

export default StoryDetails;
