'use client'
import { Button } from '@/components/Button';
import styled from 'styled-components';

const Styled = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    .container{
        padding: 0 10%;
    }
    .cover{
        border: 1px solid red;
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 30px;
        height: 60vh;
        justify-content: center;
        h2{
            font-size: 2rem;
        }
        h1{
            font-size: 3.45rem;
        }
    }
`;

export default function Home(){
    return (
        <Styled>
            <section className='container cover'>
                <h2>Curso de Atualização</h2>
                <h1>Genética e Saúde de Precisão</h1>
                <span>
                    Amplie seus conhecimentos em medicina personalizada e prepare-se para revolucionar sua prática clínica com nosso curso em Genética e Saúde de Precisão.
                </span>
                <h3>EVENTO GRATUITO</h3>
                <Button name='Inscreva-se Agora' />
            </section>
        </Styled>
    );
}