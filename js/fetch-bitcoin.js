export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(bitcoin => {
    const btcReais = bitcoin.BRL.buy.toLocaleString('pt-BR')
    const btcDollar = bitcoin.USD.buy.toLocaleString('pt-BR')

    const valorReais = document.getElementById('btc-reais')
    const valorDollar = document.getElementById('btc-dollar')

    valorReais.innerText = `1 BTC = R$ ${btcReais}`
    valorDollar.innerText = `1 BTC = US$ ${btcDollar}`
  })
  .catch(function(err){
    console.error('Não foi possível achar a informação', err)
  })
}