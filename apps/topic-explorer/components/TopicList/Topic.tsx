import React from 'react';
import classNames from 'classnames';

import { TopicProps } from './types';
import styles from './Topic.module.scss';

export const Topic = ({
  className,
  topic: { name, stargazerCount },
  setTopic,
}: TopicProps) => {
  const onClickHandler = () => {
    setTopic(name);
  };

  const buttonClassNames = [
    'flex',
    'w-full',
    'px-4',
    'py-1',
    'border-2',
    'border-gray-300',
    'shadow',
    'rounded-lg',
    'active:bg-gray-400',
    'hover:border-gray-500',
    'focus:ring-2',
    'focus:ring-blue-400',
  ].join(' ');

  return (
    <li className={classNames(className, styles.topic, 'block my-2')}>
      <button className={buttonClassNames} onClick={onClickHandler}>
        <span className="inline-block flex-auto text-left text-lg">{name}</span>
        <span className="inline-block flex-auto text-right text-yellow-600">
          ★ {stargazerCount}
        </span>
      </button>
    </li>
  );
};
