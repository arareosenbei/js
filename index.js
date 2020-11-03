// 変数
// let unko = 'Hello World!'; 

// unko = 'Hello World2!!';

// 定数
// const bigUnko = 'He..Hell...Hello World!';
// 定数は書き換えができない

// bigUnko = 'Hello World2!';

// console.log(unko);

// console.log(bigUnko);

// 配列
const inoki = ['いーち', 'にーい', 'さーん', 'ダーー！！']
// 　配列は０から
// console.log(inoki[0]);

// ループ文
// let index = 0
// while (index < inoki.length) { // =4
// 繰り返したい命令　++数字を１足す
// console.log(inoki[index]);
// index++;  // index =5
// }
// 配列とループ分は組み合わせれる

// if (inoki.length > 5) {
//   console.log('ボンバイエ！');
// } else {
//   console.log('ボンバ...！');
// }

// 関数
const test = (arg) => {
  // ここに実行したい命令を書く
  if (inoki.length > arg) {
    console.log('ボンバイエ！');
  } else {
    console.log('ボンバ...！');
  }
};

// オブジェクト
const unko2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  goToilet: () => {
    console.log('Hello World');
  }
};

// 上部にアラート表示
// window.alert('Hello World');

// console.log(document.getElementsByTagName('button')[0]);

document.getElementsByTagName('button')[0].addEventListener('click', () => {
  // 命令を書く
  window.alert('Hello World!');
});
