    let jacket = Number(document.getElementById('jacket').textContent);
    let shoes = Number(document.getElementById('shoes').textContent);
    let tshirt = Number(document.getElementById('tshirt').textContent);
    let shorts = Number(document.getElementById('shorts').textContent);

    function calcSum() {

        result = jacket + shoes + tshirt + shorts;
        document.getElementById('result').innerHTML = result;
    }
    window.onload = calcSum;

    function calcDisc() {
        result = result / 100 * 80;
        jacket = jacket / 100 * 80;
        shoes = shoes / 100 * 80;
        tshirt = tshirt / 100 * 80;
        shorts = shorts / 100 * 80;
        document.getElementById('result').innerHTML = result;
        document.getElementById('jacket').innerHTML = jacket;
        document.getElementById('shoes').innerHTML = shoes;
        document.getElementById('tshirt').innerHTML = tshirt;
        document.getElementById('shorts').innerHTML = shorts;
    }