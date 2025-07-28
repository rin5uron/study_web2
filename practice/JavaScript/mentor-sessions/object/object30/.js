// 何ができるか、プロパティ、メソッド、インスタンス、オブジェクトを意識する
// プロパティとメソッドの名前が一緒だと、プロパティがメソッドに上書きされちゃう
// メソッドの中でプロパティを使うときは、this.プロパティ名で使う
// constructorメソッドで初期化する

// ①人間クラスを作って複数メソッドで定義する
class Human {
    constructor(name) { //初期値を決める
       this.name = name;
   }


walk(step){
   console.log(this.name + 'は'+ step + '歩歩けます');
}

speak(who){
   console.log(this.name + 'は'+ who + 'とおしゃべりします。');
}

cooking(food){
   console.log('今日の'+ this.name + 'のご飯は'+ food + 'でした。');
}
}
const person1 = new Human('りんちゃん');
const person2 = new Human('うーろんくん');

console.log(person1.name);
console.log(person2.name);

person1.walk(10);
person1.speak('うーろんくん');
person1.cooking('パイナップル');

person2.walk(3);
person2.speak('りんちゃん');
person2.cooking('カレー');



// ② Sweetsクラス：お菓子の情報をまとめ、表示メソッドを用いてコンソールに表示する
// 名前だけ先に設定してから別メソッドで残りをまとめて設定するパターン
class sweets {
    constructor(name) { 
        this.name = name;
        this.taste = "";
        this.flavor = "";
        this.point = "";
        this.place = "";
    }
    printTaste(taste) {
        this.taste = taste;
        console.log(this.name + 'は' + this.taste + 'です');
    }

    printFlavor(flavor) {
        this.flavor = flavor;
        console.log(this.name + 'のお気にりの味は' + this.flavor + 'です');
    }
    printPoint(point) {
        this.point = point;
        console.log(this.flavor + '味のポイントは' + this.point + 'です');
    }

    printBuy(place) {
        this.place = place;
        console.log(this.flavor + 'は' + this.place + 'で買えます');
    }
}

// インスタンスを作る
const sweets1 = new sweets('ハーゲンダッツ'); 
sweets1.printTaste('美味しい');
sweets1.printFlavor('マカダミアナッツ');
sweets1.printPoint('期待以上のマカダミアナッツ感');
sweets1.printBuy('どこでも');

const sweets2 = new sweets('ポテトチップス');
sweets1.printTaste('無限に食べられるお菓子');
sweets1.printFlavor('カルビーのうす塩');
sweets1.printPoint('パリパリ感');
sweets1.printBuy('どこでも');



// ③アイスクラス：複数のアイスクリームを一括説明する
// インスタンス生成時に全プロパティを一気に初期化するパターン：
class FrozenDesert {
    constructor(name,taste,howeat) {
        this.name = name;
        this.type = type;
        this.taste = taste;
        this.howeat = howeat;
    }

describe(){
    console.log(this.name + 'は' + this.type + 'です。'+ this.taste + 'で、' + this.howeat + 'のがおすすめの食べ方です。' );
}
}

const ice1 = new FrozenDesert
('パルム','アイスクリーム','絶妙な口溶けがなんとも言えないの','可愛いフォルムをそっと愛でながらやさしい気持ちで味わう');
const ice2 = new FrozenDesert
('パリッテ','アイスミルク','パリパリチョコが存分に楽しめるの','とにかくパリパリを楽しみたい時に食べる');
const ice3 = new FrozenDesert
('ブルーシールアイス','ラクトアイス','種類が多くて楽しいの','気分によってフレーバーを選ぶ');
const ice4 = new FrozenDesert
('ガリガリくん大人のパイン','氷菓','リアルパイナップルを思わせる食感','パイナップルに想いを馳せて食べる');

// 配列にまとめて一括説明
const menu = [ice1, ice2, ice3, ];
menu.forEach(item => item.describe());



// ④アイスクリームクラス:ブランドごとにアイスクリームをまとめる
// アイスクリームクラスの中にフレーバーオブジェクトを入れる

// アイスクリームブランドクラス（親）
class IcecreamBrand {
    constructor(brand) {
      this.brand = brand;
      this.flavor = []; // フレーバーをしまっておく場所
    }

    // addFlavorメソッドを使用してflavorプロパティを登録できるようにする
    addFlavor({ brand, name, taste, eatfeel }) {
        const flavor = new Flavor({
          brand,name,taste,eatfeel
        });
        this.flavors.push(flavor); // ブランドに登録！
        return flavor; // 外でも使えるように返す
      }
    }

// フレーバークラス（子）
class Flavor {
    constructor({ brand, name, taste, eatfeel }) {
      this.brand = brand;
      this.name = name;
      this.taste = taste;
      this.eatfeel = eatfeel;  
    }

  
    describe() {
      console.log(
        `${this.brand}「${this.name}」味は${this.taste}ます。${eatfeel}気分の時に一緒に食べよ？`);
    }
}

// （ブランドオブジェクト）
const icecream1 = new icecreamBrand('ハーゲンダッツ');
const icecream2 = new icecreamBrand('レディボーデン');
const icecream3 = new icecreamBrand('ピノ');
  
// （インスタンスオブジェクト）

  const macadamia = icecream1.addFlavor({
    brand: 'ハーゲンダッツ',
    name: 'マカダミアナッツ',
    taste: '期待以上のマカダミアナッツ感があり',
    eatfeel: '美味しいナッツが食べた'
  });

  const strawberry = icecream2.addFlavor({
    brand: 'レディボーデン',
    name: 'ストロベリー',
    taste: '程よい甘酸っぱさがクセになり、いくらでも食べられ',
    eatfeel: '思う存分満足するまでアイスクリームを食べたい'
  });

  const pinot = icecream3.addFlavor({
    brand: 'ピノ',
    name: 'アーモンド',
    taste: '３種類の中で私の断トツお気に入りになり',
    eatfeel: 'オレンジは私にちょうだい！あなたが赤と青が食べたい'
  });
  




// // ④人間クラス職業
// 人間クラス
// 戦士なら戦士情報を追加すればいい、魔法使いなら魔法使い情報


// // ⑤カレーの作り方
// class CurryShop {
//     makeCurry() {
//       console.log("玉ねぎ＋肉＋ルウでカレー完成！");
//     }
//   }

// class IndianCurryShop extends CurryShop {
//     makeCurry() {
//       console.log("スパイス＋鶏肉＋ナンでインドカレー完成！");
//     }
//   }

//   const shop = new IndianCurryShop();
//   shop.makeCurry(); // → インドカレー完成！
  