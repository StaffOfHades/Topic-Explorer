import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import { Topic } from './Topic';
import { TopicData, TopicVariables } from './types';
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

export const TopicList = () => {
  const [topic, setTopic] = useState('react');
  const { data } = useQuery<TopicData, TopicVariables>(SEARCH_TOPICS, {
    variables: { name: topic },
  });

  return (
    <div className={styles.App}>
      <h1>{topic}</h1>
      <hr />
      {data && data.topic && (
        <ul className={styles.topicsList}>
          {data.topic.relatedTopics.map((topic) => (
            <Topic
              className={styles.relatedTopic}
              key={topic.id}
              topic={topic}
              setTopic={setTopic}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
