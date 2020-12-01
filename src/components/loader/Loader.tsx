import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const commonStyle = `margin: 'auto';
  position: 'absolute';
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;`;

const animation = (width: number) => keyframes`
    0%{
          transform: translate(-${width}px);
      }
      50%{
          transform: translate(0);
      }
      100%{
          transform: translate(${width}px);
      }
`;

interface IProC {
  size: string;
  styles: string;
}

const Container = styled.div`
  width: ${(props: IProC) =>
    props.size === 'small' ? 60 : props.size === 'large' ? 100 : 80}px;
  height: 8px;
  border-radius: 4px;
  margin: 0 auto;
  position: relative;
  background: #fff;
  overflow: hidden;
  ${(props: IProC) => props.styles}
`;

interface IProSpan {
  size: string;
  speed: number;
  color: string;
  styles: string;
}

const ItemSpan = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background: ${(props: IProSpan) => props.color || '#00adb5'};
  animation: ${(props: IProSpan) =>
      animation(
        props.size === 'small' ? 60 : props.size === 'large' ? 100 : 80,
      )}
    ${props => props.speed || 2}s linear infinite;
  ${(props: IProSpan) => props.styles}
`;

interface IProps {
  speed?: number | undefined;
  color?: string | undefined;
  size?: string | undefined;
  styles?: string | undefined;
}

const ThreeHorseLoading = ({
  speed = 2,
  color = '#43D190',
  styles = commonStyle,
  size = 'default',
}: IProps) => {
  return (
    <Container styles={styles} color={color} size={size}>
      <ItemSpan speed={speed} styles={styles} color={color} size={size} />
    </Container>
  );
};

export default ThreeHorseLoading;
