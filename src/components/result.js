import React from "react"

const Result = ({ item, setTopic }) => {
  const handler = () => {
    setTopic(item.name)
  };
  return (
    <li className="relatedTopic">
      <button onClick={handler}>
        {item.name}
        <span>
          {String.fromCharCode(9733)}
          {' '}
          {item.stargazerCount}
        </span>
      </button>
    </li>
  );
};

export default Result
