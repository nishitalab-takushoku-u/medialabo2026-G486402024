
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  for(let n of data.list.g1){
    console.log(n.start_time);
    console.log(n.end_time);
    console.log(n.service.name);
    console.log(n.title);
    console.log(n.subtitle);
    console.log(n.content);
    console.log(n.act);
  }
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {

  let kesu = document.querySelector('div#result');
  if (kesu) {
    kesu.remove();
  }

  let l = document.createElement('div');
  l.setAttribute('id', 'result');

  let u = document.querySelector('body');
  u.insertAdjacentElement('beforeend', l)

  let k = document.createElement('p');
  k.setAttribute('class', 'hohoho');
  k.textContent = '検索結果は' + data.list.g1.length + '件';

  l.insertAdjacentElement('beforeend',k);

  let i = 1;

  for (let n of data.list.g1) {

    let p = document.createElement('p');
    p.textContent = '　';
    l.insertAdjacentElement('beforeend', p);

    let li = document.createElement('li');
    li.textContent = '検索結果' + i + '件目';
    l.insertAdjacentElement('beforeend', li);

    let day = document.createElement('p');
    day.setAttribute('class', 'day');
    day.textContent = n.start_time + '～' + n.end_time;
    l.insertAdjacentElement('beforeend', day);

    let h2 = document.createElement('h2');
    h2.textContent = n.title;
    l.insertAdjacentElement('beforeend', h2);

    let h5 = document.createElement('h5');
    h5.textContent = n.subtitle;
    l.insertAdjacentElement('beforeend', h5);

    p = document.createElement('p');
    p.textContent = '　';
    l.insertAdjacentElement('beforeend', p);

    let div = document.createElement('div');
    div.setAttribute('id', 'popo');
    l.insertAdjacentElement('beforeend', div);

    let p1 = document.createElement('p');
    if (n.act == "") {
      p1.textContent = "番組説明";
    } else {
      p1.textContent = "出演者";
    }
    div.insertAdjacentElement('beforeend', p1);

    let p2 = document.createElement('p');
    if (n.act == "") {
      p2.textContent = n.content;
    } else {
      p2.textContent = n.act;
    }
    div.insertAdjacentElement('beforeend', p2);

    i++;
  }
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

  let moji = document.querySelector('input[list="tyan-lists"]').value;
  let service;
  let genre;

  if (document.querySelector('input[value="g1"]').checked) {
    service = "g1";
  }else {
    service = "e1";
  }

  if (moji == "ニュース・報道") {
    genre = "0000";
  }else if (moji == "スポーツ") {
    genre = "0100";
  }else if (moji == "情報・ワイドショー") {
    genre = "0205";
  }else if (moji == "ドラマ") {
    genre = "0300";
  }else if (moji == "音楽") {
    genre = "0409";
  }else if (moji == "バラエティ") {
    genre = "0502";
  }else if (moji == "映画") {
    genre = "0600";
  }else if (moji == "アニメ") {
    genre = "0700";
  }else if (moji == "ドキュメンタリー・教養") {
    genre = "0800";
  }else if (moji == "劇場・公演") {
    genre = "0903";
  }else if (moji == "趣味・教育") {
    genre = "1000";
  }else if (moji == "福祉") {
    genre = "1100";
  }

  let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/'+ service + '-' + genre + '-j.json';;

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);
}


let b = document.querySelector('#kensaku');
b.addEventListener('click', sendRequest);

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
// サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);

    // data.x を出力
    console.log(data.x);

    printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はテレビ番組表のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
