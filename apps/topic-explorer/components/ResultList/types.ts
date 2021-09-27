export type {
  Topic_topic_relatedTopics as Topic,
  Topic as TopicData,
  TopicVariables,
} from './graphql/Topic';
import { Topic_topic_relatedTopics as Topic } from './graphql/Topic';

export interface ResultProps {
  className?: string;
  item: Topic;
  setTopic(topic: string): void;
}
