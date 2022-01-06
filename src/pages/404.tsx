import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';
import { sizeData } from '@/data';

const NotPonud404 = () => {
  const NotPound404Style = css`
    margin-top: 50px;

    & > h2 {
      padding: 20px 10px;
      color: #ffffff;
      background-color: #333333;
      border-radius: 10px;
      text-align: center;
      line-height: 1;
      margin-bottom: 40px;
      font-weight: 900;
      letter-spacing: -1px;
    }

    & > p {
      text-align: center;
      color: #333333;
      font-weight: 500;
      letter-spacing: -1px;

      & > a {
        display: inline-block;
        margin-top: 20px;
        padding: 10px;
        line-height: 1;
        border-radius: 10px;
        background-color: #33333330;
        color: #555555;

        &:hover {
          color: #ffffff;
          background-color: #333333;
        }
      }
    }

    @media all and (min-width: 1024px) {
      & > h2 {
        font-size: ${sizeData[6]};
      }

      & > p {
        font-size: ${sizeData[3]};
      }
    }

    @media all and (min-width: 768px) and (max-width: 1023px) {
      & > h2 {
        font-size: ${sizeData[5]};
      }

      & > p {
        font-size: ${sizeData[3]};
      }
    }

    @media all and (min-width: 480px) and (max-width: 767px) {
      & > h2 {
        font-size: ${sizeData[5]};
      }

      & > p {
        font-size: ${sizeData[2]};
      }
    }

    @media all and (max-width: 479px) {
      & > h2 {
        font-size: ${sizeData[4]};
      }

      & > p {
        font-size: ${sizeData[2]};
      }
    }
  `;

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
