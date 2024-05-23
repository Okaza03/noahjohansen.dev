// Import necessary dependencies
import Link from "next/link";
import type { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

// Define the CustomLink component
const CustomLink = ({
  href,
  ...rest
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  // Check if the href property starts with "/"
  const isInternalLink = href && href.startsWith("/");

  // Check if the href property starts with "#"
  const isAnchorLink = href && href.startsWith("#");

  // If the href property is an internal link, return the Link component with the href property and the rest of the props
  if (isInternalLink) {
    return <Link href={href} {...rest} />;
  }

  // If the href property is an anchor link, return the a tag with the href property and the rest of the props
  if (isAnchorLink) {
    return <a href={href} {...rest} />;
  }

  // If the href property is not an internal link or an anchor link, return the a tag with the target property set to "_blank", the rel property set to "noopener noreferrer", the href property, and the rest of the props
  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
};

// Export the CustomLink component for use in other files
export default CustomLink;
