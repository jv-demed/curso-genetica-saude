'use client'
import styled from 'styled-components';
import { Button } from '@/components/Button';
import { ICONS } from '@/assets/icons';

const Styled = styled.main`
    color: #25252C;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    .container{
        padding: 0 10%;
    }
    header{
        align-items: center;
        display: flex;
        height: 8vh;
        justify-content: space-between;
        img{
            height: 100%;
            padding: 8px 0;
        }
    }
    .cover{
        align-items: center;
        background-image: url('/imgs/cover.jpg');
        background-position: center;
        background-size: cover;
        display: flex;
        flex-direction: column;
        gap: 30px;
        height: 70vh;
        justify-content: center;
        padding-bottom: 30px;
        padding-top: 30px;
        &::before{
            background: rgba(255, 255, 255, 0.7);
            content: '';
            height: 70vh;
            margin-top: 8vh;
            position: absolute; top: 0; left: 0; right: 0;
            z-index: 1;
        }
        h2, h1, span, h3, button{
            position: relative;
            z-index: 2;
        }
        h2{
            font-size: clamp(1.3rem, 1.5vw + 0.8rem, 2rem);
        }
        h1{
            color: #204C8E;
            font-size: clamp(2rem, 3vw + 1rem, 3.5rem);
            text-align: center;
        }
        span{
            font-size: clamp(0.9rem, 1vw + 0.4rem, 1.2rem);
        }
    }
    .section{
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding-bottom: 80px;
        padding-top: 80px;
        h2{
            color: #204C8E;
            font-size: clamp(2rem, 3vw + 1rem, 3rem);
        }
        p{
            font-size: clamp(0.9rem, 1vw + 0.4rem, 1.2rem);
        }
    }
    .presentation{
        background-color: #D2DDF8;
        .topics{
            display: flex;
            gap: 25px;
            .topic{
                align-items: flex-start;
                display: flex;
                gap: 15px;
                span{
                    background-color: #1B54DA;
                    border-radius: 5px;
                    color: white;
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
    .structure{
        .topics{
            display: flex;
            gap: 25px;
            .topic{
                display: flex;
                flex: 1 1 350px;
                flex-direction: column;
                gap: 10px;
                width: 100%;
                img{
                    border-radius: 10px;
                    height: clamp(150px, 15vw, 240px);
                    width: 100%;
                }
                h3{
                    font-size: 1.25rem;
                }
            }
        }
    }
    .professionals{
        background-color: #D2DDF8;
        .topics{
            display: flex;
            flex-wrap: wrap;
            gap: 25px;
            .topic{
                display: flex;
                flex: 1 1 45%;
                flex-direction: column;
                gap: 10px;
                width: 100%;
                .name{
                    align-items: center;
                    display: flex;
                    gap: 15px;
                    .icon{
                        color: #204C8E;
                        font-size: 2.2rem;
                    }
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
        .structure{
            .topics{
                flex-direction: column;
                .topic{
                    img{
                        height: 250px
                    }
                }
            }
        }
        .professionals{
            .topics{
                flex-direction: column;
            }
        }
    }
`;

export default function Home(){
    return (
        <Styled>
            <header className='container'>
                <img src='/imgs/logo.png' alt='Logo da Genis' />
                <a href='https://genisdna.com.br/' target='_blank'>genisdna.com.br</a>
            </header>
            <section className='container cover'>
                <h2>Curso de Atualização</h2>
                <h1>Genética e Saúde de Precisão</h1>
                <span>
                    Amplie seus conhecimentos em medicina personalizada e prepare-se para revolucionar sua prática clínica com nosso curso em Genética e Saúde de Precisão.
                </span>
                <h3>EVENTO GRATUITO</h3>
                <Button name='Inscreva-se Agora' />
            </section>
            <section className='container section presentation'>
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
            <section className='container section structure'>
                <h2>O Curso</h2>
                <div className='topics'>
                    <div className='topic'>
                        <img src='/imgs/img2.jpg' alt='Notebook e café' />
                        <h3>Formato Híbrido</h3>
                        <p>Oito horas presenciais no BioHub do Tecnopuc combinadas com 4 horas online via Zoom para uma experiência de aprendizado flexível e abrangente.</p>
                    </div>
                    <div className='topic'>
                        <img src='/imgs/img3.jpg' alt='Equipe de pessoas da área da saúde' />
                        <h3>Metodologia Interativa</h3>
                        <p>Aulas expositivas, discussões em grupo, estudos de caso e demonstrações de uso de ferramentas de análise genética.</p>
                    </div>
                    <div className='topic'>
                        <img src='/imgs/img1.jpg' alt='Sala de aula com alunos' />
                        <h3>Conteúdo Multidisciplinar</h3>
                        <p>Abordagem integrada cobrindo  nutrigenética, farmacogenética, oncogenética, com foco em aplicações práticas.</p>
                    </div>
                </div>
            </section>
            <section className='container section professionals'>
                <h2>Profissionais Envolvidos</h2>
                <p>Este curso reúne especialistas em genética e medicina personalizada. Com experiência acadêmica e de aplicações em prática clínica, eles trarão conhecimentos e insights valiosos para enriquecer sua formação profissional.</p>
                <div className='topics'>
                    <div className='topic'>
                        <div className='name'>
                            <ICONS.dna className='icon' />
                            <h3>Dra. Rúbia de Medeiros</h3>
                        </div>
                        <p>Co-fundadora da Genis, doutora em Genética, especialista em genética humana e estatística aplicada.</p>
                    </div>
                    <div className='topic'>
                        <div className='name'>
                            <ICONS.microscope className='icon' />
                            <h3>Dra. Mayara Prado</h3>
                        </div>
                        <p>Co-fundadora da Genis, doutora em Biologia Molecular, especialista em genotipagem e diagnóstico molecular.</p>
                    </div>
                    <div className='topic'>
                        <div className='name'>
                            <ICONS.computer className='icon' />
                            <h3>Dr. Dennis Maletich Junqueira</h3>
                        </div>
                        <p>Professor da UFSM, especialista em bioinformática e análise genômica.</p>
                    </div>
                    <div className='topic'>
                        <div className='name'>
                            <ICONS.medical className='icon' />
                            <h3>Dr. Gabriel de Souza Macedo</h3>
                        </div>
                        <p>Coordenador técnico-científico de patologia molecular na Rede D'Or-SP, especialista em genética do câncer.</p>
                    </div>
                </div>
            </section>
        </Styled>
    );
}