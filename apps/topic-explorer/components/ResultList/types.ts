export interface Topic {
  id: number;
  name: string;
  stargazerCount: number;
}

export interface TopicData {
  topic: {
    relatedTopics: Topic[];
  };
}

export interface TopicVars {
  name: string;
}

export interface ResultProps {
  className?: string;
  item: Topic;
  setTopic(topic: string): void;
}
