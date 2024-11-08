import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';

const Styled = styled.div`
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;

    &.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;


export function FadeInBox({ children }){

    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        if(ref.current){
            observer.observe(ref.current);
        }
        return () => {
            if(ref.current){
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <Styled ref={ref} className={isVisible ? 'visible' : ''}>
            {children}
        </Styled>
    );
};