// 1/1-12/31までコンソール上に表示する

// 月のリストと各月の日数を定義
const month_list = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];

// （1）forループで配列要素を個別に取り出す
for (let i = 0; i < month_list.length; i++) {
    // month_list[i]で、その位置にある文字を取り出す
    console.log(month_list[i]);
}

// （2）インデックスを使って個別に月を取り出す
console.log(month_list[0]);  // "1月" ... インデックス0番目は1月
console.log(month_list[1]);  // "2月" ... インデックス1番目は2月
console.log(month_list[2]);  // "3月" ... インデックス2番目は3月

// （3）配列メソッドforEachと関数宣言functionで書く
month_list.forEach(function(month) {
    console.log(month);
});

// （4）配列メソッドforEachとアロー関数（省略形）で書く
month_list.forEach(month => {
        console.log(month);
    });

