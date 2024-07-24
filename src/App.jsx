import styled from 'styled-components'
import './App.css'
import GlobalStyle from './styles/GlobalStyles'
import Button from './ui/Button'
import Input from './ui/Input'
import Heading from './ui/Heading'
import Row from './ui/Row'

const StyledApp=styled.div`
  background-color: azure;
  padding:20px;
`

function App() {

  return (
    <>
    <GlobalStyle/>
    <StyledApp>
      <Row>
        <Row type='horizontal'>
          <Heading as='h1'>Wild Oasis</Heading>
          <div>
            <Heading as='h2'>Check In and Out</Heading>
            <Button variation='primary' size='medium' onClick={()=>alert('Wankenstein!')}>Check In </Button>
            <Button variation='secondary' size='medium' onClick={()=>alert('Check out!')}>Check Out</Button>
          </div>
        </Row>
        <Row>
          <Heading as='h3'>Wild Form</Heading>
          <form>
            <Input type='text' placeholder='Write something...'/>
            <Input type='number' placeholder='Enter number of guests'/>
          </form>
        </Row>
      </Row>
    </StyledApp>
    </>
  )
}

export default App
