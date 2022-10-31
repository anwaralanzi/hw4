import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Nav from './components/Nav';
import Card from './components/Card';
import Footer from './components/Footer';
import Login from './components/login';

function App() {
  return (
    <ChakraProvider>
<Login></Login> 


    <div>
  <Nav></Nav>
<div className='parent'>
  <Card Name = 'java script ' Description = "تعلّم أساسيات JavaScript وبرمجة الكمبيوتر من البداية!" Expiry = "10" Im = "data:image/png;base64,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"></Card>
  <Card Name = 'java' Im = "data:image/png;base64,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"></Card>
  <Card Name = 'Python' Im = "data:image/jpeg;base64,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" ></Card>
  <Card Name = 'SQL' Im = "data:image/png;base64,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"></Card>
  <Card Name = 'Apple Devlopment' Im = "data:image/jpeg;base64,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"></Card>

<Card Name = 'Android Apps' Im = "data:image/png;base64,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"></Card>
 </div>
 <Footer></Footer>
</div>

  </ChakraProvider>

  );
}

export default App;
