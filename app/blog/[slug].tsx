import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { blogPosts } from '@/data/blogData';
import { BlogPost } from '@/data/types';

interface BlogPostPageProps {
  post: BlogPost;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post }) => {
  return (
    <>
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.date}</p>
        <div className="text-left">
          <p>{post.content}</p>
        </div>
      </section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(blogPosts).map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const post = blogPosts[slug];

  return {
    props: {
      post,
    },
  };
};

export default BlogPostPage;
