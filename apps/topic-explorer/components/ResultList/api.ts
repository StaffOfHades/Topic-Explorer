const SEARCH_PATH = 'https://api.github.com/graphql';

import { SearchOptions } from './types';

export const search = ({ topic }: SearchOptions) => {
  return fetch(`${SEARCH_PATH}`, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`,
    },
    body: JSON.stringify({
      query: `query {
        topic(name: "${topic}") {
          relatedTopics(first: 10) {
            id
            name
            stargazerCount
          }
        }
      }`,
    }),
  })
    .then((r) => r.json())
    .then((json) => {
      return (
        (json &&
          json.data &&
          json.data.topic &&
          json.data.topic.relatedTopics) ||
        []
      );
    });
};
