const herois = [
    { nome: "Wolverine", xp: 7500 },
    { nome: "Tempestade", xp: 3500 },
    { nome: "Scott", xp: 12000 },
    { nome: "Vampira", xp: 800 },
    { nome: "Mística", xp: 6500 }
];

for (let i = 0; i < herois.length; i++) {
    let nomeHeroi = herois[i].nome;
    let xpHeroi = herois[i].xp;
    let nivel;

    if (xpHeroi < 1000) {
        nivel = "Ferro";
    } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
        nivel = "Bronze";
    } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
        nivel = "Prata";
    } else if (xpHeroi >= 6001 && xpHeroi <= 7000) {
        nivel = "Ouro";
    } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
        nivel = "Platina Diamante";
    } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
        nivel = "Ascendente";
    } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
        nivel = "Imortal";
    } else if (xpHeroi >= 10001) {
        nivel = "Radiante";
    } else {
        nivel = "Indefinido";
    }

    console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivel);
}
