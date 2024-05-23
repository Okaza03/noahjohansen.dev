// components/LottieAnimation.tsx
import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

interface LottieAnimationProps {
  src: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ src }) => {
  const [error, setError] = useState(false);

  return (
    <div className="lottie-container">
      {error ? (
        <div className="text-white">
          Failed to load animation. Please try again later.
        </div>
      ) : (
        <Player
          autoplay
          loop
          src={src}
          style={{ height: "300px", width: "300px" }}
          onEvent={(event) => {
            if (event === "error") {
              setError(true);
            }
          }}
        />
      )}
    </div>
  );
};

export default LottieAnimation;
