import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';
import { sizeData } from '@/data';

const NotPonud404 = () => {
  const NotPound404Style = css({
    marginTop: '50px',

    '& > h2': {
      padding: '20px 10px',
      color: '#ffffff',
      backgroundColor: '#333333',
      borderRadius: '10px',
      textAlign: 'center',
      lineHeight: '1',
      marginBottom: '40px',
      fontWeight: '900',
      letterSpacing: '-1px',
    },

    '& > p': {
      textAlign: 'center',
      color: '#333333',
      fontWeight: '500',
      letterSpacing: '-1px',

      '& > a': {
        display: 'inline-block',
        marginTop: '20px',
        padding: '10px',
        lineHeight: '1',
        borderRadius: '10px',
        backgroundColor: '#33333330',
        color: '#555555',

        '&:hover': {
          color: '#ffffff',
          backgroundColor: '#333333',
        },
      },
    },

    '@media all and (min-width: 1024px)': {
      '& > h2': {
        fontSize: `${sizeData[6]}`,
      },
      '& > p': {
        fontSize: `${sizeData[3]}`,
      },
    },
    '@media all and (min-width: 768px) and (max-width: 1023px)': {
      '& > h2': {
        fontSize: `${sizeData[5]}`,
      },
      '& > p': {
        fontSize: `${sizeData[3]}`,
      },
    },
    '@media all and (min-width: 480px) and (max-width: 767px)': {
      '& > h2': {
        fontSize: `${sizeData[5]}`,
      },
      '& > p': {
        fontSize: `${sizeData[2]}`,
      },
    },
    '@media all and (max-width: 479px)': {
      '& > h2': {
        fontSize: `${sizeData[4]}`,
      },
      '& > p': {
        fontSize: `${sizeData[2]}`,
      },
    },
  });

  const meta = useSiteMeta({
    title: '404',
    url: '/404',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div id='notpound-page' css={NotPound404Style}>
          <h2>404 에러</h2>
          <p>페이지를 찾을 수 없습니다.</p>
          <p>
            <Link href='/' passHref>
              <a>홈으로</a>
            </Link>
          </p>
        </div>
      </AppLayout>
    </>
  );
};

export default NotPonud404;
