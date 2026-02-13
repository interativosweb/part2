const f = (n, d) => `<div class='fracao'><span class='num'>${n}</span><span class='den'>${d}</span></div>`;

const pathIntro = "https://interativosweb.github.io/part2/introducao/";
const pathComp  = "https://interativosweb.github.io/part2/complementar/";
const pathResp  = "https://interativosweb.github.io/part2/respostas/";

const pad2 = (n) => String(n).padStart(2, "0");

/**
 * Gera o HTML da imagem de resolução.
 * - Padrão: 65%
 * - scale=1.4 => 65% * 1.4 = 91% (40% maior)
 */
const resolucaoCompImgHTML = (n, scale = 1) => {
  const base = `${pathResp}rep${pad2(n)}`;
  const baseWidth = 65;
  const width = Math.min(100, baseWidth * scale);
  const w = `${width.toFixed(2)}%`;

  return `
    <div class="resposta-img-wrap" style="text-align:center;">
      <img src="${base}.png"
           alt="Resposta"
           class="resposta-img"
           style="width:${w}; max-width:${w}; height:auto; display:inline-block;"
           onerror="this.onerror=null; this.src='${base}';">
    </div>
  `;
};

export const questoesIntro = [
  {
    pergunta: "Isso está inteiro ou dividido?",
    img: pathIntro + "img07intro.png",
    opcoes: ["Inteiro", "Dividido"],
    correta: 0,
    resolucao: `A figura apresentada está completa, sem estar separada em partes independentes. Portanto, ela está inteira.`
  },
  {
    pergunta: "Em quantas partes foi dividido?",
    img: pathIntro + "img08intro.png",
    opcoes: ["1", "2", "3", "6"],
    correta: 1,
    resolucao: `Observe a figura: ela foi dividida em 2 partes iguais.`
  },
  {
    pergunta: `Na fração ${f(4,9)}, qual é o denominador?`,
    img: pathIntro + "img09intro.png",
    opcoes: ["4", "9", "2", "5"],
    correta: 1,
    resolucao: `O denominador é o número que fica na parte de baixo da fração. Portanto, o denominador é 9.`
  },
  {
    pergunta: "Se você tem 2 parte de 3, qual é a fração?",
    img: pathIntro + "img10intro.png",
    opcoes: [f(3,3), f(3,2), f(2,3), f(6,9)],
    correta: 2,
    resolucao: `O numerador representa as partes que temos (2) e o denominador representa o total de partes (3). Logo, a fração é ${f(2,3)}.`
  },
  {
    pergunta: "Qual fração representa a última figura?",
    img: pathIntro + "img11intro.png",
    opcoes: [f(5,5), f(5,4), f(5,2), f(4,5)],
    correta: 3,
    resolucao: `A figura mostra 4 partes pintadas de um total de 5 partes iguais. Portanto, a fração é ${f(4,5)}.`
  }
];

