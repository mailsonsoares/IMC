const novoPaciente = document.querySelector('[data-form-btn-adiciona]'); //usando um data- (data attribute) para capturar o elemento

(() => { //encapsulando as funções para que elas não tenham acesso global

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
        
        const tabela = document.querySelector('[data-linha-pacient]'); //criei uma váriavel para receber o seletor do DOM da tabela Paciente.   

        //Aqui criei uma varável para cada elemento <td> da linha, 
        //que conterão os dados dos atributos do novo paciente e mais tarde serão 
        //apensados a uma nova linha <tr> da tabela.
        

        const conteudoNome = document.createElement('td');
        conteudoNome.innerHTML = nome_input;
        
        const conteudoImc = document.createElement(`td`);
        conteudoImc.innerHTML = imc_input;
        conteudoImc.classList.add('numerico'); //atribuí a classe css numérico a nova célula criada


        const conteudoPeso = document.createElement(`td`);
        conteudoPeso.innerHTML = peso_input;
        conteudoPeso.classList.add('numerico'); //atribuí a classe css numérico a nova célula criada

        const conteudoAltura = document.createElement(`td`);        
        conteudoAltura.innerHTML = altura_input;
        conteudoAltura.classList.add('numerico'); //atribuí a classe css numérico a nova célula criada

        const conteudoAcao = document.createElement(`td`);    
        conteudoAcao.classList.add('acao'); //atribuí a classe css acao a nova célula criada
        conteudoAcao.appendChild(CriaBotaoApagar());


        const novaLinha = document.createElement(`tr`); //Aqui criei um elemento <tr> nova linha que receberá seu elmento filho
                                                        // a <td> criada anteriormente;

        novaLinha.classList.add('linhas-pacientes'); //atribuí a classe css a nova linha criada

         //Aqui apensamos as variáveis contendo os elementos <td> 
         // e seus conteúdos a nova linha <tr>.

        novaLinha.appendChild(conteudoNome);
        novaLinha.appendChild(conteudoImc);
        novaLinha.appendChild(conteudoPeso);
        novaLinha.appendChild(conteudoAltura);
        novaLinha.appendChild(conteudoAcao);

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


    const CriaBotaoApagar = ()=>{
        const botaoDeleta = document.createElement('button');       
        botaoDeleta.innerText = 'Apagar'

        botaoDeleta.addEventListener('click', ApagarRegistro);
        
        return botaoDeleta;
    }

    const ApagarRegistro = (evento) => {
        const botaoClicado = evento.target

        const linhaInteira = botaoClicado.parentElement.parentElement;
                             //<button>       <td>          <tr>
                             
        // console.log(linhaInteira);

        linhaInteira.remove();

        return botaoClicado;

    }

})()