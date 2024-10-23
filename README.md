# -Design-System-V8
**Componente Input Personalizável**

Este componente de input permite uma estilização flexível e aceita as seguintes propriedades:

Propriedades Obrigatórias:
- inputSize: Especifica o tamanho do input, podendo ser 'default' ou 'small'.

- placeholder: fornece uma dica do valor esperado no campo do input.

Propriedades Opcionais:

- textLabel: Um rótulo que pode ser adicionado acima do input para descrever seu propósito.
- textError: Uma mensagem de erro que aparece abaixo do input, útil para validações.
- disabled: Um booleano que determina se o input deve estar desabilitado.
- icon: Um ícone que pode ser exibido dentro do campo de input, oferecendo uma indicação visual.
OBS: O caminho de um SVG deve ser passado. Certifique-se de que o ícone seja um SVG, pois é o formato suportado para garantir melhor renderização e flexibilidade visual.

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


**Componente Typography**

O componente Typography é um componente que possui estilização para: tags heading(H1, H2, H3, H4) para desktop, tablet e mobile; e a tag paragraph(p) para main text.

Para utilizá-lo, basta chamar a tag \<Typography> com o fechamento apropriado \<Typography/>. Ele espera as seguintes props:

- size (obrigatório):

Aceita os seguintes valores:
1. 'desktop', Usado com heading.
2. 'tablet', Usado com heading.
3. 'mobile', Usado com heading.
4. 'main', Usado com paragraph.

- tag (obrigatório):
Aceita os seguintes valores:
1. 'H1', Usado com o size desktop, tablet ou mobile.
2. 'H2', Usado com o size desktop, tablet ou mobile.
3. 'H3', Usado com o size desktop, tablet ou mobile.
4. 'H4', Usado com o size desktop, tablet ou mobile.

5. 'body-L', usado com o size main.
6. 'body-M-regular', usado com o size main.
7. 'body-M', usado com o size main.
8. 'body-S', usado com o size main.
9. 'body-S-regular', usado com o size main.
10. 'body-XS', usado com o size main.

- children (obrigatório):

O conteúdo do typography, sendo o texto que será exibido dentro dele.

**Componente Progress**

O Componente Progress é uma barra de progresso versátil, com dois estilos principais: circular e em barra.

Para utiliza-lo deverá ser chamado a tag \<ProgressBar> Com o fechamento\<ProgressBar/>. 
O componente esperá as seguintes props: 

- Percents (Obrigatório):   
 Se trata da porcentagem da barra de progresso, numeros inteiros de 0 a 100.

- type (Opcional):
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

OBS: importante ressaltar que os estilos em barra não tem width fixo, então é importante controlar com um componente pai. Já por outro lado os estilos circular são fixados em 84px e 140px.


**Componente Checkbox**

O Componente Checkbox é um input que pode ser personalizado com três tipos e três estados diferentes, onde podem ser combinados de diferentes formas

Para utiliza-lo deverá ser chamado a tag com auto fechamento \<Checkbox/>.
O componente esperá as seguintes props:

- type (Obrigatório):
Determina a estilização do Checkbox:

1. default
2. disabled
3. error

- state (Obrigatório):
Determina o checked(tick) do checkbox:

1. empty
2. checked
3. undefined

**Componente Modal**

O componente modal é um alerta flexivel, que pode ser completamente modificado conforme o contexto 
em que ele está inserido. 

Para utiliza-lo deverá ser chamado a tag \<Modal> Com o fechamento\<Modal/>. 
O componente esperá as seguintes props: 

- Children: (Obrigatório)
é o conteudo que está dentro do modal, por padrão o modal está sempre vazio, possuindo apenas o botão 
de fechar. 

-isVisible: (Obrigatório)

é uma prop booleana, é o que controla sua visibilidade, sendo assim se o modal for criado com true ele 
será visivel assim que a página for carregada, do contrário ele não irá aparecer. 
é interessante que nessa prop seja passada um state, para que ele seja controlado de forma externa, pelo 
componente pai 

-onClose: (Obrigatório)

Essa prop espera uma função, que será associada tanto ao botão de fechar quanto ao overlay. Ao serem clicados, o modal será fechado. É interessante que essa função controle o state passado na prop "isVisible".


 **Componente Avatar**

 O componente avatar é uma forma facil de representar um usuario, contento alguns tipo, diferenciando o conteudo dentro dele podendo ser uma imagem padrão, personalizada ou a inicial que for definida

OBS: o componente não tem largura nem altura definida, devendo ser controlado por uma elemento pai. 

 Para utiliza-lo deverá ser chamado a tag \<Modal />  
O componente esperá as seguintes props: 

- type: (Obrigatório)
É refente ao que será exibido dentro do avatar
1. 'default' - Será exibido um icone padrão 
2. 'picture' - Será exibido uma imagem personalizada. No caso dessa prop ser passada, é necessario passar um caminho na prop 'img'
3. 'initials' - Será exibido as iniciais informadas. No caso dessa prop ser passada, é necessario passar as iniciais via a prop 'inital'

- Color: (Opcional)
Define a cor que vai ser mostrada no icone: 
  1. "default"
  2. "purpleGradient"
  3. "lightPurpleGradient"
  4. "greenGradient"
  5. "pinkGradient"
  6. "orangeGradient"

- initial: (Opcional)
é necessario apenas no " type: 'initials' ", será a inicial mostrada.

- fontSize: (Opcional)
é o tamanho da fonte da initial, o tamanho padrão é de 16px. Deve ser passado como -> ex: '32px'

- img: (Opicional)
é necessario apenas no " type: 'picture' ", será a imagem mostrada.


**Componente Empty**

O componente empty é um componente onde mostra um empty state, podendo ser personalizavel.

Para utiliza-lo deverá ser chamado a tag \<Empty> Com o fechamento\<Empty/>. 
O componente esperá as seguintes props:

- iconEmpty (Obrigatório):

Onde é definido o icone do empty state.

- children (opcional):
- 
É o conteudo que sera mostrado logo abaixo do icone do empty state.