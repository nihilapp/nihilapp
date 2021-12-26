import React from 'react';
import { css } from '@emotion/react';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';

const NotPonud404 = () => {
  const NotPound404Style = css({});

  const meta = useSiteMeta({
    title: '404',
    url: '/404',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div id='notpound-page' css={NotPound404Style}>
          content
        </div>
      </AppLayout>
    </>
  );
};

export default NotPonud404;
