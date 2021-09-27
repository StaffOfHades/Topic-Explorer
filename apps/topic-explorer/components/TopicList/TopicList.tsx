import React, { useState } from 'react';
import classNames from 'classnames';
import { useQuery, gql } from '@apollo/client';

import { Topic } from './Topic';
import { TopicData, TopicListProps, TopicVariables } from './types';
import styles from './TopicList.module.scss';

const SEARCH_TOPICS = gql`
  query Topic($name: String!) {
    topic(name: $name) {
      relatedTopics(first: 10) {
        id
        name
        stargazerCount
      }
    }
  }
`;

export const TopicList = ({}: TopicListProps) => {
  const [topic, setTopic] = useState('react');
  const { data } = useQuery<TopicData, TopicVariables>(SEARCH_TOPICS, {
    variables: { name: topic },
  });

  return (
    <div className="container mx-auto text-center">
      <h1 className="text-3xl font-medium px-2 py-4">{topic}</h1>
      <hr />
      {data && data.topic && (
        <ul className={classNames(styles.topicsList, 'mx-auto px-2 my-4')}>
          {data.topic.relatedTopics.map((topic) => (
            <Topic key={topic.id} topic={topic} setTopic={setTopic} />
          ))}
        </ul>
      )}
    </div>
  );
};
