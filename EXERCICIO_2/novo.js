const novoPaciente = document.querySelector('[data-form-btn-adiciona]'); //usando um data- (data attribute) para capturar o elemento

(() => { //encapsulando as funções para elas não tenham acesso global

    novoPaciente.addEventListener('click', (eventoDoClick) => { //quando o evento de click é "escutado" o navegador envia um objeto, por 
                                                                // "debaixo dos panos", como parâmetro contendo os dados desse evento.
                                                                // Basta nomear o objeto passado como parâmetro. 
                                                                // Aqui useio nome de eventoDoClick.

        eventoDoClick.preventDefault();  //previne o evento padrão de um form que é enviar dados para um servidor web. 
                                        // Para não ocorrer o refresh da página
        const formNovoPacient = document.querySelector('[data-form-novo-pacient]');//cria uma váriavel para receber os dados form Novo Paciente.

        const objNovoPacient = montaObjetoPaciente(formNovoPacient); //Chama a função que cria um objeto com os dados recebidos do form Novo Paciente.

        const nome_input = objNovoPacient.nome; //Aqui criei as variáveis para os atributos do objeto recebido
        const peso_input = objNovoPacient.peso;
        const altura_input = objNovoPacient.altura;
        const imc_input = objNovoPacient.imc;
        // const btnApagar =  document.createElement('button');
        // btnApagar.innerHTML = 'Apagar';
        
        // console.log(btnApagar);
        
        const tabela = document.querySelector('[data-linha-pacient]'); //criei uma váriavel para receber o seletor do DOM da tabela Paciente.   

        //Aqui criei uma varável para os elementos <td>, 
        //que conterão os dados dos atributos do novo paciente e mais tarde serão 
        //apensados a uma nova linha <tr> da tabela.
        const conteudo = `<td class="nome">${nome_input}</td>
                        <td class="imc">${imc_input}</td>
                        <td class="peso">${peso_input}</td>
                        <td class="altura">${altura_input}</td>
                        <td class = "delete" > <button id="delete">Apagar</button> </td>`;

        const novaLinha = document.createElement('tr'); //Aqui criei um elemento <tr> nova linha que receberá seu elmento filho
                                                        // a <td> criada anteriormente;

        novaLinha.classList.add('linhas-pacientes'); //atribuí a mesma classe css a nova linha criada

        novaLinha.innerHTML = conteudo; //Aqui atribuímos a variável conteúdo (que contém as <td> preenchidas com os dados)
                                        // ao html <tr> da nova linha .

        tabela.appendChild(novaLinha); //Apensei a nova linha a tabela.
        

        formNovoPacient.reset(); //Reset do formulário limpando os campos.
        
        
    });

    function montaObjetoPaciente(form){
        
        var objPaciente = { //criando um objeto paciente
            nome: form.inputNome.value, 
            peso: form.inputPeso.value,
            altura: form.inputAltura.value,
            imc: calculaImc(form.inputPeso.value, form.inputAltura.value)
            
        }
        return objPaciente; //retorna o objeto
        
    }

    function calculaImc(peso, altura){
        let imc = 0;
        cm = altura / 100
        imc = peso / (cm * cm);

        return imc.toFixed(2);
    }

    const botaoDelete = document.querySelector('#delete')
                
    botaoDelete.addEventListener("click", function(event){//evento que escuta o clique.
        console.log(event);
        console.log(botaoDelete);
        console.log(event.target.parentElement.parentElement);        
    
                event.target.parentElement.parentElement.remove() 
                                
    });	    

    
        
})()