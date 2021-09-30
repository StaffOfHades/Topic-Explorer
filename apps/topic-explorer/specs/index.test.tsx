import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { act, create } from 'react-test-renderer';
import { render, screen, waitFor } from '@testing-library/react';

import { Index, FIND_TOPIC_QUERY } from '../pages/index';
import { Topic as TopicData, TopicVariables } from '../graphql/Topic';

describe('/', () => {
  const topicData: TopicData = {
    topic: {
      __typename: 'Topic',
      relatedTopics: [
        {
          __typename: 'Topic',
          id: '1',
          name: 'topicName1',
          stargazerCount: 10,
        },
        {
          __typename: 'Topic',
          id: '2',
          name: 'topicName2',
          stargazerCount: 20,
        },
      ],
    },
  };
  const findTopicVariable: TopicVariables = { name: 'topicName' };
  const findTopicMock = {
    request: {
      query: FIND_TOPIC_QUERY,
      variables: findTopicVariable,
    },
    result: {
      data: topicData,
    },
  };

  it('renders index page unchanged', async () => {
    const component = create(
      <MockedProvider addTypename={false} mocks={[findTopicMock]}>
        <Index initialTopic={findTopicVariable.name} />
      </MockedProvider>
    );
    await act(
      async () =>
        await waitFor(() =>
          expect(component.root.findAllByType('button')).toHaveLength(
            topicData.topic!.relatedTopics.length
          )
        )
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
