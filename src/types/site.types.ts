import React from 'react';

export interface ISiteMeta {
  title: string;
  url: string;
  description?: string;
  keywords?: string;
  type?: string;
}

export interface ISiteMetaProps {
  children?: React.ReactNode;
  meta: ISiteMeta;
}

export interface IHaveChildren {
  children: React.ReactNode;
}

export interface IAppData {
  title: string;
  url: string;
  image: string;
  description: string;
}
