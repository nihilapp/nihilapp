import React from 'react';
import { css } from '@emotion/react';
import { FaLink } from 'react-icons/fa';
import { sizeData } from '@/data';

interface IProjectItem {
  mt?: number;
  mb?: number;
  title: string;
  url: string;
  image: string;
  description: string;
}

export const ProjectItem = ({
  mt = 50, mb = 50, url, title, image, description,
}: IProjectItem) => {
  const ProjectItemStyle = css`
    margin: ${mt}px 0 ${mb}px 0;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 10px -4px #333333;

    & > div {
      margin-bottom: 20px;
      padding: 20px 10px;
      background-color: #eeeeee;
      border-radius: 10px;

      & > img {
        display: block;
        margin: 0 auto;
        border-radius: 10px;
      }
    }

    & > figcaption {
      background-color: #333333;
      color: #ffffff;
      padding: 20px 10px;
      border-radius: 10px;
      line-height: 1;
      text-align: center;
      letter-spacing: -1px;
      margin-bottom: 10px;
      font-weight: 500;
    }

    & > p {
      text-align: justify;
      line-height: 1.8;
      color: #333333;
      font-weight: 500;
      letter-spacing: -1px;
      padding: 10px;
      border-radius: 10px;
      background-color: #eeeeee;
      margin-bottom: 20px;
    }

    & > a {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      line-height: 1;
      letter-spacing: -1px;
      background-color: #3178f230;
      color: #3178f2;
      padding: 20px 10px;
      border-radius: 10px;
      font-weight: 500;

      & > svg {
        margin-left: 5px;
      }

      &:hover {
        background-color: #3178f2;
        color: #ffffff;
      }
    }

    &:nth-of-type(1) {
      margin-top: 0;
    }

    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }

    @media all and (min-width: 1024px) {
      & img {
        width: 900px;
      }

      & > figcaption {
        font-size: ${sizeData[6]};
      }

      & > p,
      & > a {
        font-size: ${sizeData[3]};
      }
    }

    @media all and (min-width: 768px) and (max-width: 1023px) {
      & img {
        max-width: 900px;
      }

      & > figcaption {
        font-size: ${sizeData[5]};
      }

      & > p,
      & > a {
        font-size: ${sizeData[3]};
      }
    }

    @media all and (min-width: 480px) and (max-width: 767px) {
      & img {
        width: 100%;
      }

      & > figcaption {
        font-size: ${sizeData[5]};
      }

      & > p,
      & > a {
        font-size: ${sizeData[2]};
      }
    }

    @media all and (max-width: 479px) {
      & img {
        width: 100%;
      }

      & > figcaption {
        font-size: ${sizeData[4]};
      }

      & > p,
      & > a {
        font-size: ${sizeData[2]};
      }
    }
  `;

  return (
    <>
      <figure css={ProjectItemStyle}>
        <div>
          <img src={image} alt={title} />
        </div>
        <figcaption>{title}</figcaption>
        <p>{description}</p>
        <a href={url} target='_blank' rel='noopener noreferrer'>바로가기<FaLink /></a>
      </figure>
    </>
  );
};
