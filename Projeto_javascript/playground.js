const alunos = [
    {
    nome: 'Sofia',
    nota: 9,
    turma: '1B'
},
{   nome: 'João',
    nota: 9,
    turma: '1B'},
{   nome: 'Paulo',
    nota: 6,
    turma: '3C'},
{   nome: 'Pedro',
    nota: 3,
    turma: '3C'},
];

function alunosAprovados(arr, media){
    let aprovados = [];
    
    for(let i =0; i < arr.lenght; i++ ){
        const {nota, nome} = arr[i];
        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));