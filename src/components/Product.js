import styled from 'styled-components';
import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';


const updateStockMutation = gql`
  mutation updateInStock($id: ID!, $inStock: Int!) {
    updateProduct(where: {id: $id}, data: {inStock: $inStock}) {
      model
    }
  }
`

const updateDeliveryMutation = gql`
  mutation updateInDelivery($id: ID!, $inDelivery: Int!) {
    updateProduct(where: {id: $id}, data: {inDelivery: $inDelivery}) {
      model
    }
  }
`

const updateDeliveryToStockMutation = gql`
  mutation updateInDelivery($id: ID!, $inStock: Int!) {
    updateProduct(where: {id: $id}, data: {inDelivery: 0, inStock: $inStock}) {
      model
    }
  }
`

const Product = ({ data, PRODUCTS_QUERY }) => {
  const [ toggleStockMutation, { mutationStockData } ] = useMutation(updateStockMutation, { refetchQueries: [ PRODUCTS_QUERY ]});
  const [ toggleDeliveryMutation, { mutationDeliveryData } ] = useMutation(updateDeliveryMutation, { refetchQueries: [ PRODUCTS_QUERY ]});
  const [ toggleDeliveryToStockMutation, { mutationDeliveryToStockData } ] = useMutation(updateDeliveryToStockMutation, { refetchQueries: [ PRODUCTS_QUERY ]});

  function updateStock() {
    const quantity = window.prompt('Podaj ilość', 0);
    toggleStockMutation({ variables: { id: data.id, inStock: Number(quantity) + Number(data.inStock) }});
  }

  function updateDelivery() {
    const quantity = window.prompt('Podaj ilość', 0);
    toggleDeliveryMutation({ variables: { id: data.id, inDelivery: Number(quantity) + Number(data.inDelivery) }});
  }

  function updateDeliveryToStock() {
    toggleDeliveryToStockMutation({ variables: { id: data.id, inStock: Number(data.inDelivery) + Number(data.inStock) }});
  }

  return <StyledProduct id={`${data.model}_${data.kolor}`}>
    <StyledTitle>{data.model} {data.kolor}</StyledTitle>
    <StyledP>Na stanie: {data.inStock}</StyledP>
    <StyledP>W dostawie: {data.inDelivery}</StyledP>
    <StyledBtn onClick={updateStock}>Zmień stan</StyledBtn>
    <StyledBtn onClick={updateDelivery}>Zmień dostawę</StyledBtn>
    <StyledBtn onClick={updateDeliveryToStock}>Dodaj dostawę do stanu</StyledBtn>
  </StyledProduct>
}

export default Product;

const StyledP = styled.p`
  margin: .5rem 0;
  font-size: 1.25rem;
`;

const StyledTitle = styled.p`
  font-weight: bold;
  margin: 0;
  font-size: 1.5em;
  text-align: center;
  border-bottom: 1px solid #616ae0;
  margin-bottom: .5rem;
  padding-bottom: .5rem;
`;

const StyledBtn = styled.button`
  background-color: #616ae0;
  border: none;
  border-radius: 6px;
  color: #fff;
  margin: .25rem;
  height: 2rem;
  padding: .5rem;
  margin-left: 0;
  font-weight: bold;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, .24);
  cursor: pointer;
  transition: background-color 300ms ease-in-out;

  &:hover, &:focus {
    background-color: #8d92dc;
  }
`;

const StyledProduct = styled.li`
  margin: 1rem;
  border: 2px #616ae0 solid;
  border-radius: 6px;
  padding: 1rem;
  box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.24);
  width: calc(1200px/3 - 2rem);
  text-align: center;
  background-color: #fff;
  max-width: 100%
`;