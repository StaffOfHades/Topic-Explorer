export interface Item {
  id: number;
  name: string;
  stargazerCount: number;
}

export interface SearchOptions {
  topic: string;
}

export interface ResultProps {
  className?: string;
  item: Item;
  setTopic(topic: string): void;
}
