export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(bitcoin => {
    const btcReais = bitcoin.BRL.sell.toFixed(2)
    const btcDollar = bitcoin.USD.sell.toFixed(2)

    const valorReais = document.getElementById('btc-reais')
    const valorDollar = document.getElementById('btc-dollar')

    valorReais.innerText = `1 BTC = R$ ${btcReais}`
    valorDollar.innerText = `1 BTC = US$ ${btcDollar}`
  })
}