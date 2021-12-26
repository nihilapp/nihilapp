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
