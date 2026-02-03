// banco_questoes.js
// Este arquivo é um ES Module, porque o index.html usa <script type="module">.
// Aqui ficam TODAS as questões e TODAS as resoluções.

const f = (n, d) => `<div class='fracao'><span class='num'>${n}</span><span class='den'>${d}</span></div>`;

const pathIntro = "https://interativosweb.github.io/part2/introducao/";
const pathComp  = "https://interativosweb.github.io/part2/complementar/";

// ============================
// INTRODUÇÃO (6 questões)
// ============================
export const questoesIntro = [
  {
    pergunta: "Uma fração é uma forma de representar uma parte de um todo, quando esse todo é dividido em partes iguais. Comer um pedaço dessa pizza representa em fração:",
    img: pathIntro + "img01intro.png",
    opcoes: [f(1,4), f(1,6), f(7,1), f(1,7)],
    correta: 3,
    resolucao: `A pizza inteira foi dividida em 7 partes iguais (basta contar as fatias). Como comemos apenas 1 dessas partes, colocamos o 1 em cima (numerador) e o 7 em baixo (denominador). A resposta é ${f(1,7)}.`
  },
  {
    pergunta: "Pedi uma pizza e comi apenas a parte pintada em verde, represente em fração quantos pedaços eu comi:",
    img: pathIntro + "img02intro.png",
    opcoes: [f(3,7), f(5,6), f(7,3), f(7,2)],
    correta: 0,
    resolucao: `Primeiro contamos o total de pedaços da pizza, que são 7. Esse número vai em baixo. Depois contamos quantos estão pintados de verde, que são 3. Esse número vai em cima. A fração é ${f(3,7)}.`
  },
  {
    pergunta: "Um copo cheio de suco é dividido em 2 partes iguais. Se alguém bebe uma dessas partes, temos:",
    img: pathIntro + "img03intro.png",
    opcoes: [f(2,5), f(2,1), f(1,4), f(1,2)],
    correta: 3,
    resolucao: `Se dividimos algo em 2 partes e pegamos 1, estamos pegando a metade. Em fração, isso é representado como 1 sobre 2, ou seja, ${f(1,2)}.`
  },
  {
    pergunta: "Qual fração representa o círculo vermelho?",
    img: pathIntro + "img04intro.png",
    opcoes: [f(1,4), f(4,1), f(2,5), f(1,8)],
    correta: 0,
    resolucao: `Olhe para o desenho e conte o total de bolinhas: são 4 bolinhas no total. Agora, veja quantas são vermelhas: apenas 1. Por isso, a fração é ${f(1,4)}.`
  },
  {
    pergunta: `Uma barra de chocolate tem 5 pedaços iguais, se eu comer ${f(1,5)}, quantos ainda me restam?`,
    img: pathIntro + "img05intro.png",
    opcoes: ["1", f(2,5), f(4,5), f(3,5)],
    correta: 2,
    resolucao: `A barra inteira tem 5 pedaços, ou seja, é ${f(5,5)}. Se você comeu ${f(1,5)}, fazemos uma conta de menos: ${f(5,5)} - ${f(1,5)} = ${f(4,5)}. Sobraram 4 pedaços.`
  },
  {
    pergunta: `Ganhei de presente um celular dos meus pais. No primeiro dia gastei ${f(1,4)} da bateria, no segundo dia ${f(3,4)}, no terceiro dia eu não usei. O celular da minha mãe tem uma bateria maior, quanto ela gastou de bateria?`,
    img: pathIntro + "img06intro.png",
    opcoes: [f(3,4), f(1,4), f(5,4), f(1,5)],
    correta: 0,
    resolucao: `A resposta correta para essa sequência lógica é ${f(3,4)}. Observe bem a imagem para entender como o consumo da bateria foi representado.`
  }
];

