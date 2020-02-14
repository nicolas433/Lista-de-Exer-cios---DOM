PWEB 2 – Lista de Exercícios Práticos – DOM

1. Use a código HTML a seguir para realizar as atividades deste item.
 - a. Selecione o primeiro elemento da lista e defina a cor do texto como azul.
 - b. Selecione o terceiro elemento da lista. Defina todos os elementos a
esquerda como negrito.
 - c. Selecione o elemento pai do elemento 5 da lista e inseria um borda no
elemento.
 - d. Com o elemento pai da lista selecionado, modifique todas as DIVs que o
antecedem para que a cor do texto seja vermelha.

* html>
    * head>
    * /head>
    * body>
        * div >Lista de Alunos</div>
            * ul>
                * li>João</li>
                * li>Maria</li>
                * li>Sara</li>
                * li>Edson</li>
                * li>Mariana</li>
                * li>José</li>
                * li>Ana</li>
            * /ul>
    * /body>
* /html>

2. Construa uma matriz quadrática do tipo NxN usando HTML.
3. Crie um código Javascript que selecione a diagonal principal da matriz criada no
item 1, e defina a cor das células que compõem a diagonal principal de laranja.
4. Crie um código Javascript que selecione a diagonal secundária da matriz criada
no item 1, e defina a cor das células que compõem a diagonal secundária de
azul.
5. Considere que el é uma variável que armazena a instância de um elemento
qualquer do DOM. Sobre localizar elementos no mesmo nível, responda os
seguintes questionamentos:
a. É verdade que elem.lastChild.nextSibling sempre será null?
b. É verdade que elem.children[0].previousSibling será sempre null ?
6. Considere el um elemento que contém vários outros elementos filhos que
possuem ID únicos e definidos em cada elemento filho, incluindo a DIV com o
ID “teste”. Qual o resultado armazenado na seguinte variável: const el2 =
elem.getElementById(“teste”).
