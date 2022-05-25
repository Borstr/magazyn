import styled from 'styled-components';
import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import React from 'react';

const updateDeliveryToStockMutation = gql`
  mutation updateInDelivery($id: ID!, $inStock: Int!) {
    updateProduct(where: {id: $id}, data: {inDelivery: 0, inStock: $inStock}) {
      model
    }
  }
`

const Delivery = ({ children, data, PRODUCTS_QUERY }) => {
    const [ isExpanded, triggerExpansion ] = useState(true);
    const [ toggleDeliveryToStockMutation, { mutationDeliveryToStockData } ] = useMutation(updateDeliveryToStockMutation, { refetchQueries: [ PRODUCTS_QUERY ]});

    function updateDeliveryToStock(id) {
        toggleDeliveryToStockMutation({ variables: { id: id, inStock: Number(data.inDelivery) + Number(data.inStock) }});
    }

    return (
        <StyledContainer>
            {isExpanded ? 
            <>
                <StyledTitle>Dostawy</StyledTitle>
                <StyledContent>
                    {children.map(child => <div key={child.key}><p>{child} </p><StyledButton onClick={() => updateDeliveryToStock(child.key)}>dodaj</StyledButton></div>)}
                </StyledContent>
            </> : null}
            <StyledButton onClick={() => triggerExpansion(!isExpanded)}>ZWIŃ</StyledButton>
        </StyledContainer>
    );
}

export default Delivery;

const StyledContainer = styled.div`
`;

const StyledButton = styled.button`
    margin: .5rem;
    border: none;
    background-color: transparent;
    color: #616ae0;
    font-weight: bold;
    cursor: pointer;
    width: auto;
`;

const StyledTitle = styled.p`
    margin: 0;
    font-weight: bold;
    font-size: 1.5rem;
    padding: .5rem;
    border-bottom: 2px dashed #616ae0;
`;

const StyledContent = styled.div`
    padding: .5rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
    max-width: 500px;
    
    & p {
        margin: .5rem 0;
    }

    & > div {
        border-bottom: 1px solid #616ae0;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`;