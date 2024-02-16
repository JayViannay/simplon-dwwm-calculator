console.log('index.js loaded')
// gerer la soumission (event submit + preventDefault)
let form = document.getElementById("f1");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // récupérer les entrées utilisateurs & gérer les virgules 
    const distance = parseFloat(document.getElementById('distance').value.replace(/,/, '.')); // travail-domicile 
    const consumption = parseFloat(document.getElementById('consumption').value.replace(/,/, '.')); // consommation au 100l
    const price = parseFloat(document.getElementById('price').value.replace(/,/, '.')); // prix carburant au L

    if (isNaN(distance) || isNaN(consumption) || isNaN(price)) {
        alert('Veuillez saisir des valeurs valides')
        return;
    }

    // calculs consommation à la semaine
    const weekcost = ((distance * consumption) / 100 * price) * 5;
    // calculs consommation au mois
    const monthcost = weekcost * 4;

    // calcul carburant par semaine
    const weekfuel = ((distance * consumption) / 100) * 5;
    // calcul carburant par mois
    const monthfuel = weekfuel * 4;

    // affichage des résultats
    let htmlTarget = document.getElementById('result1');
    htmlTarget.innerHTML = `<p>Coût de votre trajet par semaine : ${weekcost.toFixed(2)} €</p>`;
    htmlTarget.innerHTML += `<p>Coût de votre trajet par mois : ${monthcost.toFixed(2)} €</p>`;
    htmlTarget.innerHTML += `<p>Consommation de carburant par semaine : ${weekfuel.toFixed(2)} L</p>`;
    htmlTarget.innerHTML += `<p>Consommation de carburant par mois : ${monthfuel.toFixed(2)} L</p>`;
});