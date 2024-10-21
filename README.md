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