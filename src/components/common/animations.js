import { keyframes } from 'styled-components';

export const animated_text = keyframes`
  0% {
    color: #00CAB1;
  }
  50% {
    color: #7B00FF;
  }
  100% {
    color: #00CAB1;
  }
`;

export const animated_bg = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;