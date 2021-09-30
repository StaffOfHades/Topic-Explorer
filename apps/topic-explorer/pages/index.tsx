import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import styles from './index.module.scss';
import { TopicList } from '../components/TopicList';
import { Topic as TopicData, TopicVariables } from '../graphql/Topic';

export const FIND_TOPIC_QUERY = gql`
  query FindTopic($name: String!) {
    topic(name: $name) {
      relatedTopics(first: 10) {
        id
        name
        stargazerCount
      }
    }
  }
`;

export interface IndexProps {
  initialTopic?: string;
}

export function Index({ initialTopic = 'react' }: IndexProps) {
  const [topic, setTopic] = useState(initialTopic);
  const { data, loading } = useQuery<TopicData, TopicVariables>(
    FIND_TOPIC_QUERY,
    {
      variables: { name: topic },
    }
  );
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
