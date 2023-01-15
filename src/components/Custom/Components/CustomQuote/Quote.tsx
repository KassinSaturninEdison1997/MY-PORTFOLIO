import React from "react";

interface IQuoteProps {
  text: string;
  author: string;
  simpleCharacter?: boolean;
}

const Quote: React.FunctionComponent<IQuoteProps> = ({
  text,
  author,
  simpleCharacter = false,
}) => {
  return (
    <div className="quote-container">
      <div className="quote-mark">
        {!simpleCharacter ? (
          <svg
            aria-hidden="true"
            className="w-10 h-10 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <span>&ldquo;</span>
        )}
      </div>
      <div className="quote-text font-normal">{text}</div>
      <div className="quote-author flex justify-end font-bold mt-8">
        ~ {author}
      </div>
    </div>
  );
};

export default Quote;
