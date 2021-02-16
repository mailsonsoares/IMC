const novoPaciente = document.querySelector('[data-form-btn-adiciona]'); //usando um data- (data attribute) para capturar o elemento


novoPaciente.addEventListener('click', (eventoDoClick) => { //quando o evento de click é "escutado" o navegador passa um objeto como parâmetro 
                                                            //contendo os dados desse evento.
                                                            //Basta nomear o objeto passado como parâmetro. 
                                                            //Aqui useio nome de eventoDoClick.

    eventoDoClick.preventDefault();  //previne o (refresh) evento padrão de um form que é enviar dados para um servidor web
    const formNovoPacient = document.querySelector('[data-form-novo-pacient]'); //captura o form

    // console.log(formNovoPacient);

    const objNovoPacient = montaObjetoPaciente(formNovoPacient); //Chama a função que cria um objeto com o form passado.

    // console.log(objNovoPacient); 

    const nome_input = objNovoPacient.nome;
    const peso_input = objNovoPacient.peso;
    const altura_input = objNovoPacient.altura;
    const imc_input = objNovoPacient.imc;
    const gordura_input = objNovoPacient.gordura;
    
    const tabela = document.querySelector('[data-tabela-pacient]'); //captura tabela    

    const conteudo = `<td class="nome">${nome_input}</td>
                      <td class="imc">${imc_input}</td>
                      <td class="peso">${peso_input}</td>
                      <td class="altura">${altura_input}</td>
                      <td class="gordura">${gordura_input}</td>
                      <td class="info" id="info"> <button> Info </button> </td>
                      <td class="delete" id="delete"> <button> Del </button> </td>`;

    const novaLinha = document.createElement('tr'); //criando nova linha;

    novaLinha.classList.add('linhas-pacientes'); //atribuindo a mesma classe css a linha

    novaLinha.innerHTML = conteudo;

    tabela.appendChild(novaLinha);
    
    
});

function montaObjetoPaciente(form){
	
	var objPaciente = { //criando um objeto paciente
		nome: form.inputNome.value, 
		peso: form.inputPeso.value,
		altura: form.inputAltura.value,
        imc: calculaImc(form.inputPeso.value, form.inputAltura.value),
		gordura: form.inputGordura.value
		// imc: calculoImc(form.peso.value,form.altura.value)
	}
	return objPaciente; //retorna o objeto
	
}

function calculaImc(peso, altura){
    let imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
