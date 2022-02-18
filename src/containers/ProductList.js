import Product from '../components/Product';
import Navbar from '../components/Navbar';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import { useState } from 'react';

const PRODUCTS_TYP = gql`
    query productsTypQuery($value: String!) {
        products(orderBy: model_ASC, where: { typ: $value}) {
        model,
        kolor,
        inStock,
        inDelivery,
        id
        }
    }
`;

const PRODUCTS_KOLOR = gql`
    query productsTypQuery($value: String!) {
        products(orderBy: model_ASC, where: { kolor: $value}) {
        model,
        kolor,
        inStock,
        inDelivery,
        id
        }
    }
`;

const PRODUCTS_MODEL = gql`
    query productsTypQuery($value: String!) {
        products(orderBy: model_ASC, where: { model: $value}) {
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
    function Products(filter) {
        const { loading, error, data } = useQuery(PRODUCTS_TYP, { variables: { value: filter }});
        if(loading) return <p>Loading...</p>
        if(error) return <p>Error</p>

        return data.products.map(product => 
            <Product 
                PRODUCTS_QUERY={PRODUCTS_TYP}
                key={product.id} 
                data={product} 
            />
        );
    }

    return <StyledSection>
        <Navbar setFilter={data => setFilter(data)} />
        <StyledList>
            {Products(filter)}
        </StyledList>
    </StyledSection>
}

export default ProductList;

const StyledList = styled.ul`
    padding: 0;
    list-style-type: none;
    display: flex;
    margin: 0;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 1200px;
`;

const StyledSection = styled.section`
`;