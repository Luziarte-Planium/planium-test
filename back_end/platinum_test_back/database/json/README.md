
<img src="https://www.planium.io/wordpress/wp-content/uploads/2018/11/logo-Planium-06.svg" width="250" height="100">
**[Especificações para o teste]**

**Observações:**
  - "Plano" dito aqui significa "Plano de Saúde".
  - "Beneficiários" são as pessoas participantes/pagantes de um plano de saúde.


1. Você recebeu duas tabelas em JSON(presente nesse repositório), uma de Planos e outra de Preços.
	- A tabela de plano possui os planos que serão vendidos.
	- A tabela de preço possui o(s) preço(s) para cada plano listado na tabela de planos.


2. Cada plano tem três faixas de preços, sendo estas categorizadas por idade:
	- Pessoas de 0 a 17 anos vão para a faixa1.
	- Pessoas de 18 a 40 anos vão para a faixa2.
	- Pessoas com mais de 40 anos vão para a faixa3.


3. Cada plano pode ter preços variados dependendo da quantidade de pessoas participando do mesmo.
	- Essa variação é representada na tabela de preços pela coluna "minimo_vidas".


4. Com as especificações acima, faça uma API que permita a entrada dos seguintes dados, salvando-os em um Json chamado beneficiarios.json:
    - Quantidade de beneficiários
    - Idade de cada beneficiário
    - Nome de cada beneficiário
    - Registro do plano escolhido (deve ser um dos registros listados na tabela de plano)
      - Caso o usuário liste um registro inexistente, deve mostrar mensagem de erro.



5. Essa API deverá ler a tabela de Plano e a tabela de Preço, e retornar:
    - Preço de cada beneficiário para o plano escolhido, juntamente com a sua idade.
    - O preço total do Plano escolhido (soma do preço de cada beneficiário)
	
6. Ao final, unir todas as informações e salvar em um JSON chamado proposta.json, o mesmo deverá conter todas as informações sobre os beneficiarios, planos e preços.
    - **Observações:**
    Seu **back-end** deverá ser feita utilizando PHP ou Node.js
    Criar um front-end pra consumir essas informações, fique a vontade para utilizar a ferramenta/framework que quiser.

7. Ao término, dê reply no e-mail que você originalmente recebeu com o link do seu repositório no [GitHub](https://github.com/).
  - Tempo total: 5 dias após o envio do teste.


**Good luck and have fun :)**
