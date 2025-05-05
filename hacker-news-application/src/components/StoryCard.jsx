import { useQuery } from 'react-query';

const fetchStoryDetails = async (storyId) => {
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`);
    const data = await res.json();
    return data;
  };
  

function StoryCard({ storyId }) {
  return (
    <div>
      <h3>Story Title</h3>
    </div>
  );
}

export default StoryCard;
