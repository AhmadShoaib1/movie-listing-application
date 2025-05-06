import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const fetchStoryDetails = async (id) => {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
  return res.json();
};

const StoryDetail = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["story-detail", id],
    queryFn: () => fetchStoryDetails(id),
  });

  if (isLoading) return <p>Loading story...</p>;
  if (isError || !data) return <p>Error loading story</p>;

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-2">
        <a href={data.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          {data.title}
        </a>
      </h2>
      <p className="text-sm text-gray-700 mb-2">
        {data.score} points by {data.by} — {new Date(data.time * 1000).toLocaleString()}
      </p>
      {data.text && (
        <div className="prose mt-4" dangerouslySetInnerHTML={{ __html: data.text }} />
      )}
    </div>
  );
};

export default StoryDetail;
