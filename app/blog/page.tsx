"use client"
import React, { useState } from "react";
import SearchBar from "@/components/SearchBar";
import { blogPosts } from "@/data/blogData";
import Link from "@/components/Link";

const BlogPage: React.FC = () => {
  const [query, setQuery] = useState("");

  const filteredPosts = Object.keys(blogPosts).filter((slug) =>
    blogPosts[slug].title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-4">Blog</h2>
        <SearchBar onSearch={setQuery} />
        <div className="space-y-4">
          {filteredPosts.map((slug) => (
            <article key={slug} className="bg-white shadow-lg p-4 rounded-lg">
              <h3 className="text-2xl font-bold">{blogPosts[slug].title}</h3>
              <p className="text-gray-600">{blogPosts[slug].date}</p>
              <p>{blogPosts[slug].content.substring(0, 100)}...</p>
              <Link
                href={`/blog/${slug}`}
                className="text-blue-500 hover:underline"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