export const questoesComp = [
  {
    pergunta: `Um bolo foi dividido em 4 partes iguais. João comeu ${f(1,4)} e Maria comeu ${f(2,4)}. Que fração do bolo foi comida ao todo?`,
    img: pathComp + "comp01.png",
    opcoes: [f(3,8), f(2,4), f(3,4), f(1,4)],
    correta: 2,
    resolucao: resolucaoCompImgHTML(1)
  },
  {
    pergunta: `Ana bebeu ${f(1,5)} de uma garrafa de suco pela manhã e ${f(2,5)} à tarde. Quantas partes da garrafa ela bebeu no total?`,
    img: pathComp + "comp02.png",
    opcoes: [f(2,5), f(1,5), f(3,10), f(3,5)],
    correta: 3,
    resolucao: resolucaoCompImgHTML(2)
  },

  // ✅ Chocolate: imagem 40% maior
  {
    pergunta: `Um chocolate foi dividido em 8 pedaços iguais. Pedro comeu ${f(3,8)}. Que fração do chocolate sobrou?`,
    img: pathComp + "comp03.png",
    opcoes: [f(1,8), f(5,8), f(3,8), f(8,5)],
    correta: 1,
    resolucao: resolucaoCompImgHTML(3, 1.4)
  },

  // ✅ fita dividida em 6 partes: corretas 3/6 e 1/3
  {
    pergunta: `Em uma fita dividida em 6 partes iguais, foram usadas ${f(2,6)} para um trabalho e ${f(1,6)} para outro. Qual fração da fita foi usada ao todo?`,
    img: pathComp + "comp04.png",
    opcoes: [f(1,6), f(1,3), f(3,6), f(2,6)],
    correta: [1, 2],
    resolucao: resolucaoCompImgHTML(4)
  },

  // ✅ bolo dividido em 10 partes: imagem 40% maior (corretas 6/10 e 3/5)
  {
    pergunta: `Um bolo foi dividido em 10 partes iguais. Foram comidas ${f(4,10)} depois do almoço. Que fração do bolo ainda resta?`,
    img: pathComp + "comp05.png",
    opcoes: [f(5,10), f(3,5), f(4,10), f(6,10)],
    correta: [1, 3],
    resolucao: resolucaoCompImgHTML(5, 1.4)
  },

  // ✅ 2 formas de gelo: MODIFICADA conforme pedido (corretas 12/8 e 3/2)
  {
    pergunta: `Havia 2 formas de gelo, cada uma com 8 cubos. Durante o dia, foi usado ${f(4,8)} de uma forma de gelo. Quantas formas de gelo restaram ao todo?`,
    img: pathComp + "comp06.png",
    opcoes: [f(12,8), f(3,2), f(3,8), f(2,8)],
    correta: [0, 1],
    resolucao: resolucaoCompImgHTML(6, 1.4)
  },

  // ✅ PEDIDO: imagem da resposta 40% maior (rep07)
  {
    pergunta: `Em uma caixa de lápis, ${f(1,4)} foi usado na aula de Matemática e ${f(1,6)} na aula de Artes. Que fração da caixa de lápis foi usada ao todo?`,
    img: pathComp + "comp07.png",
    opcoes: [f(7,12), f(2,10), f(5,12), f(1,10)],
    correta: 2,
    resolucao: resolucaoCompImgHTML(7, 1.4)
  },

  // ✅ Caixa de suco: imagem 40% maior
  {
    pergunta: `Uma caixa estava cheia de suco. Após o almoço, foram consumidos ${f(2,3)} da caixa. Que fração do suco restou?`,
    img: pathComp + "comp08.png",
    opcoes: [f(2,3), f(1,6), f(3,2), f(1,3)],
    correta: 3,
    resolucao: resolucaoCompImgHTML(8, 1.4)
  },

  // ✅ PEDIDO: imagem da resposta 40% maior (rep09)
  // ✅ Carlo caminhou: corretas 5/10 e 1/2
  {
    pergunta: `Carlo caminhou ${f(2,5)} de sua meta diária pela manhã e ${f(1,10)} à tarde. Que fração do percurso ele caminhou ao todo?`,
    img: pathComp + "comp09.png",
    opcoes: [f(3,10), f(5,10), f(1,2), f(3,5)],
    correta: [1, 2],
    resolucao: resolucaoCompImgHTML(9, 1.4)
  },

  // ✅ pacote 15 bolachas (correta 9/15)
  {
    pergunta: `Um pacote tinha 15 bolachas. Durante o lanche, João comeu ${f(6,15)} das bolachas e Maria comeu ${f(3,15)}. Que fração das bolachas eles comeram ao todo?`,
    img: pathComp + "comp10.png",
    opcoes: [f(3,15), f(6,15), f(18,15), f(9,15)],
    correta: 3,
    resolucao: resolucaoCompImgHTML(10)
  },

  // ✅ PEDIDO: imagem da resposta 40% maior (rep11)
  {
    pergunta: `Um tanque de água teve ${f(1,3)} de sua capacidade usada pela manhã e ${f(1,4)} à tarde. Que fração da água foi utilizada no total?`,
    img: pathComp + "comp11.png",
    opcoes: [f(2,7), f(7,12), f(1,12), f(7,7)],
    correta: 1,
    resolucao: resolucaoCompImgHTML(11, 1.4)
  },

  // ✅ Criança com R$10: imagem 40% maior
  {
    pergunta: `Uma criança tinha R$ 10,00, divididos em 10 partes iguais. Ela gastou ${f(3,10)} desse dinheiro comprando um lanche. Que fração do dinheiro ainda restou?`,
    img: pathComp + "comp12.png",
    opcoes: [f(10,3), f(7,10), f(1,10), f(3,10)],
    correta: 1,
    resolucao: resolucaoCompImgHTML(12, 1.4)
  },

  // ✅ PEDIDO: imagem da resposta 40% maior (rep13)
  {
    pergunta: `Em uma prova, Maria acertou ${f(3,5)} das questões na primeira parte e ${f(1,10)} na segunda parte. Ao juntar as duas partes, quantas questões Maria acertou no total?`,
    img: pathComp + "comp13.png",
    opcoes: [f(3,10), f(4,15), f(7,10), f(2,5)],
    correta: 2,
    resolucao: resolucaoCompImgHTML(13, 1.4)
  },

  // ✅ PEDIDO: imagem da resposta 40% maior (rep14)
  {
    pergunta: `Ana percorreu ${f(1,4)} do caminho pela manhã e ${f(1,2)} à tarde. Que fração do caminho ela percorreu ao todo?`,
    img: pathComp + "comp14.png",
    opcoes: [f(2,4), f(1,6), f(3,4), f(1,2)],
    correta: 2,
    resolucao: resolucaoCompImgHTML(14, 1.4)
  }
];
