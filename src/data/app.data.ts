import { IAppData } from '@/types';
import { siteData } from './config.data';

export const appData: IAppData[] = [
  {
    title: 'DiceRoll',
    url: 'https://nihilapp.github.io/dice/',
    image: `${siteData.siteUrl}/images/projects/다이스롤.png`,
    description: 'DiceRoll은 TRPG를 하다가 만들게 된 웹 프로그램입니다. 주사위를 간편하게 굴릴 수 있습니다. 미리 준비된 주사위를 굴릴 수도 있고 커스텀 주사위를 굴릴 수도 있습니다. TRPG 뿐만 아니라 다양한 용도로 사용할 수도 있습니다.',
  },
  {
    title: '랜덤 키워드 2',
    url: 'https://nihilapp.github.io/keyword/',
    image: `${siteData.siteUrl}/images/projects/랜덤 키워드 2.png`,
    description: '랜덤 키워드는 창작자분들을 대상으로 만들어졌습니다. 그림쟁이 분들이나 글쟁이 분들이 보다 편하고 쉽게 영감을 찾을 수 있도록 도와주는 사이트입니다. 본래는 제가 사용하려고 시작한 프로젝트지만 저만 사용하기에는 아까워 이렇게 공개하고 있습니다. 지금까지 여러번 개편해서 사용하고 있습니다.',
  },
];
