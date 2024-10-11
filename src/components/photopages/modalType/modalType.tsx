import { FaSquareWhatsapp } from 'react-icons/fa6';
import { Container, Header, Main, Input, Submit } from "./styled";
import React, {  useState, useContext } from "react";
import { ImageContext } from "../../hooks/hookContext.tsx";


export default function Modaltypescript() {

    const { image } = useContext(ImageContext);

    const [nome, setNome] = useState("");
    const [cor, setCor] = useState("");
    const [tamanho, setTamanho] = useState("");

    function setarNome(event: React.ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value);
    }

    

    function setarCor(event: React.ChangeEvent<HTMLInputElement>) {
        setCor(event.target.value);
    }

    function setarTamanho(event: React.ChangeEvent<HTMLInputElement>) {
        setTamanho(event.target.value);
    }

    function handleSend(event: React.FormEvent<HTMLFormElement>) {
        alert("Pedido sendo enviado via Whatapp, caso não haja  cor e tamanho escolhido será avisado por WhatsApp");
        event.preventDefault(); // Prevenir o recarregamento da página
        const mensagem = `Olá, meu nome é ${nome}, gostaria de comprar o item da cor ${cor} e no tamanho ${tamanho}. Veja a imagem: ${image.url}`;
        const urlWhatsApp = `https://wa.me/5588981244495?text=${encodeURIComponent(mensagem)}`;
        window.location.href = urlWhatsApp; // Redireciona para o WhatsApp com a mensagem formatada
    }

    return (
        <Container>
            <Header>Compre pelo Whatsapp</Header>
            <Main>
                <form onSubmit={handleSend}>
                    <div>
                        <label htmlFor="Nome">Seu nome: </label>
                        <Input type="text" id="Nome" placeholder="Nome" required value={nome} onChange={setarNome} />
                    </div>
                    <div>
                        <label htmlFor="Cor">Cor do item: </label>
                        <Input type="text" id="Cor" placeholder="Cor" required value={cor} onChange={setarCor} />
                    </div>
                    <div>
                        <label htmlFor="Tamanho">Tamanho do item: </label>
                        <Input type="text" id="Tamanho" placeholder="Tamanho" required value={tamanho} onChange={setarTamanho} />
                    </div>
                    <Submit type="submit">Enviar <FaSquareWhatsapp style={{ marginLeft: "10px" }} color="#25d366" size={30} /></Submit>
                </form>
            </Main>
        </Container>


    );
}

