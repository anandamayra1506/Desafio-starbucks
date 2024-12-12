import loja from "../../assets/imagens/loja.png"
import { Section, Div, Button } from "./styleSobre";

export default function Sobre(){
    return (
      <Section>
        <img src={loja} alt="Loja da Starbucks" />
        <Div>
          <h2>Sobre a Starbucks</h2>
          <h1>Nosso Legado</h1>
          <p>
          Todos os dias esperamos fazer duas coisas: dividir um ótimo café com nossos amigos e ajudar a tornar o mundo um pouquinho melhor. Já era assim quando a primeira Starbucks abriu em 1971 e continua sendo assim até hoje.
          </p>
          <Button>SAIBA MAIS</Button>
        </Div>
      </Section>
    );
}