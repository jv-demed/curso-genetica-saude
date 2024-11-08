import styled from 'styled-components';
import { useState } from 'react';
import { ICONS } from '@/assets/icons';

const Styled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .btn{
        align-items: center;
        color: #204C8E;
        cursor: pointer;
        display: flex;
        font-size: 1.2rem;
        gap: 5px;
    }
    .content{
        border-left: 1px solid gray;
        margin-left: 10px;
        padding: 5px 30px;
    }
`;

export function ContentDisclosure({ name, contents }){

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Styled>
            <div className='btn'
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <ICONS.arrowDown /> : <ICONS.arrowRight />}
                {name}
            </div>
            {isOpen && <div className='content'>
                {Array.isArray(contents) && <ul>
                    {contents.map((content, i) => (
                        <li key={`content${i}`}>
                            {content}
                        </li>
                    ))}    
                </ul>}
                {!Array.isArray(contents) && <p>
                    {contents}    
                </p>}
            </div>}
        </Styled>
    );
}