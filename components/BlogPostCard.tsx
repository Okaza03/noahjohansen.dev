import React from "react";
import Link from "@/components/Link";

interface BlogPostCardProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  date,
  excerpt,
  slug,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-gray-600">{date}</p>
      <p className="text-gray-800">{excerpt}</p>
      <Link href={`/blog/${slug}`}>
        <p className="text-blue-500 hover:underline">Read more</p>
      </Link>
    </div>
  );
};

export default BlogPostCard;
