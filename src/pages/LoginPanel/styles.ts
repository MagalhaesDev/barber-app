import styled from 'styled-components'

export const LoginContainer = styled.main`
  padding: 1rem 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => props.theme['yellow-500']};

    span {
      color: ${(props) => props.theme['gray-800']};
      font-weight: 400;

      &:last-child {
        font-weight: 500;
        color: ${(props) => props.theme['yellow-500']};
      }
    }

    small {
      font-size: 0.75rem;
      font-weight: 400;
      color: ${(props) => props.theme['gray-500']};
      font-style: italic;
      margin-top: -0.5rem;
    }
  }

  a {
    color: ${(props) => props.theme['gray-800']};
  }
`

export const LoginForm = styled.form`
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
  gap: 0.5rem;
  width: 20rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    &:last-of-type {
      margin-bottom: 2rem;
    }
  }

  input {
    border: 0;
    height: 2.25rem;
    box-shadow: 2px 2px 7px ${(props) => props.theme['gray-500']};
    padding: 0.5rem;

    &:focus {
      border: 2px solid ${(props) => props.theme['yellow-500']};
    }
  }

  button {
    border: 2px solid transparent;
    padding: 0.5rem;
    border-radius: 999px;
    font-weight: 500;
    background-color: ${(props) => props.theme['yellow-500']};

    transition: background 0.25s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme['yellow-600']};
    }

    &:focus {
      border: 2px solid ${(props) => props.theme['gray-800']};
    }
  }
`
