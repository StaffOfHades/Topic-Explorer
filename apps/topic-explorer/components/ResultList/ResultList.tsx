import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import { Result } from './Result';
import { TopicData, TopicVars } from './types';
import styles from './ResultList.module.scss';

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

export const ResultList = () => {
  const [topic, setTopic] = useState('react');
  const { data } = useQuery<TopicData, TopicVars>(SEARCH_TOPICS, {
    variables: { name: topic },
  });

  return (
    <div className={styles.App}>
      <h1>{topic}</h1>
      <hr />
      {data && (
        <ul className={styles.topicsList}>
          {data.topic.relatedTopics.map((topic) => (
            <Result
              className={styles.relatedTopic}
              key={topic.id}
              item={topic}
              setTopic={setTopic}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
