var button = document.querySelector('#magicButton');
var msg = document.querySelector('#output')

var mensagem = ["Você é capaz de grandes coisas!",
    "Acredite nos seus sonhos.",
    "Hoje é um ótimo dia para aprender algo novo!",
    "A prática leva à perfeição.",
    "Confie no processo.",
    "Cada erro é uma lição.",
    "Persistência é a chave do sucesso.",
    "Não desista, você está quase lá!",
    "Seu esforço vale a pena.",
    "Seja a mudança que você deseja ver no mundo."]

    var color = [
        "#FFCDD2", // Red Light
        "#F8BBD0", // Pink Light
        "#E1BEE7", // Purple Light
        "#D1C4E9", // Deep Purple Light
        "#C5CAE9", // Indigo Light
        "#BBDEFB", // Blue Light
        "#B3E5FC", // Light Blue Light
        "#B2EBF2", // Cyan Light
        "#B2DFDB", // Teal Light
        "#C8E6C9", // Green Light
        "#DCEDC8", // Light Green Light
        "#F0F4C3", // Lime Light
        "#FFF9C4", // Yellow Light
        "#FFECB3", // Amber Light
        "#FFE0B2", // Orange Light
        "#FFCCBC"  // Deep Orange Light
    ]



    button.addEventListener('click' , function() {
    const arrayAleatory = Math.floor(Math.random() * mensagem.length)
    const colorArray = Math.floor(Math.random() * color.length)
    document.body.style.backgroundColor = color[colorArray]
    
    msg.innerHTML = (mensagem[arrayAleatory])
})

