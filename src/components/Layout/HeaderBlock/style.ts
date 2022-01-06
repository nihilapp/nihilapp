import { css } from '@emotion/react';
import { sizeData } from '@/data';

export const HeaderBlockStyle = css`
  background-color: #333333;
  color: #ffffff;
  text-align: center;
  padding: 10px;
  border-radius: 10px;

  & > h1 {
    font-weight: 900;
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & > img {
      display: block;
      margin-right: 5px;
    }
  }

  & > p {
    font-weight: 500;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    line-height: 1;

    & > svg {
      margin-right: 5px;
    }

    & > .app-version {
      margin-right: 5px;
      line-height: 1;
    }

    & > .app-github {
      color: #dddddd;
      background-color: #444444;
      padding: 5px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-radius: 5px;

      & > svg {
        margin-right: 5px;
      }

      &:hover {
        background-color: #ffffff;
        color: #333333;
      }
    }

    &:nth-of-type(2) {
      margin-top: 5px;
      font-weight: 900;
    }
  }

  @media all and (min-width: 1024px) {
    h1 {
      font-size: ${sizeData[6]};

      & > img {
        width: 38px;
      }
    }

    p {
      font-size: ${sizeData[3]};
    }
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    h1 {
      font-size: ${sizeData[5]};

      & > img {
        width: 32px;
      }
    }

    p {
      font-size: ${sizeData[2]};
    }
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    h1 {
      font-size: ${sizeData[5]};

      & > img {
        width: 32px;
      }
    }

    p {
      font-size: ${sizeData[2]};
    }
  }

  @media all and (max-width: 479px) {
    h1 {
      font-size: ${sizeData[4]};

      & > img {
        width: 25px;
      }
    }

    p {
      font-size: ${sizeData[1]};
    }
  }
`;
