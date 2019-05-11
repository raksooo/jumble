import React from 'react';
import Authentication from './Authentication';

const Header = ({ space, setSpace }) => {
  return (
    <Authentication space={space} setSpace={setSpace} />
  );
};

export default React.memo(Header);

