"use client"
import { useState } from "react";
import { client } from "@/app/lib/sanity";

type Comment = {
  name: string;
  email: string;
  content: string;
  createdAt: string;
};

type CommentForm = {
  name: string;
  email: string;
  content: string;
};

export default function CommentSection({ blogId }: { blogId: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [formData, setFormData] = useState<CommentForm>({
    name: "",
    email: "",
    content: "",
  });
  const [loading, setLoading] = useState(false);

  const fetchComments = async () => {
    try {
      const query = `
        *[_type == "comment" && blog._ref == $blogId] | order(createdAt desc) {
          name,
          content,
          createdAt
        }
      `;
      const data = await client.fetch(query, { blogId });
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await client.create({
        _type: "comment",
        name: formData.name,
        email: formData.email,
        content: formData.content,
        blog: { _type: "reference", _ref: blogId },
      });
      setFormData({ name: "", email: "", content: "" });
      fetchComments(); // Refresh comments
    } catch (error) {
      console.error("Error submitting comment:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch comments on load
  useState(() => {
    fetchComments();
  });

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold mb-6">Comments</h2>

      {/* Existing Comments */}
      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="p-4 border rounded-md bg-gray-100 dark:bg-gray-800">
              <p className="font-medium">{comment.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {new Date(comment.createdAt).toLocaleString()}
              </p>
              <p className="mt-2">{comment.content}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-400">No comments yet. Be the first to comment!</p>
        )}
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        <textarea
          name="content"
          placeholder="Your Comment"
          value={formData.content}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-md"
          rows={4}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
