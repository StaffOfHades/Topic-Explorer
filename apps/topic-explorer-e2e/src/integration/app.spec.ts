interface TopicData {
  data: {
    topic: {
      relatedTopics: Array<{ name: string; stargazerCount: number }>;
    };
  };
}

describe('topic-explorer', () => {
  describe('/', () => {
    it('should get data from server and load into view', () => {
      cy.intercept('POST', 'https://api.github.com/graphql', {
        fixture: 'Topic.json',
      }).as('findTopic');
      cy.visit('/');

      cy.get('.text-3xl').should('contain', 'react');

      cy.wait('@findTopic');

      cy.fixture('Topic.json').as('topicData');
      cy.get('@topicData').then((topicData: unknown) => {
        const {
          data: {
            topic: { relatedTopics },
          },
        } = topicData as TopicData;
        relatedTopics.forEach(({ name, stargazerCount }, index) => {
          cy.get(`:nth-child(${index + 1}) > .flex > .text-left`).should(
            'contain',
            name
          );
          cy.get(`:nth-child(${index + 1}) > .flex > .text-right`).should(
            'contain',
            stargazerCount
          );
        });
      });
    });
  });
});
