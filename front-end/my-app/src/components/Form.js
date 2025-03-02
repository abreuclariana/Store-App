import React, {useRef} from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
   
    display: flex;
    align-items: flex-end;
    gap: 20px;
    flex-wrap: wrap;
    background-color: #ffff;
    padding: 30px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;

`

const InputArea = styled.div`
    
    display: flex;
    flex-direction: column;


`
const Label = styled.label``

const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;

`
const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: #fff;
    height: 42px;

`

const Form = ({onEdit}) => {
    const ref = useRef()

    return(
       <FormContainer>
           <InputArea>
               <Label>Nome</Label>
               <Input nome="" type='text'/>
           </InputArea>
           <InputArea>
               <Label>Preco</Label>
               <Input preco="" type='text'/>
           </InputArea>
           <InputArea>
               <Label>Estoque</Label>
               <Input estoque="" type='text'/>
           </InputArea>
           <InputArea>
               <Label>Fone</Label>
               <Input fone="" type='text'/>
           </InputArea>
           <Button type="submit">Salvar</Button>
       </FormContainer>
    )
}

export default Form;