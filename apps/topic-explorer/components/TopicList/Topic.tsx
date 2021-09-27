import React from 'react';

import { TopicProps } from './types';

export const Topic = ({ className, topic, setTopic }: TopicProps) => {
  const handler = () => {
    setTopic(topic.name);
  };
  return (
    <li className={className}>
      <button onClick={handler}>
        {topic.name}
        <span>★ {topic.stargazerCount}</span>
      </button>
    </li>
  );
};
