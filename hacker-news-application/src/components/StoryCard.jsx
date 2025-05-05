import { useQuery } from 'react-query';
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const fetchStoryDetails = async (storyId) => {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`);
  const data = await res.json();
  return data;
};

function StoryCard({ storyId }) {
  const { data, error, isLoading } = useQuery(['story', storyId], () => fetchStoryDetails(storyId));

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">Error fetching story details</div>;

  return (
    <Card className="bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition duration-200">
      <CardHeader>
        <a href={data.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
          <h3 className="text-lg font-semibold text-blue-600">{data.title}</h3>
        </a>
      </CardHeader>
      <CardContent className="text-sm text-gray-700 dark:text-gray-300">
        <p>{data.score} points by <span className="font-medium">{data.by}</span></p>
        <p className="text-xs mt-1">{new Date(data.time * 1000).toLocaleString()}</p>
      </CardContent>
    </Card>
  );
}

export default StoryCard;
