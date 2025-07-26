// 何ができるか、プロパティ、メソッド、インスタンス、オブジェクトを意識する
// プロパティとメソッドの名前が一緒だと、プロパティがメソッドに上書きされちゃう
// メソッドの中でプロパティを使うときは、this.プロパティ名で使う
// constructorメソッドで初期化する

// ①人間クラス
class Human {
    constructor(name) {　//初期値を決める
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



// ②お菓子クラス
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
const sweets2 = new sweets('ポテトチップス');


sweets1.printTaste('美味しい');
sweets1.printFlavor('マカダミアナッツ');
sweets1.printPoint('期待以上のマカダミアナッツ感');
sweets1.printBuy('どこでも');

sweets1.printTaste('無限に食べられるお菓子');
sweets1.printFlavor('カルビーのうす塩');
sweets1.printPoint('パリパリ感');
sweets1.printBuy('どこでも');



// ③アイスクリームクラス

class icecream {
    constructor(name,taste,flavor,point,place) {
        this.name = name;

        this.taste = "";
        this.flavor = "";
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

const icecream1 = new icecream('ハーゲンダッツ','マカダミアナッツ','マカダミアナッツ','期待以上のマカダミアナッツ感','どこでも');


// ④アイスクリームクラス

class icecreamBrand {
    constructor(brand) {
      this.brand = brand;
    }
  

      const flavor = new Flavor({
        brand: this.brand,
        name: "",
        taste: "",
        point: "",
        place: ""
      });
      return flavor;
    }
  
  class Flavor {
    constructor({ brand, name, taste, point, place }) {
      this.brand = brand;
      this.name = name;
      this.taste = taste;
      this.point = point;
      this.place = pl   ace;
    }
  
    describe() {
      console.log(
        `${this.brand}「${this.name}」味は${this.taste}。ポイントは「${this.point}」。${this.place}で買うことができます。`
      );
    }
  }
  
  // （ブランドオブジェクト）
  const haagenDazs = new icecreamBrand('ハーゲンダッツ');
  const Lady Borden = new icecreamBrand('レディボーデン');
  const palmu = new icecreamBrand('パルム');
  
  // （インスタンス）
  const macadamia = haagenDazs.addFlavor({
    name: 'マカダミアナッツ',
    taste: '濃厚でコクがある',
    point: '期待以上のマカダミアナッツ感',
    place: 'どこでも'
  });
  
  macadamia.describe();
  




アイスクラス

アイスメーカーごとのクラス

// ④人間クラス職業
人間クラス
戦士なら戦士情報を追加すればいい、魔法使いなら魔法使い情報


// ⑤カレーの作り方
class CurryShop {
    makeCurry() {
      console.log("玉ねぎ＋肉＋ルウでカレー完成！");
    }
  }

class IndianCurryShop extends CurryShop {
    makeCurry() {
      console.log("スパイス＋鶏肉＋ナンでインドカレー完成！");
    }
  }

  const shop = new IndianCurryShop();
  shop.makeCurry(); // → インドカレー完成！
  