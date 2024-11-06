'use client'
import styled from 'styled-components';
import { Button } from '@/components/Button';

const Styled = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    .container{
        padding: 0 10%;
    }
    .cover{
        align-items: center;
        background-image: url('/imgs/cover.jpg');
        background-position: center;
        background-size: cover;
        display: flex;
        flex-direction: column;
        gap: 30px;
        height: 60vh;
        justify-content: center;
        &::before{
            background: rgba(255, 255, 255, 0.6);
            content: '';
            height: 60vh;
            position: absolute; top: 0; left: 0; right: 0;
            z-index: 1;
        }
        h2, h1, span, h3, button{
            position: relative;
            z-index: 2;
        }
        h2{
            font-size: 2rem;
        }
        h1{
            font-size: 3.45rem;
        }
        span{
            font-size: 1.2rem;
        }
    }
    .presentation{
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding-bottom: 60px;
        padding-top: 60px;
        h2{
            font-size: 2.5rem;
        }
        p{
            font-size: 1.2rem;
        }
        .topics{
            display: flex;
            gap: 25px;
            .topic{
                align-items: flex-start;
                display: flex;
                gap: 10px;
                span{
                    background-color: #D2DDF9;
                    border-radius: 5px;
                    font-size: 1.6rem;
                    padding: 5px 15px;
                }
                .text{
                    h3{
                        font-size: 1.25rem;
                    }
                }
            }
        }
    }
    @media(max-width: 650px){
        .container{
            padding-left: 6%;
            padding-right: 6%;
        }
        .cover{
            height: 70vh;
            &::before{
                height: 70vh;
            }
        }
        .presentation{
            .topics{
                flex-direction: column;
            }
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
            <section className='container presentation'>
                <h2>A Saúde de Precisão</h2>
                <p>A saúde de precisão está transformando a abordagem clínica, oferecendo terapias e estratégias de prevenção adaptadas às características genéticas e biopsicossociais de cada indivíduo. Com o avanço do sequenciamento genético e das análises bioinformáticas, os profissionais de saúde agora têm acesso a uma poderosa ferramenta para guiar decisões clínicas.</p>
                <div className='topics'>
                    <div className='topic'>
                        <span>1</span>
                        <div className='text'>
                            <h3>Tratamento Personalizado</h3>
                            <p>Escolha de fármacos e ajuste de dosagens baseados no perfil genético individual.</p>
                        </div>
                    </div>
                    <div className='topic'>
                        <span>2</span>
                        <div className='text'>
                            <h3>Prevenção Direcionada</h3>
                            <p>Desenvolva estratégias preventivas customizadas, considerando vulnerabilidades específicas.</p>
                        </div>
                    </div>
                    <div className='topic'>
                        <span>3</span>
                        <div className='text'>
                            <h3>Monitoramento Contínuo</h3>
                            <p>Acompanhe a evolução do indivíduo com base em biomarcadores genéticos.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Styled>
    );
}