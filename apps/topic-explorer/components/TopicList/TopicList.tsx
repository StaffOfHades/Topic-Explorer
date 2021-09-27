import React from 'react';
import classNames from 'classnames';

import { Topic } from './Topic';
import { TopicListProps } from './types';
import styles from './TopicList.module.scss';

export const TopicList = ({
  loading,
  topic,
  topics,
  setTopic,
}: TopicListProps) => {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-3xl font-medium px-2 py-4">{topic}</h1>
      <hr />
      {loading ? (
        <div className={classNames(styles.topicsList, 'mx-auto px-2 my-4')}>
          <div className="w-full px-4 py-1 border-2 border-gray-300 shadow rounded-lg">
            <div className="animate-pulse flex space-x-6">
              <div className="h-7 bg-gray-600 rounded w-3/4"></div>
              <div className="h-7 bg-yellow-500 rounded w-1/4"></div>
            </div>
          </div>
        </div>
      ) : (
        <ul className={classNames(styles.topicsList, 'mx-auto px-2 my-4')}>
          {topics.map((topic) => (
            <Topic key={topic.id} topic={topic} setTopic={setTopic} />
          ))}
        </ul>
      )}
    </div>
  );
};
