import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard: React.FC<{
  title: string;
  description: string;
  image: string;
}> = ({ title, description, image }) => {
  const projectLink = `/projects/${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <Link href={projectLink}>
      <p className="block overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 bg-white">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </p>
    </Link>
  );
};

export default ProjectCard;
