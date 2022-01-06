import React from 'react';
import { css } from '@emotion/react';
import { v4 as uuid } from 'uuid';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';
import { appData } from '@/data/app.data';
import { ProjectItem } from '@/components/Content';

const IndexPage = () => {
  const IndexPageStyle = css`
    margin-top: 50px;
  `;

  const meta = useSiteMeta({
    title: '홈',
    url: '/',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div id='index-page' css={IndexPageStyle}>
          {appData.map((item) => (
            <ProjectItem
              key={uuid()}
              title={item.title}
              url={item.url}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </AppLayout>
    </>
  );
};

export default IndexPage;
