import React from 'react';

const Actor = ({ name, as }) => {
  return (
    <>
      <p>
        {name} as {as}
      </p>
    </>
  );
};

export default Actor;
