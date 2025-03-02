import React from 'react';
import styled from 'styled-components';
import {FaEdit, FaTrash} from "react-icons/fa";


const Thead = styled.thead``

const Tbody = styled.tbody``

const Table = styled.table`

     width: 100%;
     background-color: #fff;
     padding: 20px;
     box-sizing: 0px 0px 5px #ccc;
     border-radius: 5px;
     max-width: 800px;
     margin: 20px auto;
     word-break: break-all;

`

const  Tr = styled.tr` `
const  Th = styled.th`
  
    text-align: start;
    border-border: inset;
    padding-bottom: 5px;


`
const Td = styled.td`
    text-align: start;
    padding: 15px;


`

const Grid = ({products}) => {
    console.log(products)
    return(
    
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Preco</Th>
                    <Th>Estoque</Th>
                    <Th>Fone</Th>
                </Tr>

            </Thead>   
            <Tbody>
                <Tr>
                  { products.map( (item, i ) => (
                    
                    <Tr key={i}>
                       <Td width="30%">{item.nome}</Td>
                       <Td width="30%">{item.preco}</Td>
                       <Td width="30%">{item.estoque}</Td>
                       <Td width="30%">{item.fone}</Td>
                       <Td>
                          <FaEdit />
                       </Td>

                       <Td>
                          <FaTrash/>
                       </Td>
                    </Tr>
                  ))}
                </Tr>
                
            </Tbody>
        </Table>
    )
}

export default Grid;