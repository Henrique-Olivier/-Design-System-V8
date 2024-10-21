# -Design-System-V8

**Componente Input Personalizável**
Este componente de input permite uma estilização flexível e aceita as seguintes propriedades:

Propriedades Obrigatórias:
- type: Define o tipo de input (pode ser text, number ou password).
- size: Especifica o tamanho do input, podendo ser 'default' ou 'small'.
- placeholder: Texto que aparece quando o campo está vazio, orientando o usuário sobre o que deve ser inserido.


Propriedades Opcionais:

- textLabel: Um rótulo que pode ser adicionado acima do input para descrever seu propósito.
- textError: Uma mensagem de erro que aparece abaixo do input, útil para validações.
- icon: Um ícone que pode ser exibido dentro do campo de input, oferecendo uma indicação visual.
OBS: O caminho de um SVG deve ser passado. Certifique-se de que o ícone seja um SVG, pois é o formato suportado para garantir melhor renderização e flexibilidade visual.

- disabled: Um booleano que determina se o input deve estar desabilitado.