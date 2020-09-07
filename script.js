function resultado () {
    let ava1 = document.getElementById('ava1').value
    let ava2 = document.getElementById('ava2').value
    let a2 = document.getElementById('a2').value
    let a3 = document.getElementById('a3').value
    let res = document.getElementById('res')
    let img = document.getElementById('imagem')
    let a1 = (parseFloat(ava1) + parseFloat(ava2)) / 2
    let media = (parseFloat(a1) + parseFloat(a2) + parseFloat(a3)) / 2
    if (ava1 == '') {
        alert(`O campo Ava-1 está vazio! Se você não realizou a avaliação coloque 0.`)
        document.getElementById('ava1').focus()
        return false
    }
    if (ava2 == '') {
        alert(`O campo Ava-2 está vazio! Se você não realizou a avaliação coloque 0`)
        document.getElementById('ava1').focus()
        return false
    }
    if (a2 == '') {
        alert(`O campo A2 está vazio! Se você não realizou a avaliação coloque 0`)
        document.getElementById('ava1').focus()
        return false
    }
    if (a3 == '') {
        alert(`O campo A3 está vazio! Se você não realizou a avaliação coloque 0`)
        document.getElementById('ava1').focus()
        return false
    }
    if(isNaN(ava1) == true || isNaN(ava2) == true || isNaN(a2) == true || isNaN(a3) == true){
        alert('[Erro] Por favor, insira apenas numeros')
        return false
    }

    if(media >= 6) {
        res.innerHTML = `Parabéns, você foi APROVADO com ${media.toFixed(1)}!`
        img.src = 'Imagens/lista.png'
        
    } else {
        res.innerHTML = `Infelizmente você não alcançou a média, sua nota foi ${media.toFixed(1)}!`
        img.src = 'Imagens/pare.png'
    }
}