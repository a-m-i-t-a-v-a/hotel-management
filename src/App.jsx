import styled from 'styled-components'
import './App.css'
import GlobalStyle from './styles/GlobalStyles'

const H1=styled.h1`
  font-size:30px;
  font-weight:600;
  background-color: black;
  color:gold;
`

const Button=styled.button`
  font-size:1.4rem;
  padding:1.2rem 1.6rem;
  margin: 20px;
  font-weight: 500;
  border:none;
  border-radius:var(--border-radius-sm);
  background-color: var(--color-brand-600);
  cursor: pointer;
  box-shadow:var(--shadow-sm);
  color:var(--color-brand-50);
`

const Input=styled.input`
  border:1px solid var(--color-grey-300);
  background-color: var(--color-grey-700);
  border-radius:var(--border-radius-lg);
  padding:0.8rem 1.2rem;
  box-shadow:var(--shadow-lg)
`

const StyledApp=styled.div`
  background-color: azure;
  padding:20px;
`

function App() {

  return (
    <>
    <GlobalStyle/>
    <StyledApp>
      <H1>Wild Oasis</H1>
      <Input type='text' placeholder='Write something...'/>
      <Button onClick={()=>alert('Wankenstein!')}>Check In </Button>
      <Button onClick={()=>alert('Check out!')}>Check Out</Button>
    </StyledApp>
    </>
  )
}

export default App
