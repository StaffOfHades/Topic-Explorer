import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { act, create } from 'react-test-renderer';
import { render, screen, waitFor } from '@testing-library/react';

import { Index, FIND_TOPIC_QUERY } from '../pages/index';
import { TopicVariables } from '../graphql/Topic';
import topicData from '../fixtures/Topic.json';

describe('/', () => {
  const findTopicVariable: TopicVariables = { name: 'topicName' };
  const findTopicMock = {
    request: {
      query: FIND_TOPIC_QUERY,
      variables: findTopicVariable,
    },
    result: topicData,
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
            topicData.data.topic.relatedTopics.length
          )
        )
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
