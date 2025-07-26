// 何ができるか、プロパティ、メソッド、インスタンス、オブジェクトを意識する
// プロパティとメソッドの名前が一緒だと、プロパティがメソッドに上書きされちゃう
// メソッドの中でプロパティを使うときは、this.プロパティ名で使う
// constructorメソッドで初期化する
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
        console.log(this.name + 'は' + this.place + 'で買えます');
    }
}

// インスタンスを作る
const sweets1 = new sweets('ハーゲンダッツ'); 


sweets1.printTaste('美味しい');
sweets1.printFlavor('マカダミアナッツ');
sweets1.printPoint('期待以上のマカダミアナッツ感');
sweets1.printBuy('どこでも');