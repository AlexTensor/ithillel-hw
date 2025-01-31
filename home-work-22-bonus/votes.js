/*
  Создать функцию, которая создает объект опросов - голосовалок.
  Принимает массив опций для голосования. Возвращает объект.

  Метод vote() принимает опцию. Если опция существует, поднимает ее счетчик на 1. Возвращает текущее количество голосов.
  Если опции нет, возвращает текст Vote option Internet Explorer doesn't exist

  Метод showVotes() выводит текущие результаты в виде оции и звездочек. Такой себе псевдо-график.
  Звездочки должны начинаться с одной линии, чтобы можно было оценить, кто кого обогнал

  Метод iterate принимает коллбек и выполняет его для каждой опции.
  коллбек вызывается с двумя параметрами: название опции и количество голосов

 */

function createPoll(voteList) {
  const voteObj = voteList.reduce((acc, cur) => {
    acc[cur.toLowerCase()] = 0;
    return acc;
  }, {});
  function vote(text) {
    const textKey = text.toLowerCase();
    if(textKey in voteObj) {
      voteObj[textKey] = voteObj[textKey] += 1;
      return voteObj[textKey];
    }else{
      return `Vote option ${textKey} doesn't exist`;
    }
  }
  function showVotes() {
    const keysLength = Object.keys(voteObj).map(el => el.length);
    const maxKeyLengh = Math.max.apply(null, keysLength);
    Object.keys(voteObj).forEach((key) => {
      console.log(`${key.padEnd(maxKeyLengh, ' ')} ${'*'.repeat(voteObj[key])}`);
    })
  }
  function iterate(callback){
    Object.keys(voteObj).forEach((key) => {
      callback(key, voteObj[key]);
    });
  }
  return {
    vote,
    showVotes,
    iterate
  }
}

const poll = createPoll(['chrome', 'firefox', 'OPERA', 'safari', 'edge']);

console.log(poll.vote('chrome'));
console.log(poll.vote('chrome'));
console.log(poll.vote('chrome'));
console.log(poll.vote('CHROME'));
console.log(poll.vote('Chrome'));
console.log(poll.vote('firefox'));
console.log(poll.vote('firefox'));
console.log(poll.vote('FIREFOX'));
console.log(poll.vote('opera'));
console.log(poll.vote('edge'));
console.log(poll.vote('Internet Explorer'));

poll.showVotes();
/*
  chrome  *****
  firefox ***
  opera   *
  safari
  edge    *
 */

poll.iterate((option, count) => {
  console.log(`${option} -> ${count}`);
});

/*
  chrome -> 5
  firefox -> 3
  opera -> 1
  safari -> 0
  edge -> 1
 */