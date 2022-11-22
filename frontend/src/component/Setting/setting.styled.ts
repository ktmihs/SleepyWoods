import { css } from '@emotion/react';
import theme from '../../styles/theme';
import { flexCenter } from '../../styles/mixin.styled';
import characterAsset from '../../assets/character/waiting/wait.png';
import { hairPos } from './hair';

export const header = css`
  font-weight: 700;
  font-size: 36px;
`;

export const characterWrapper = css`
  ${flexCenter}

  width: 150px;
  height: 200px;
  overflow: hidden;
`;

export const character = (hairName: string) => css`
  position: relative;
  width: 96px;
  height: 64px;
  background-image: url(${characterAsset});
  background-repeat: no-repeat;
  background-position-y: 0;
  animation: wait 0.6s step-start infinite;
  transform: scale(6);

  ::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 96px;
    height: 64px;
    background-image: url(${characterAsset});
    background-repeat: no-repeat;
    background-position-y: -${hairPos[hairName]}px;
    animation: wait 0.6s step-start infinite;
  }

  @keyframes wait {
    0% {
      background-position-x: 0;
    }
    12.5% {
      background-position-x: -96px;
    }
    25% {
      background-position-x: -192px;
    }
    37.5% {
      background-position-x: -288px;
    }
    50% {
      background-position-x: -384px;
    }
    62.5% {
      background-position-x: -480px;
    }
    75% {
      background-position-x: -576px;
    }
    97.5% {
      background-position-x: -672px;
    }
    100% {
      background-position-x: -768px;
    }
  }
`;

export const nicknameContainer = css`
  ${flexCenter}
  flex-flow: column;

  width: 100%;
`;

export const nickname = css`
  width: 80%;
  min-height: 50px;
  border: 1px solid ${theme.gray};
  border-radius: 10px;
  padding: 10px;
`;

export const CarouselContainer = css`
  ${flexCenter}

  flex-flow: row;
  gap: 50px;
`;
