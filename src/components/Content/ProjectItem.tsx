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
  const ProjectItemStyle = css({
    margin: `${mt}px 0 ${mb}px 0`,
    padding: '10px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 0 10px -4px #333333',

    '& > div': {
      marginBottom: '20px',
      padding: '20px 10px',
      backgroundColor: '#eeeeee',
      borderRadius: '10px',

      '& > img': {
        display: 'block',
        margin: '0 auto',
        borderRadius: '10px',
      },
    },

    '& > figcaption': {
      backgroundColor: '#333333',
      color: '#ffffff',
      padding: '20px 10px',
      borderRadius: '10px',
      lineHeight: '1',
      textAlign: 'center',
      letterSpacing: '-1px',
      marginBottom: '10px',
      fontWeight: '500',
    },

    '& > p': {
      textAlign: 'justify',
      lineHeight: '1.8',
      color: '#333333',
      fontWeight: '500',
      letterSpacing: '-1px',
      padding: '10px',
      borderRadius: '10px',
      backgroundColor: '#eeeeee',
      marginBottom: '20px',
    },

    '& > a': {
      display: 'flex',
      flexDirection: 'row',
      lineHeight: '1',
      letterSpacing: '-1px',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#3178f230',
      color: '#3178f2',
      padding: '20px 10px',
      borderRadius: '10px',
      fontWeight: '500',

      '& > svg': {
        marginLeft: '5px',
      },

      '&:hover': {
        backgroundColor: '#3178f2',
        color: '#ffffff',
      },
    },

    '&:nth-of-type(1)': {
      marginTop: '0',
    },

    '&:nth-last-of-type(1)': {
      marginBottom: '0',
    },

    '@media all and (min-width: 1024px)': {
      '& img': {
        width: '900px',
      },
      '& > figcaption': {
        fontSize: `${sizeData[6]}`,
      },
      '& > p, & > a': {
        fontSize: `${sizeData[3]}`,
      },
    },
    '@media all and (min-width: 768px) and (max-width: 1023px)': {
      '& img': {
        maxWidth: '900px',
      },
      '& > figcaption': {
        fontSize: `${sizeData[5]}`,
      },
      '& > p, & > a': {
        fontSize: `${sizeData[3]}`,
      },
    },
    '@media all and (min-width: 480px) and (max-width: 767px)': {
      '& img': {
        width: '100%',
      },
      '& > figcaption': {
        fontSize: `${sizeData[5]}`,
      },
      '& > p, & > a': {
        fontSize: `${sizeData[2]}`,
      },
    },
    '@media all and (max-width: 479px)': {
      '& img': {
        width: '100%',
      },
      '& > figcaption': {
        fontSize: `${sizeData[4]}`,
      },
      '& > p, & > a': {
        fontSize: `${sizeData[2]}`,
      },
    },
  });

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
