import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import styles from './index.module.scss';
import { TopicList } from '../components/TopicList';
import { Topic as TopicData, TopicVariables } from '../graphql/Topic';

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

export function Index() {
  const [topic, setTopic] = useState('react');
  const { data, loading } = useQuery<TopicData, TopicVariables>(SEARCH_TOPICS, {
    variables: { name: topic },
  });
  return (
    <TopicList
      loading={loading}
      topic={topic}
      topics={data?.topic?.relatedTopics ?? []}
      setTopic={setTopic}
    />
  );
}

export default Index;
