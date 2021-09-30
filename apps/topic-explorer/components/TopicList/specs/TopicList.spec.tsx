import React from 'react';
import { render, screen } from '@testing-library/react';

import { TopicList } from '../TopicList';

describe('<TopicList />', () => {
  const props = {
    loading: false,
    topic: 'topicName',
    topics: [
      {
        id: '1',
        name: 'topicName1',
        stargazerCount: 10,
      },
      {
        id: '2',
        name: 'topicName2',
        stargazerCount: 20,
      },
    ],
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
