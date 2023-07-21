import "./formulario.css";
import CampoTexto from "../campoTexto";

export const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o Card</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome..." />
                <CampoTexto label="Cargo" placeholder="Digite o cargo..." />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem..." />
            </form>
        </section>
    );
};
