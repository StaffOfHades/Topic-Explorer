import React from 'react';
import { render, screen } from '@testing-library/react';

import { TopicList } from '../TopicList';
import topicData from '../../../fixtures/Topic.json';

describe('<TopicList />', () => {
  const {
    data: {
      topic: { relatedTopics: topics },
    },
  } = topicData;
  const props = {
    loading: false,
    topic: 'topicName',
    topics,
    setTopic: jest.fn(),
  };

  it('should render successfully when loading', () => {
    render(<TopicList {...props} loading={true} />);
    props.topics.forEach(({ name }) =>
      expect(screen.queryByText(name)).not.toBeInTheDocument()
    );
  });
  it('should render successfully when finished loading', () => {
    render(<TopicList {...props} />);
    props.topics.forEach(({ name }) =>
      expect(screen.queryByText(name)).toBeInTheDocument()
    );
  });
});
