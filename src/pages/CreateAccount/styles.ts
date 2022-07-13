import styled from 'styled-components'

export const AccountContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['yellow-500']};
  }

  p {
    font-size: 0.9rem;
    font-weight: 400;
    color: ${(props) => props.theme['gray-600']};
    font-style: italic;
  }

  img {
    width: 10rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    div {
      display: flex;
      flex-direction: column;
    }

    input {
      height: 2rem;
      border: 2px solid transparent;
      box-shadow: 2px 2px 7px ${(props) => props.theme['gray-500']};
      padding: 0.5rem;

      &:focus {
        border: 2px solid ${(props) => props.theme['yellow-500']};
      }
    }
  }

  button[type='submit'] {
    margin-top: 2rem;
    background-color: ${(props) => props.theme['yellow-500']};
    border: 2px solid transparent;
    height: 2.5rem;
    border-radius: 999px;
    font-weight: 500;

    &:hover {
      background-color: ${(props) => props.theme['yellow-600']};
    }

    &:focus {
      border: 2px solid ${(props) => props.theme['gray-800']};
    }
  }
`

export const TypeUserContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

interface RadioBoxProps {
  isActive: boolean
  activeColor: 'yellow' | 'green'
}

const colors = {
  yellow: '#F3A712',
  green: '#33cc95',
}

export const RadioBox = styled.button<RadioBoxProps>`
  width: 8.5rem;
  height: 2.5rem;

  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  border-radius: 4px;

  border: 1px solid transparent;

  background: ${(props) =>
    props.isActive ? colors[props.activeColor] : 'transparent'};
`
