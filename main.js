const form1 = document.getElementById('f1');
const form2 = document.getElementById('f2');

form1.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form 1 submitted');

    // Calcul :
    // Utilisez la distance et la consommation moyenne pour estimer la quantité de carburant utilisée 
    // par semaine et par mois. 
    // Multipliez ensuite par le prix du carburant pour obtenir les coûts associés.

    // Récupération des valeurs
    const distance = form1.elements.distance.value;
    const consommation = form1.elements.consumption.value;
    const prix = form1.elements.price.value;

    // Calculs
    const carburantSemaine = (distance / 100 * consommation) * 5;
    const carburantMois = carburantSemaine * 4;
    const coutSemaine = carburantSemaine * prix;
    const coutMois = carburantMois * prix;

    // Affichage
    const result = document.getElementById('result1');
    result.innerHTML = `
        <p>Carburant utilisé par semaine : ${carburantSemaine} L</p>
        <p>Carburant utilisé par mois : ${carburantMois} L</p>
        <p>Coût par semaine : ${coutSemaine} €</p>
        <p>Coût par mois : ${coutMois} €</p>
    `;

});

form2.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form 2 submitted');
});