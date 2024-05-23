// Import the ReactNode type from React for type-checking of component props.
import { ReactNode } from "react";


// Define the Props interface to type-check the props passed to SectionContainer.
// The Props interface expects a 'children' prop which can be any valid React node.
interface Props {
  children: ReactNode;
}

// Define and export the SectionContainer functional component with props typed according to the Props interface.
// This component is designed to wrap other content and include a mobile navigation component.
export default function SectionContainer({ children }: Props) {
  return (
    // Render a <section> element with Tailwind CSS for styling.
    // The maximum width is set to 7xl, with horizontal padding adjustments for different screen sizes:
    // - `px-10` for base padding,
    // - `sm:px-6` for padding on screens at the 'sm' breakpoint and above.
    <section className="mx-auto max-w-7xl sm:px-6 px-10">
      {children}
      {/* This will render any children passed to SectionContainer,
      making it reusable for different content. */}

    </section>
  );
}
