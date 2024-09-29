import { useEffect, useState } from "react";

interface Comment {
  id: number;
  user: string;
  comment: string;
  time: string;
}
const mockComments: Comment[] = [
  {
    id: 1,
    user: "John Doe",
    comment: "Great platform! Really easy to use and book facilities.",
    time: "5 minutes ago",
  },
  {
    id: 2,
    user: "Jane Smith",
    comment: "Had an amazing experience with the booking process!",
    time: "15 minutes ago",
  },
  {
    id: 3,
    user: "Michael Lee",
    comment: "I was able to easily find the facility I needed. Love it!",
    time: "30 minutes ago",
  },
];

const TopComments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    setComments(mockComments);
  }, []);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-3xl mx-auto my-8">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        Recent Comments
      </h2>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white p-4 mb-4 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-semibold text-gray-700">
              {comment.user}
            </h3>
            <p className="text-gray-600 mt-2">{comment.comment}</p>
            <span className="text-sm text-gray-500 mt-1 block">
              {comment.time}
            </span>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">
          No recent comments available.
        </p>
      )}
    </div>
  );
};

export default TopComments;
