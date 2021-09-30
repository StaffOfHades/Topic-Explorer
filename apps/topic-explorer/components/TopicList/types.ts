import { Topic_topic_relatedTopics as Topic } from '../../graphql/Topic';

export interface TopicListProps {
  loading: boolean;
  topic: string;
  topics: Omit<Topic, '__typename'>[];
  setTopic(topic: string): void;
}
