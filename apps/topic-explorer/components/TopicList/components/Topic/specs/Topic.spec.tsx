import React from 'react';
import { render, screen } from '@testing-library/react';
import { Topic as topicData } from '@allianceit/fixtures';
import userEvent from '@testing-library/user-event';

import { Topic } from '../Topic';

describe('<Topic />', () => {
  const {
    data: {
      topic: {
        relatedTopics: [topic],
      },
    },
  } = topicData;
  const props = {
    topic,
    setTopic: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render successfully', () => {
    render(<Topic {...props} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(props.topic.name)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`${props.topic.stargazerCount}`))
    ).toBeInTheDocument();
  });
  it('should execute passed function successfully', () => {
    render(<Topic {...props} />);
    userEvent.click(screen.getByRole('button'));
    expect(props.setTopic).toHaveBeenCalledWith(props.topic.name);
  });
});