// ============================
// ATIVIDADE COMPLEMENTAR
// (mantive as que existem no seu HTML atual,
// mas com resoluções melhores do index antigo quando aplicável)
// ============================
export const questoesComp = [
  {
    pergunta: `Um bolo foi dividido em 4 partes iguais. João comeu ${f(1,4)} e Maria comeu ${f(2,4)}. Que fração do bolo foi comida ao todo?`,
    img: pathComp + "comp01.png",
    opcoes: [f(3,8), f(2,4), f(3,4), f(1,4)],
    correta: 2,
    resolucao: `Como o bolo foi dividido em partes iguais (denominador 4), podemos somar direto o que cada um comeu. João comeu 1 parte e Maria comeu 2 partes.<br>Conta: ${f(1,4)} + ${f(2,4)} = ${f(3,4)}.`
  },
  {
    pergunta: `Ana bebeu ${f(1,5)} de uma garrafa de suco pela manhã e ${f(2,5)} à tarde. Quantas partes da garrafa ela bebeu no total?`,
    img: pathComp + "comp02.png",
    opcoes: [f(2,5), f(1,5), f(3,10), f(3,5)],
    correta: 3,
    resolucao: `O denominador (número de baixo) é igual a 5 para os dois. Então, mantemos o 5 em baixo e somamos os números de cima: 1 + 2 = 3.<br>Resultado: ${f(1,5)} + ${f(2,5)} = ${f(3,5)}.`
  },
  {
    pergunta: `Um chocolate foi dividido em 8 pedaços iguais. Pedro comeu ${f(3,8)}. Que fração do chocolate sobrou?`,
    img: pathComp + "comp03.png",
    opcoes: [f(1,8), f(5,8), f(3,8), f(8,5)],
    correta: 1,
    resolucao: `O chocolate inteiro tem 8 pedaços, então ele cheio é ${f(8,8)}. Se Pedro comeu 3 pedaços, subtraímos:<br>${f(8,8)} - ${f(3,8)} = ${f(5,8)}. Sobraram 5 pedaços.`
  },
  {
    pergunta: `Em uma fita dividida em 6 partes iguais, foram usadas ${f(2,6)} para um trabalho e ${f(1,6)} para outro. Qual fração da fita foi usada ao todo?`,
    img: pathComp + "comp04.png",
    opcoes: [f(1,6), f(3,12), f(3,6), f(2,6)],
    correta: 2,
    resolucao: `Basta juntar as partes usadas. Se usamos 2 partes para um trabalho e 1 para o outro:<br>${f(2,6)} + ${f(1,6)} = ${f(3,6)}.<br><br><b>Curiosidade:</b> ${f(3,6)} é a metade, então pode ser simplificada para ${f(1,2)}.`
  },
  {
    pergunta: `Um bolo foi dividido em 10 partes iguais. Foram comidas ${f(4,10)} depois do almoço. Que fração do bolo ainda resta?`,
    img: pathComp + "comp05.png",
    opcoes: [f(5,10), f(6,14), f(4,10), f(6,10)],
    correta: 3,
    resolucao: `Imagine o bolo inteiro como ${f(10,10)}. Se comeram 4 fatias, fazemos a conta de menos:<br>${f(10,10)} - ${f(4,10)} = ${f(6,10)}.<br><br><b>Simplificação:</b> ${f(6,10)} pode virar ${f(3,5)} dividindo por 2.`
  },
  {
    pergunta: `Uma forma tinha 8 cubos de gelo. Durante o dia, foram usados ${f(4,8)} dos cubos. Que fração dos cubos de gelo ainda restou?`,
    img: pathComp + "comp06.png",
    opcoes: [f(1,8), f(4,8), f(8,8), f(2,8)],
    correta: 1,
    resolucao: `A forma completa tem 8 cubos, ou seja, ${f(8,8)}. Tiramos os 4 que foram usados:<br>${f(8,8)} - ${f(4,8)} = ${f(4,8)}.<br><br><b>Nota:</b> ${f(4,8)} é igual a ${f(1,2)} (metade).`
  },
  {
    pergunta: `Em uma caixa de lápis, ${f(1,4)} foi usado na aula de Matemática e ${f(1,6)} na aula de Artes. Que fração da caixa de lápis foi usada ao todo?`,
    img: pathComp + "comp07.png",
    opcoes: [f(7,12), f(2,10), f(5,12), f(1,10)],
    correta: 2,
    resolucao: `Aqui os denominadores são diferentes (4 e 6). O MMC de 4 e 6 é 12.<br>Transformando: ${f(1,4)} = ${f(3,12)} e ${f(1,6)} = ${f(2,12)}.<br>Somando: ${f(3,12)} + ${f(2,12)} = ${f(5,12)}.`
  },
  {
    pergunta: `Uma caixa estava cheia de suco. Após o almoço, foram consumidos ${f(2,3)} da caixa. Que fração do suco restou?`,
    img: pathComp + "comp08.png",
    opcoes: [f(2,3), f(1,6), f(3,2), f(1,3)],
    correta: 3,
    resolucao: `A caixa cheia representa o todo: ${f(3,3)}. Se beberam duas partes:<br>${f(3,3)} - ${f(2,3)} = ${f(1,3)}.`
  },
  {
    pergunta: `Carlo caminhou ${f(2,5)} de sua meta diária pela manhã e ${f(1,10)} à tarde. Que fração do percurso ele caminhou ao todo?`,
    img: pathComp + "comp09.png",
    opcoes: [f(3,10), f(5,10), f(2,15), f(3,5)],
    correta: 1,
    resolucao: `Igualamos os denominadores: ${f(2,5)} = ${f(4,10)}.<br>Somando: ${f(4,10)} + ${f(1,10)} = ${f(5,10)}.<br><br><b>Simplificação:</b> ${f(5,10)} = ${f(1,2)}.`
  },
  {
    pergunta: `Um pacote tinha 15 bolachas. Durante o lanche, foram comidas ${f(6,15)} das bolachas. Que fração das bolachas ainda restou?`,
    img: pathComp + "comp10.png",
    opcoes: [f(6,15), f(15,9), f(1,15), f(9,15)],
    correta: 3,
    resolucao: `O pacote cheio: ${f(15,15)}. Se comeram 6, sobraram 9.<br>Conta: ${f(15,15)} - ${f(6,15)} = ${f(9,15)}.<br><br><b>Simplificação:</b> ${f(9,15)} = ${f(3,5)} (dividindo por 3).`
  },
  {
    pergunta: `Um tanque de água teve ${f(1,3)} de sua capacidade usada pela manhã e ${f(1,4)} à tarde. Que fração da água foi utilizada no total?`,
    img: pathComp + "comp11.png",
    opcoes: [f(2,7), f(7,12), f(1,12), f(7,7)],
    correta: 1,
    resolucao: `MMC de 3 e 4 é 12.<br>${f(1,3)} = ${f(4,12)} e ${f(1,4)} = ${f(3,12)}.<br>Somando: ${f(4,12)} + ${f(3,12)} = ${f(7,12)}.`
  },
  {
    pergunta: `Uma criança tinha R$ 10,00, divididos em 10 partes iguais. Ela gastou ${f(3,10)} desse dinheiro comprando um lanche. Que fração do dinheiro ainda restou?`,
    img: pathComp + "comp12.png",
    opcoes: [f(10,3), f(7,10), f(1,10), f(3,10)],
    correta: 1,
    resolucao: `O dinheiro todo é ${f(10,10)}. Se gastou ${f(3,10)}, restou:<br>${f(10,10)} - ${f(3,10)} = ${f(7,10)}.`
  },
  {
    pergunta: `Em uma prova, Maria acertou ${f(3,5)} das questões na primeira parte e ${f(1,10)} na segunda parte. <br>Ao juntar as duas partes, quantas questões Maria acertou no total?`,
    img: pathComp + "comp13.png",
    opcoes: [f(3,10), f(4,15), f(7,10), f(2,5)],
    correta: 2,
    resolucao: `Transformamos ${f(3,5)} para base 10: ${f(3,5)} = ${f(6,10)}.<br>Agora somamos: ${f(6,10)} + ${f(1,10)} = ${f(7,10)}.`
  },
  {
    pergunta: `Ana percorreu ${f(1,4)} do caminho pela manhã e ${f(1,2)} à tarde. Que fração do caminho ela percorreu ao todo?`,
    img: pathComp + "comp14.png",
    opcoes: [f(2,4), f(1,6), f(3,4), f(1,2)],
    correta: 2,
    resolucao: `Sabemos que ${f(1,2)} é o mesmo que ${f(2,4)}.<br>Somando: ${f(1,4)} + ${f(2,4)} = ${f(3,4)}.`
  }
];
