import cafe from "../../assets/imagens/cafe.png";
import { Section, Button, Div } from "./styleNovidade";

export default function Novidades() {
  return (
    <Section>
      <Div>
        <h2>PREPARAÇÃO</h2>
        <h1>Níveis de torra</h1>
        <p>
          Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas são as torras que fazem parte dos níveis de torra Starbucks®.
        </p>
        <Button>SAIBA MAIS</Button>
      </Div>
      <img src={cafe} alt="Imagem da semente do café" />
    </Section>
  );
}
