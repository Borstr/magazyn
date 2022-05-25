import styled from 'styled-components';
import { useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Sidebar = ({ data }) => {
    const inDelivery = () => data.filter(product => product.inDelivery > 0);

    return (
        <StyledAside>
            <StyledTitle>Dostawy</StyledTitle>
            {inDelivery().map(product => <StyledProduct offset='80' href={`#${product.model}_${product.kolor}`} key={product.id}><span>{product.model} {product.kolor}: </span><span>{product.inDelivery}</span></StyledProduct>)}
        </StyledAside>
    )
}

export default Sidebar;

const StyledAside = styled.aside`
    width: 300px;
    height: calc(100vh - 4.5rem);
    position: fixed;
    left: 0;
    top: 4.5rem;
    border: 2px solid #616ae0;
    border-left: none;
    border-bottom: none;
    border-top-right-radius: 6px;
    background-color: #fff;
    box-shadow: 0 0 6px 3px rgba(0, 0, 0, .32);
    padding: .5rem;
`;

const StyledTitle = styled.p`
    font-weight: bold;
    font-size: 1.5rem;
`;

const StyledProduct = styled(AnchorLink)`
    display: flex;
    justify-content: space-between;
    color: #000;
    text-decoration: none;
    margin: .5rem 0;
`;