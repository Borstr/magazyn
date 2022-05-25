import Product from '../components/Product';
import Navbar from '../components/Navbar';
import Delivery from '../components/Delivery';
import Sidebar from '../components/Sidebar';

import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import React from 'react';

const PRODUCTS_TYP = gql`
    query productsTypQuery($value: String!) {
        products(orderBy: model_ASC, where: { typ: $value}, first: 1000) {
        model,
        kolor,
        inStock,
        inDelivery,
        id
        }
    }
`;

const INDELIVERY = gql`
    query inDeliveryQuery {
        products(orderBy: model_ASC, where: { typ: "Długopis", inDelivery_gt: 0 }, first: 1000) {
        model,
        kolor,
        inStock,
        inDelivery,
        id
        }
    }
`;

const ProductList = () => {
    const [ filter, setFilter ] = useState('Długopis');
    const { loading, error, data = [] } = useQuery(PRODUCTS_TYP, { variables: { value: filter }});
    
    if(loading || error) return <p>Loading...</p>

    return <StyledSection>
        <Navbar setFilter={filterData => setFilter(filterData)} />
        <Sidebar data={data.products} />
        <StyledList>
            {
                data.products.map(product => 
                    <Product 
                        PRODUCTS_QUERY={PRODUCTS_TYP}
                        key={product.id} 
                        data={product} 
                    />
                )
            }
        </StyledList>
    </StyledSection>
}

export default ProductList;

const StyledList = styled.ul`
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-left: 300px;
    width: 1600px;
    max-width: 100vw;
`;

const StyledSection = styled.section`
`;