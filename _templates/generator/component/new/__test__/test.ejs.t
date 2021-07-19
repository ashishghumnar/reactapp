---
to: <%= rootComponentDir %>/<%= h.changeCase.pascal(name) %>/__test__/index.test.tsx
---
import React from 'react';
import { shallow } from 'enzyme';

import <%= h.changeCase.pascal(name) %> from '../<%= h.changeCase.pascal(name) %>';

describe('(Component) <%= h.changeCase.pascal(name) %>', () => {
  const defaultProps = {
    sampleProps: 'Sample',
  };
  test('should pass basic test', () => {
    
  });
});
