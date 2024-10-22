# -Design-System-V8

**componente  Button**
O componente Button é um botão versátil com diversas variações de estilo, incluindo: main, secondary, text, e link.

Para utilizá-lo, basta chamar a tag \<Button> com o fechamento apropriado \<Button/>. Ele espera as seguintes props:

Props:
- children (obrigatório):

O conteúdo do botão, geralmente o texto que será exibido dentro dele.


- type (obrigatório):

Define a aparência e o estilo do botão.
Aceita os seguintes valores:
1. 'main': Para botões primários com destaque visual.
2. 'secondary': Para botões secundários.
3. 'text': Para botões com estilo de texto simples, sem bordas.
4. 'link': Para botões que parecem links de texto.


- size (obrigatório):

Controla o tamanho do botão.
Aceita os seguintes valores:
1. 'large': Botão grande.
2. 'medium': Botão médio (padrão).
3. 'small': Botão pequeno.


- icon (opcional):

Caso o botão precise de um ícone, o caminho de um SVG deve ser passado. Certifique-se de que o ícone seja um SVG, pois é o formato suportado para garantir melhor renderização e flexibilidade visual.

**Componente Progress**

O Componente Progress é uma barra de progresso versátil, com dois estilos principais: circular e em barra.

Para utiliza-lo deverá ser chamado a tag \<ProgressBar> Com o fechamento\<ProgressBar/>. 
O componente esperá as seguintes props: 

- Percents (Obrigatório):   
 Se trata da porcentagem da barra de progresso, numeros inteiros de 0 a 100.

- type (Opicional):
 Determina o formato de exibição da barra de progresso, que pode ser uma barra ou um círculo. Os valores aceitos são:

 1. 'line' (Padrão)
 2. 'smallLine' 
 3. 'circle'
 4. 'smallCircle

- style (Opcional)
Define o estilo visual do progresso. Os valores aceitos são: 

1. 'default' (Padrão)
2. 'percent'
3. 'complete'
4. 'error'

OBS: importe resaltar que os estilos em barra não tem width fixo, então é importante controlar com um componente pai. Já por outro lado os estilos circular tem são fixados em 84px e 140px.