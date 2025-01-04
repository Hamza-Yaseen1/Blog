"use client";

import { useState } from "react";

interface Comment {
  id: number;
  username: string;
  email: string;
  text: string;
  createdAt: Date;
}

function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [newComment, setNewComment] = useState<string>("");

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username.trim() && email.trim() && newComment.trim()) {
      const newCommentData: Comment = {
        id: Date.now(),
        username,
        email,
        text: newComment,
        createdAt: new Date(),
      };

      setComments([...comments, newCommentData]);
      setUsername("");
      setEmail("");
      setNewComment("");
    }
  };

  return (
    <div className="comment-section mt-10">
      {/* Add Comment */}
      <h3 className="text-lg font-semibold mb-4">Leave a Comment</h3>
      <form onSubmit={handleCommentSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your name"
          className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment here..."
          className="border border-gray-300 rounded-md p-3 w-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>

      {/* Display Comments */}
      <div className="comments-list mt-6">
        <h4 className="text-lg font-medium mb-4">
          {comments.length > 0
            ? `${comments.length} Comment${comments.length > 1 ? "s" : ""}`
            : "No comments yet"}
        </h4>
        <ul className="space-y-6">
          {comments.map((comment) => (
            <li
              key={comment.id}
              className="flex flex-col space-y-2 border-b border-gray-200 pb-4"
            >
              <div className="font-medium text-blue-600">{comment.username}</div>
              <div className="text-sm text-gray-500">{comment.email}</div>
              <div className="text-gray-700">{comment.text}</div>
              <div className="text-xs text-gray-400">
                {new Intl.DateTimeFormat("en-US", {
                  dateStyle: "medium",
                  timeStyle: "short",
                }).format(comment.createdAt)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CommentSection;
