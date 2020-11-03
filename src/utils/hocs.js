import React from 'react';

const withLayout = (Layout, Component, options = {}) => {
  return () => (
    <Layout>
      <Component />
    </Layout>
  )
};
export default withLayout;
