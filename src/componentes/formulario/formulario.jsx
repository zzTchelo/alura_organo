import { useState } from "react";
import Botao from "../botao/botao";
import CampoTexto from "../campoTexto/campoTexto";
import ListaSuspensa from "../listaSuspensa/listaSuspensa";
import "./formulario.css";


const Formulario = (props) => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => { 
        evento.preventDefault()
        props.onColaboradorCadastrado({            nome, 
            cargo, 
            imagem, 
            time
        })
    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o Card</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome..." 
                    value={nome} 
                    textOnChange={valor => setNome(valor)}   
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o cargo..." 
                    value={cargo}
                    textOnChange={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem..."
                    value={imagem} 
                    textOnChange={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label='Time' 
                    itens={times} 
                    value={time}
                    textOnChange={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    );
};

export default Formulario