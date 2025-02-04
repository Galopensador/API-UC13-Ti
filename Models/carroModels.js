let carros2025 = [
    {   
        nome: "Ferrari",
        sigla: "FER",
        velocidadeMaxima: 340,
        potencia: 800,
        consumo: 5.5,
    },

    {
        nome: "Bugatti Chiron",
        sigla: "CHIRON",
        velocidadeMaxima: 420,
        potencia: 1500,
        consumo: 12.0,
    },

    {   
        nome: "lamborghini",
        sigla: "LAMBO",
        velocidadeMaxima: 345,
        potencia: 900,
        consumo: 5.6,
        

    },
    
    
    {
        nome: "Porsche 911",
        sigla: "P911",
        velocidadeMaxima: 320,
        potencia: 650,
        consumo: 8.1,
        
    },
    
    {
        nome: "Tesla Model S",
        sigla: "TESLA",
        velocidadeMaxima: 250,
        potencia: 1020,
        consumo: 18.5,
        
        
    },

    {
        nome: "McLaren 720S",
        sigla: "MCLAREN",
        velocidadeMaxima: 341,
        potencia: 720,
        consumo: 10.5,
        
        
    },

    {
        nome: "Aston Martin DB11",
        sigla: "DB11",
        velocidadeMaxima: 308,
        potencia: 608,
        consumo: 11.0,
      
       
    },
    
    {
        nome: "Chevrolet Corvette Stingray",
        sigla: "C7",
        velocidadeMaxima: 312,
        potencia: 495,
        consumo: 7.9,
        
    }

];
// Função que retorna todos os carros no Arrey
export const getAllcarros = () => carros2025;

// Função que retorna um carro especifico pelo indentificador (SIGLA)
export const getCarroBySigla = (sigla) => {
    return carros2025.find(carro => carro.sigla === sigla);
};

// Função que adiciona um novo carro no Arrey
export const createCarro = (novoCarro) =>{
    carros2025.push(novoCarro); // Adiciona o novo carro ao final do Arrey
};

// Função que atualiza as informações de um carro existente, com base na sigla
export const updateCarro = (sigla, dadosAtualizados) => {
    //Busca o indice do carro no arrey
    const carroIndex = carros2025.findIndex(carro => carro.sigla === sigla);
    if(carroIndex === -1) return null;
    //Atualiza o carro com as informações fornecidas
    carros2025[carroIndex] = {...carros2025[carroIndex],...dadosAtualizados};
    return carro[carroIndex];
};

//Função de excluir um carro do arrey
export const deleteCarro = (sigla) => {
    //Busca o indice do carro no arrey usando a sigla
    const carroIndex = carros2025.findIndex(carro => carro.sigla);
    if(carroIndex === -1) return null;
    //Remove o carro da lista e retorna o carro removido
    const[carroRemovido] = carros2025.splice(carroIndex, 1);
    return carroRemovido 
}