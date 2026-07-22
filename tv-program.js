
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

  printDom(data);
  let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/g1-0502-j.json';

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
let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

