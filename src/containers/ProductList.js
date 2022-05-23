import Product from '../components/Product';
import Navbar from '../components/Navbar';
import Delivery from '../components/Delivery';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import { useState } from 'react';

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

    function InDelivery() {
        const { loading, error, data } = useQuery(INDELIVERY, { variables: { value: filter }});
        if(loading) return <p>Loading...</p>
        if(error) return <p>Error</p>
        return <Delivery>
            {data.products.map(product => 
                <p key={product.id}>{product.model} {product.kolor}: <span>{product.inDelivery}</span></p>    
            )}
        </Delivery>
    }

    return <StyledSection>
        <Navbar setFilter={data => setFilter(data)} />
        {InDelivery(filter)}
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
    align-items: center;
    justify-content: center;
    margin: 0;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 1600px;
    max-width: 100vw;
`;

const StyledSection = styled.section`
`;