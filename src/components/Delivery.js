import styled from 'styled-components';
import { useState } from 'react';

const Delivery = ({ children }) => {
    const [ isExpanded, triggerExpansion ] = useState(true);
    return (
        <StyledAside>
            {isExpanded ? 
            <>
                <StyledTitle>Dostawy</StyledTitle>
                <StyledContent>
                    {children.map(child => child)}
                </StyledContent>
            </> : null}
            <StyledButton onClick={() => triggerExpansion(!isExpanded)}>ZWIŃ</StyledButton>
        </StyledAside>
    );
}

export default Delivery;

const StyledAside = styled.aside`
    position: fixed;
    left: 0;
    top: 8rem;
    border: 2px solid #616ae0;
    border-left: none;
    border-radius: 3px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    background-color: #fff;
    box-shadow: 0 0 6px 3px rgba(0, 0, 0, .32);
`;

const StyledButton = styled.button`
    margin: .5rem;
    border: none;
    background-color: transparent;
    color: #616ae0;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        
    }
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
    
    & > p {
        margin: 0.25rem;
        width: calc(100% - 1rem);
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        border-bottom: 1px solid #616ae0;
    }
`;