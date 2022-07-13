import styled from 'styled-components'

export const HeaderContainer = styled.div`
  color: ${(props) => props.theme['gray-100']};

  nav {
    list-style: none;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme['gray-600']};
  }

  .nav-link {
    text-decoration: none;
    flex: 1;
    text-align: center;
    padding: 0.5rem 0;

    font-weight: 500;
    color: ${(props) => props.theme['gray-700']};

    &.active {
      background-color: ${(props) => props.theme.white};
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
    }

    &:not(.active) {
      color: ${(props) => props.theme.white};
    }
  }
`
