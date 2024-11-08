import styled from 'styled-components';

const Styled = styled.button`
    /* background-color: #1B54DA; */
    background: linear-gradient(30deg, #411bda 0%, #1bb4da 100%);
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 15px 20px;
    width: ${({ $width }) => $width};
    @media(max-width: 650px){
        width: 100%;
    }
`;

export function Button({ name, width, action }){
    return (
        <Styled 
            onClick={action}
            $width={width || 'auto'}
        >
            {name}
        </Styled>
    );
}