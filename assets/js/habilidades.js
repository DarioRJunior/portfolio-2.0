const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
    '<h3>HTML</h3> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
    '<h3>CSS</h3> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br><br>',
    '<h3>JavaScript</h3> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p>',
    '<h3>PHP</h3> <br> <p>é uma linguagem de script open source de uso geral, muito utilizada, e especialmente adequada para o desenvolvimento web e que pode ser embutida dentro do HTML.</p> <br>',
    '<h3>Github</h3> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>',
    '<h3>Figma</h3> <br> <p>É um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web.</p> <br>'
]
skills.forEach(  (elemento, index) => {
let index1 = index;
elemento.addEventListener('mouseover', () => {
    descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
} )
elemento.addEventListener('mouseout', () => {
descricao.innerHTML = 'Passe o Mouse ou Clique nos icones para ver a descrição!';
} )
} );
