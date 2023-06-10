import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Experienced DJ",
          "I DJ at Birthday Parties",
          "I DJ at Weddings",
          "I DJ at Graduation Parties",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
