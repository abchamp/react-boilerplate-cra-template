import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { PageWrapper } from 'app/components/PageWrapper';

export function UsersPage() {
  return (
    <>
      <Helmet>
        <title>User Page</title>
        <meta
          name="description"
          content=""
        />
      </Helmet>
      <PageWrapper>
        <h1> User Page</h1>
      </PageWrapper>
    </>
  );
}
