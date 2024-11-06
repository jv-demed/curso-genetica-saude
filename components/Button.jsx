import styled from 'styled-components';

const Styled = styled.button`
    background-color: #1B54DA;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 15px 20px;
`;

export function Button({ name, action }){
    return (
        <Styled action={action}>
            {name}
        </Styled>
    );
}