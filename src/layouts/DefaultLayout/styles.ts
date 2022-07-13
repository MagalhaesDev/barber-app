import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 27rem;
  height: calc(100vh - 7rem);
  margin: 3rem auto;

  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme['gray-800']};
  box-shadow: 3px 4px 30px ${(props) => props.theme['gray-600']};

  display: flex;
  flex-direction: column;
`

export const Background = styled.img`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100vh;
  filter: blur(3px);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`
