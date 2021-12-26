import { IConfig } from '@/types';

export const siteData: IConfig = {
  siteTitle: '니힐앱스',
  siteDescription: '니힐이 자바스크립트와 리액트를 연습하면서 만든 크고 작은 토이 프로젝트를 소개하는 사이트.',
  siteKeywords: '프로그래밍, 코딩, 개발, 웹 개발, 웹 프로그래밍',
  siteType: 'website',
  siteUrl: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://nihilapp.github.io',
  siteImage: '/images/blog-image.png',
  siteVersion: 'v1.0.0',
};
