let url = 'http://ddragon.leagueoflegends.com/cdn/12.19.1/data/pt_BR/champion.json';

fetch(url)
.then(res => res.json())
.then(out =>
  console.log('Checkout this JSON! ', out))
.catch(err => { throw err });