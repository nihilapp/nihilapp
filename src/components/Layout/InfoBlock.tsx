import React from 'react';
import { Box, ExternalLink, P } from '@/components/Content';

export const InfoBlock = () => {
  return (
    <>
      <Box mt={20}>
        <P align='justify' mt={0}>이 사이트는 자바스크립트와 리액트를 공부하면서 연습용으로 만들어보기 시작한 것들을 바탕으로 계속해서 업데이트를 통해 개선하면서 사용하고 있는 웹 프로그램들을 간단하게 소개하는 사이트입니다. 계속해서 끊임없이 공부하는 중이라서 아직은 초라하고 보잘것 없지만 천천히 채워갈 예정입니다. 앞으로 토이 프로젝트들은 여기에 전부 소개될 예정입니다.</P>
        <P align='justify' mt={0}>문의사항이나 연락할 일이 있으실 경우에는 <ExternalLink href='mailto:nihil_ncunia@naver.com' label='이메일' />이나 <ExternalLink href='https://www.instagram.com/nihil_illust/' label='인스타그램' />으로 연락을 주시면 되겠습니다.</P>
      </Box>
    </>
  );
};
