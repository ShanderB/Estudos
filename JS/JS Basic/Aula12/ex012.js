var horarioClient = new Date();
var hora = horarioClient.getHours();
console.log(`Agora são exatamente ${hora} horas`);

if (hora < 12) {
    console.log("Bom dia");
} else if (hora <= 18) {
    console.log("Boa Tarde.");
} else {
    console.log("Boa noite.");
}