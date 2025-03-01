import GlobalStyle from "./global";
import styled from 'styled-components'
import Form from './components/Form';
import Grid from './components/Grid';
import {useEffect, useState} from 'react';
import axios from 'axios';

const Container = styled.div`
   
   width: 100%;
   max-width: 1000px;
   margin-top: 20px;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 20px;

`
const Title = styled.h1``

function App() {

  const [products, setProducts] = useState([])
  const [onEdit, setOnEdit] = useState(null)

  const getProducts = async  () =>{
     try {
        
      const res = await axios.get('http://localhost:4000/')
         setProducts(res.data)
     } catch (error) {
         console.log(error)
     }
  }
  
  useEffect( () => {
    getProducts()
  }, [setProducts])

  return (
    <>
    <GlobalStyle/>
     <Container>
      <Title>Cadastro de Produtos</Title>
      <Form/>
      <Grid products={products}/>
     </Container>
     
    </>
  );
}

export default App;
