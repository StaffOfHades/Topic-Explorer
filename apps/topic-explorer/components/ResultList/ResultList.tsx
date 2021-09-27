import React, { useState, useEffect } from 'react';
import { Result } from './Result';
import { search } from './api';
import styles from './ResultList.module.scss';

export const ResultList = () => {
  const [results, setResults] = useState([]);
  const [topic, setTopic] = useState('react');

  useEffect(() => {
    search(topic).then((data) => {
      setResults(data);
    });
  }, [topic]);

  return (
    <div className={styles.App}>
      <h1>{topic}</h1>
      <hr />
      <ul className={styles.topicsList}>
        {results.map((r) => (
          <Result
            className={styles.relatedTopic}
            key={r.id}
            item={r}
            setTopic={setTopic}
          />
        ))}
      </ul>
    </div>
  );
};
