const BotaoApagar = ()=>{
    const botaoDeleta = document.createElement('button');       
    botaoDeleta.innerText = 'Apagar'

    botaoDeleta.addEventListener('click', apagarRegistro);
    
    return botaoDeleta;
}

const apagarRegistro = (evento) => {
    const botaoClicado = evento.target

    const linhaInteira = botaoClicado.parentElement.parentElement;
                         //<button>       <td>          <tr>
                         
    // console.log(linhaInteira);

    linhaInteira.remove();

    return botaoClicado;

}

export default BotaoApagar