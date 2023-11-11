import React, { useState, useEffect } from "react";
import { Cursor } from 'react-simple-typewriter';

const Typed = () => {
  const [text, setText] = useState("");
  const words = ["Computer Science student", "Web Developer"];
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 130;
    const deletingSpeed = 130;
    const delay = 6000;

    const handleType = () => {
      const currentWord = words[wordIndex];
      const currentIndex = isDeleting
        ? text.length - 1
        : text.length + 1;

      setText(currentWord.substring(0, currentIndex));

      if (!isDeleting && text === currentWord) {
        setIsDeleting(true);
        setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, delay);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const typingInterval = setInterval(handleType, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(typingInterval);
  }, [text, wordIndex, isDeleting, words]);

  return (
    <h2>
      And I'm a <span className="typed--section">{text}</span>
      <Cursor cursorStyle='|' />
    </h2>
  );
};

export default Typed;
