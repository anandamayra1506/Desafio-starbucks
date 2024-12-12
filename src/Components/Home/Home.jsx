import { useState } from "react";
import {MainStyle, DivEclipse, Copo, DivCopos, Button, Span, Text, Titulo} from "./styleHome"

export default function App() {
  const [copoSelecionado, setCompoSelecionado] = useState(
    "https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/laranja2x.png?raw=true"
  );
  const [corDeFundo, setCorDeFundo] = useState(
    "https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/Ellipse%202.png?raw=true"
  );

  const trocandoCopo = (imagemCopo,imagemFundo) => {
    setCompoSelecionado(imagemCopo);
    setCorDeFundo(imagemFundo);
  }

  return (
    <MainStyle>
      <section>
        <Titulo>Mais que Café</Titulo>
        <Titulo>
          Isso é <Span>Starbucks</Span>
        </Titulo>
        <Text>
          A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
          dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
          Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas
          quentes e frias, doces diferenciados e sanduíches.
        </Text>
        <Button>SAIBA MAIS</Button>
        <DivCopos>
          <img
            src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/amarelo.png?raw=true"
            alt="Copo pequeno sabor maracujá."
            onClick={() =>
              trocandoCopo(
                "https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/amarelo2x.png?raw=true",
                "https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/Ellipse%201.png?raw=true"
              )
            }
          />
          <img
            src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/laranja.png?raw=true"
            alt="Copo pequeno sabor laranja."
            onClick={() =>
              trocandoCopo(
                "https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/laranja2x.png?raw=true",
                "https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/Ellipse%202.png?raw=true"
              )
            }
          />
          <img
            src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/vermelho.png?raw=true"
            alt="Copo pequeno sabor morango."
            onClick={() =>
              trocandoCopo(
                "https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/vermelho2x.png?raw=true",
                "https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/vermelhoElipse.png?raw=true"
              )
            }
          />
        </DivCopos>
      </section>

      <DivEclipse>
        <Copo src={copoSelecionado} alt="Copo selecionado pelo usuário por sabor." />
        <img src={corDeFundo} alt="Cor de fundo correspondente ao copo selecionado." />
      </DivEclipse>
    </MainStyle>
  );
}