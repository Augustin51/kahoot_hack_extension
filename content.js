
/*function retrieveAnswers() {
    retrieveAnswers();
}*/
   
// const answers = document.querySelectorAll("[data-functional-selector^='answer-']");



function retrieveAnswers() {
    const answers = [];
    let i = 0;
    let element;
    
    // Utilise une boucle `while` pour éviter l'erreur sur `null`.
    while ((element = document.querySelector(`[data-functional-selector='answer-${i}']`)) !== null) {
        answers.push(element);
        i++;
    }
    console.log(answers);
    
    if (answers[2]) {
        answers[2].style.borderRadius = '50%';
    } else {
        console.error("L'élément answers[2] n'existe pas.");
    }
}
retrieveAnswers();
