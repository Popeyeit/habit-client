import React from 'react';
import * as styled from './styled';

interface IProps {
  content: {
    title: string;
    text: string;
  };
}

const AuthTitle = ({ content }: IProps) => {
  return (
    <styled.TitleWrapper>
      <styled.Title>{content.title}</styled.Title>
      <styled.Text>{content.text}</styled.Text>
    </styled.TitleWrapper>
  );
};

export default AuthTitle;
