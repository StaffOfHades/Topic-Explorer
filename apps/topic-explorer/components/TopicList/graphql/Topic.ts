/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Topic
// ====================================================

export interface Topic_topic_relatedTopics {
  __typename: "Topic";
  id: string;
  /**
   * The topic's name.
   */
  name: string;
  /**
   * Returns a count of how many stargazers there are on this object
   */
  stargazerCount: number;
}

export interface Topic_topic {
  __typename: "Topic";
  /**
   * A list of related topics, including aliases of this topic, sorted with the most relevant
   * first. Returns up to 10 Topics.
   */
  relatedTopics: Topic_topic_relatedTopics[];
}

export interface Topic {
  /**
   * Look up a topic by name.
   */
  topic: Topic_topic | null;
}

export interface TopicVariables {
  name: string;
}
