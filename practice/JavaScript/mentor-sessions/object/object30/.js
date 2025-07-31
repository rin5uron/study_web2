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
sweets2.printTaste('無限に食べられるお菓子');
sweets2.printFlavor('カルビーのうす塩');
sweets2.printPoint('パリパリ感');
sweets2.printBuy('どこでも');



// ③アイスクラス：複数のアイスクリームを一括説明する
// インスタンス生成時に全プロパティを一気に初期化するパターン：
class FrozenDessert {
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

const ice1 = new FrozenDessert
('パルム','アイスクリーム','絶妙な口溶けがなんとも言えないの','可愛いフォルムをそっと愛でながらやさしい気持ちで味わう');
const ice2 = new FrozenDessert
('パリッテ','アイスミルク','パリパリチョコが存分に楽しめるの','とにかくパリパリを楽しみたい時に食べる');
const ice3 = new FrozenDessert
('ブルーシールアイス','ラクトアイス','種類が多くて楽しいの','気分によってフレーバーを選ぶ');
const ice4 = new FrozenDessert
('ガリガリくん大人のパイン','氷菓','リアルパイナップルを思わせる食感','パイナップルに想いを馳せて食べる');

// 配列にまとめて一括説明
const menu = [ice1, ice2, ice3,ice4 ];
menu.forEach(item => item.describe());



// ④IcecreamBrand（アイスクリーム）
// アイスクリームクラス:ブランドごとにアイスクリームをまとめる
// アイスクリームクラスの中にフレーバーオブジェクトを入れる

// アイスクリームブランドクラス（親）
class IcecreamBrand {
    constructor(brand) {
      this.brand = brand;
      this.flavors = []; // フレーバーをしまっておく場所
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
        `${this.brand}「${this.name}」味は${this.taste}ます。${this.eatfeel}気分の時に一緒に食べよ？`);
    }
}

// （ブランドオブジェクト）
const icecream1 = new IcecreamBrand('ハーゲンダッツ');
const icecream2 = new IcecreamBrand('レディボーデン');
const icecream3 = new IcecreamBrand('ピノ');
  
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
  

// 演習⑤のコード
// 朝のやることリストを入れ子構造で定義
// ① 朝のやることリスト（子要素）
const morning = [ "顔を洗う", "歯を磨く", "朝ごはんを食べる", "服を着る" ];

// ② お仕事クラス（親要素）
class MorningRoutine {
  constructor(name) {
    this.name = name;
    this.routine = morning;  // 朝のリストをセット
  }

  // ここがポイント！m1とm2には「何番目のやること」を入れるよ
  // 引数なし → m1=0, m2=1 になる（デフォルト値）
  describe(m1 = 0, m2 = 1) {
    console.log(this.name + "の朝のやること：");
    console.log("１つ目 → " + this.routine[m1]);
    console.log("２つ目 → " + this.routine[m2]);
  }
}

// インスタンスを作ってみる
const rin = new MorningRoutine("りんちゃん");

// デフォルト(0番目と1番目)を使うなら…
rin.describe();
// 顔を洗う
// 歯を磨く

// もし「2番目と3番目」を見せたければ、こうする
rin.describe(2, 3);
// 朝ごはんを食べる
// 服を着る


// 演習⑥のコード
// HumanJobクラス: 職業と日課を入れ子構造で定義
//(子要素)
class JobRoutine  {
  constructor() {
    this.AmRoutine = ["麦茶を沸かす","野菜を切る","重たいお鍋を持つ","お皿を洗う"];
    this.PmRoutine = ["slackを開く","献立ソフトと睨めっこ","子どもとおやつを食べる"];
  }
};

// 親要素  
class HumanJob {
  constructor(name, job, year, item) {
    this.name = name;
    this.job = job;
    this.year = year;
    this.item = item;
    this.routine = new JobRoutine(); //クラスを呼び出す時はnewを使う
  }
  
  describe(amIdx , pmIdx) {
    console.log(`${this.name}のお仕事は${this.job}です。このお仕事をして${this.year}年目です。
      必須アイテムは${this.item.join('、')}です。`);//join('、')を使うことで、配列を使って複数のアイテムを表示できる
    console.log(`午前の日課: ${this.routine.AmRoutine[amIdx[0]]} ・ ${this.routine.AmRoutine[amIdx[1]]}。`);
    console.log(`午後の日課: ${this.routine.PmRoutine[pmIdx[0]]} ・ ${this.routine.PmRoutine[pmIdx[1]]}。`);
  }
}

const h = new HumanJob('りんちゃん','栄養士',7,['包丁']);
// OK:
h.describe([1,3], [2,3]); //配列から呼び出す









// // ⑦カレーの作り方
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
  
// class Salad {
  //     constructor(name) {
  //       this.name = name;
  //     }

  //     mix() {
  //       console.log(${this.name}を混ぜます);
  //     }
  //   }

  //   class CaesarSalad extends Salad {
  //     constructor(name, dressing) {
  //       super(name);
  //       this.dressing = dressing;
  //     }

  //     addDressing() {
  //       console.log(${this.dressing}ドレッシングをかけます);
  //     }
  //   }