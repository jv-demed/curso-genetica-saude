'use client'
import styled from 'styled-components';
import { ICONS } from '@/assets/icons';
import { Button } from '@/components/Button';
import { FadeInBox } from '@/components/FadeInBox';
import { ContentDisclosure } from '@/components/ContentDisclosure';

const Styled = styled.main`
    color: #25252C;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    .container{
        padding: 0 12%;
    }
    header{
        align-items: center;
        background-color: #EDEBEC;
        display: flex;
        height: 8vh;
        justify-content: space-between;
        position: fixed; top: 0; left: 0; right: 0;
        z-index: 3;
        img{
            height: 100%;
            padding: 8px 0;
        }
        a{
            border: 1px solid #204C8E;
            border-radius: 10px;
            color: #204C8E;
            cursor: pointer;
            font-size: 1.2rem;
            padding: 5px 10px;
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
        margin-top: 8vh;
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
            color: #204C8E;
            font-size: clamp(1.3rem, 1.5vw + 0.8rem, 2rem);
        }
        h1{
            color: #204C8E;
            font-size: clamp(2rem, 3vw + 1rem, 3.5rem);
            text-align: center;
        }
        h3{
            border: 1px solid #204C8E;
            border-radius: 10px;
            color: #204C8E;
            padding: 5px 10px;
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
        padding-top: 60px;
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
                        color: #204C8E;
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
                    color: #204C8E;
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
                    color: #204C8E;
                    display: flex;
                    gap: 15px;
                    .icon{
                        font-size: 2.2rem;
                    }
                    h3{
                        font-size: 1.25rem;
                    }
                }
            }
        }
    }
    .content{
        .topics{
            display: flex;
            flex-direction: column;
            gap: 25px;
        }
    }
    .benefits{
        .topics{
            display: flex;
            gap: 15px;
            .topic{
                background-color: #D2DDF8;
                border: 1px solid #C1CCE8;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                gap: 10px;
                padding: 15px 20px;
                width: 100%;
                h3{
                    color: #204C8E;
                }
            }
        }
    }
    .inscription{
        background-color: #AFCBF8;
        .topics{
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            justify-content: center;
            row-gap: 30px;
            .topic{
                align-items: center;
                display: flex;
                flex-direction: column;
                gap: 5px;
                text-align: center;
                width: 350px;
                .icon{
                    color: #204C8E;
                    font-size: 2rem;
                }
                h3{
                    color: #204C8E;
                }
            }
        }
        .actions{
            justify-content: center;
            display: flex;
            margin-top: 20px;
        }
    }
    .organizations{
        .topics{
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: space-around;
            width: 100%;
            img{
                width: 220px;
            }
        }
    }
    footer{
        align-items: center;
        background-color: gray;
        color: white;
        display: flex;
        flex-direction: column;
        gap: 10px;
        height: 10vh;
        justify-content: center;
        margin-top: 50px;
        text-align: center;
        a{
            color: white;
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
        .section{
            padding-bottom: 50px;
            padding-top: 40px;
        }
        .presentation{
            .topics{
                flex-direction: column;
            }
        }
        .structure{
            .topics{
                flex-direction: column;
                gap: 35px;
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
        .benefits{
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
                <a href='https://forms.office.com/r/Q0BkFr8aEn' target='_blank'>
                    Inscreva-se gratuitamente
                </a>
            </header>
            <FadeInBox>
                <section className='container cover'>
                    <h2>Curso de Atualização</h2>
                    <h1>Genética e Saúde de Precisão</h1>
                    <span>
                        Amplie seus conhecimentos em medicina personalizada e prepare-se para revolucionar sua prática clínica com nosso curso em Genética e Saúde de Precisão.
                    </span>
                    <h3>EVENTO GRATUITO</h3>
                    <Button name='Inscreva-se Agora' 
                        action={() => window.open('https://forms.office.com/r/Q0BkFr8aEn', '_blank')}
                    />
                </section>
            </FadeInBox>
            <FadeInBox>
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
            </FadeInBox>
            <FadeInBox>
                <section className='container section structure'>
                    <h2>O Curso</h2>
                    <div className='topics'>
                        <div className='topic'>
                            <img src='/imgs/img2.jpg' alt='Notebook e café' />
                            <h3>Formato Híbrido</h3>
                            <p>Oito horas presenciais no BioHub do Tecnopuc combinadas com 4 horas online via Zoom para uma experiência de aprendizado flexível e abrangente.</p>
                        </div>
                        <div className='topic'>
                            <img src='/imgs/img1.jpg' alt='Equipe de pessoas da área da saúde' />
                            <h3>Metodologia Interativa</h3>
                            <p>Aulas expositivas, discussões em grupo, estudos de caso e demonstrações de uso de ferramentas de análise genética.</p>
                        </div>
                        <div className='topic'>
                            <img src='/imgs/img3.jpg' alt='Sala de aula com alunos' />
                            <h3>Conteúdo Multidisciplinar</h3>
                            <p>Abordagem integrada cobrindo  nutrigenética, farmacogenética, oncogenética, com foco em aplicações práticas.</p>
                        </div>
                    </div>
                </section>
            </FadeInBox>
            <FadeInBox>
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
            </FadeInBox>
            <FadeInBox>
                <section className='container section content'>
                    <h2>Conteúdo Programático</h2>
                    <p>Nosso programa abrange desde os fundamentos da genética até as aplicações avançadas da medicina personalizada. Cada módulo foi elaborado para proporcionar uma compreensão teórica e prática de conceitos essenciais da área.</p>
                    <div className='topics'>
                        <ContentDisclosure 
                            name='Dia 1 - Presencial (8 horas)'
                            contents={[
                                'Introdução à Genética e Saúde de Precisão;',
                                'Farmacogenética: Conceitos e Aplicações Clínicas;',
                                'Nutrigenética: Personalização da Dieta Baseada em Genética;',
                                'Estudo de Caso: Interpretação de Relatório Genético.'
                            ]}
                        />
                        <ContentDisclosure 
                            name='Dia 2 - Online (4 horas)'
                            contents={[
                                'Oncogenética e Medicina Personalizada;',
                                'Ferramentas e Bancos de Dados Genéticos;',
                                'Workshop Prático: Desenvolvendo Planos de Cuidado Personalizados.'
                            ]}
                        />
                        <ContentDisclosure 
                            name='Metodologia de Ensino'
                            contents='Combinamos aulas expositivas, estudos de caso, discussões em grupo e demonstrações de ferramentas avançadas para garantir uma aprendizagem completa e aplicável.'
                        />
                    </div>
                </section>
            </FadeInBox>
            <FadeInBox>
                <section className='container section benefits'>
                    <h2>Benefícios</h2>
                    <p>Participar deste curso de atualização enriquecerá seu conhecimento e trará novas perspectivas em sua carreira profissional.</p>
                    <div className='topics'>
                        <div className='topic'>
                            <h3>Expertise Diferenciada</h3>
                            <p>Destaque-se no mercado com conhecimentos em genética e medicina de precisão, oferecendo um atendimento de qualidade aos seus pacientes.</p>
                        </div>
                        <div className='topic'>
                            <h3>Prática Clínica Aprimorada</h3>
                            <p>Aplique os conhecimentos adquiridos, melhorando seus diagnósticos, tratamentos e estratégias de cuidado.</p>
                        </div>
                    </div>
                </section>
            </FadeInBox>
            <FadeInBox>
                <section className='container section inscription'>
                    <h2>Inscrição</h2>
                    <p>As vagas são limitadas para garantir uma experiência de aprendizado personalizada e de alta qualidade. Não perca esta oportunidade única!</p>
                    <div className='topics'>
                        <div className='topic'>
                            <ICONS.calendar className='icon' />
                            <h3>Data</h3>
                            <p>06 e 07 de dezembro</p>
                        </div>
                        <div className='topic'>
                            <ICONS.local className='icon' />
                            <h3>Local</h3>
                            <p>Presencial no BioHub, 6° andar do Tecnopuc, e Online via plataforma Zoom</p>
                        </div>
                        <div className='topic'>
                            <ICONS.watch className='icon' />
                            <h3>Carga horária</h3>
                            <p>12 horas (8 presenciais + 4 online)</p>
                        </div>
                        <div className='topic'>
                            <ICONS.peoples className='icon' />
                            <h3>Público-alvo</h3>
                            <p>Profissionais e estudantes da área da saúde</p>
                        </div>
                        <div className='topic'>
                            <ICONS.people className='icon' />
                            <h3>Vagas</h3>
                            <p>40 (limitadas)</p>
                        </div>
                    </div>
                    <div className='actions'>
                        <Button name='Inscreva-se Agora' 
                            action={() => window.open('https://forms.office.com/r/Q0BkFr8aEn', '_blank')}
                        />
                    </div>
                </section>
            </FadeInBox>
            <FadeInBox>
                <section className='container section organizations'>
                    <h2>Organizadores</h2>
                    <div className='topics'>
                        <img src='/imgs/logo.png' alt='Logo da Genis' />
                        <img src='/imgs/biohub.png' alt='Logo da Biohub' />
                        <img src='/imgs/tecnopuc.png' alt='Logo da Tecnopuc' />
                        <img src='/imgs/fapergs.jpg' alt='Logo da Fapergs' />
                    </div>
                </section>
            </FadeInBox>
            <footer className='container'>
                <a href='https://genisdna.com.br/' target='_blank'>genisdna.com.br</a>
                <span>© Copyright 2023 | Genetics and Innovative Solutions | Todos os direitos reservados.</span>
            </footer>
        </Styled>
    );
}