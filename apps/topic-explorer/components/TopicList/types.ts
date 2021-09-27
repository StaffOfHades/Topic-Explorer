export type {
  Topic_topic_relatedTopics as Topic,
  Topic as TopicData,
  TopicVariables,
} from './graphql/Topic';
import { Topic_topic_relatedTopics as Topic } from './graphql/Topic';

export type TopicListProps = {};

export interface TopicProps {
  className?: string;
  topic: Topic;
  setTopic(topic: string): void;
}
