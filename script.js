//console.log(1)
let zina = dokoment.querySelector('.zina');
let zinas = dokoment.querySelector('.cataZina');

function sutitZinu()
{
    console.log('sutitZinu()darbojas');
    zinas.innerHTML = zinas.innerHTML+ '<br>' + zina.value;
}
async function ieladeChataZinas()
{
    let datiNoServera = await fetch('chataZinas.txt');
    let dati = await datiNoServera.text;
    //console.log(dati);
    zinas.innerHTML = dati;
}