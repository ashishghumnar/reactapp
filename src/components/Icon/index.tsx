import React, { useState, useEffect } from 'react';

type Props = {
  size?: {
    width: number,
    height: number
  },
  src: string
};

function Icon(props: Props) {
  const { size={ width: 10, height: 15 }, src } = props;

  return (
    <img {...size} src={src} />
  );
}

export default Icon;
