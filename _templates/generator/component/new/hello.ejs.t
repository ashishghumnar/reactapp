---
to: <%= rootComponentDir %>/<%= h.changeCase.pascal(name) %>/index.tsx
---
import React, { useState, useEffect } from 'react';

// XXX: Props declaration goes here
type Props = {
  sampleProps: string;
};

function <%= h.changeCase.pascal(name) %>(props: Props) {
  // XXX: replace/remove examples with useState that you want to implement.
  const [state, setState] = useState('Hello World!');

  // XXX: replace/remove examples with useEffect that you want to implement.
  useEffect(() => {
    setState('Hello Japan!');
    return () => {};
  }, [state]);

  return (
    <div>{state}</div>
  );
}

export default <%= h.changeCase.pascal(name) %>;
