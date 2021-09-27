import React from 'react';

export const Result = ({ className, item, setTopic }) => {
  const handler = () => {
    setTopic(item.name);
  };
  return (
    <li className={className}>
      <button onClick={handler}>
        {item.name}
        <span>
          {String.fromCharCode(9733)} {item.stargazerCount}
        </span>
      </button>
    </li>
  );
};
