// (1)人間オブジェクトの実行
const person1 = {
    name: 'りんちゃん',
    walk: function(step){
        let output = person1.name + 'は'+ step + '歩歩けます<br>';
        console.log(person1.name + 'は'+ step + '歩歩けます');
        return output;
    },
    speak:function(who){
        let output = person1.name + 'は'+ who + 'とおしゃべりします。<br>';
        console.log(person1.name + 'は'+ who + 'とおしゃべりします。');
        return output;
    },
    cooking:function(food){
        let output = '今日の'+ person1.name + 'は'+ food + 'を作りました。<br>';
        console.log('今日の'+ person1.name + 'は'+ food + 'を作りました。');
        return output;
    }
};

let result1Html = '';
result1Html += person1.walk(10);
result1Html += person1.speak('うーろんくん');
result1Html += person1.cooking('チキン南蛮');
document.getElementById('result1').innerHTML = result1Html;

// (2)モーニングルーティンオブジェクトの実行
const morningrutine = {
    wakeup: {
        time: '7:00',
        boilwater: true,
        washface: true,
        drinkwater: true,
        doskincare: true,
    },
    breakfast: {
        drinkhotwater: true,
        eat: true,
        eatfruit: true,
        takesupplements: true
    },
    ready: {
        changeclothes: true,
        combhair: true,
        makeup: true,
        grabbag: true,
    },
    freetime: {
        study: true,
        readbooks: true,
    }
}

let result2MorningHtml = '';

//朝の準備が全てできたか
if(morningrutine.wakeup.time && morningrutine.wakeup.boilwater && morningrutine.wakeup.washface 
&& morningrutine.wakeup.drinkwater && morningrutine.wakeup.doskincare && morningrutine.breakfast.drinkhotwater 
&& morningrutine.breakfast.eat && morningrutine.breakfast.eatfruit && morningrutine.breakfast.takesupplements 
&& morningrutine.ready.changeclothes && morningrutine.ready.combhair && morningrutine.ready.makeup && morningrutine.ready.grabbag 
&& morningrutine.freetime.study && morningrutine.freetime.readbooks){
    result2MorningHtml += '朝の準備は完璧！<br>';
    console.log('朝の準備は完璧！');
}else{
    console.log();
};

//髪の毛とメイク
if(morningrutine.ready.makeup && morningrutine.ready.combhair){
    result2MorningHtml += '髪の毛サラサラにしてお化粧もしたよ〜<br>';
    console.log('髪の毛サラサラにしてお化粧もしたよ〜');
};

//朝食
if(morningrutine.wakeup.doskincare &&  morningrutine.breakfast.eatfruit && morningrutine.breakfast.takesupplements){
    result2MorningHtml += '朝からビタミンCでお肌もピカピカ！<br>';
    console.log('朝からビタミンCでお肌もピカピカ！');
};

//早起きできたか
if(morningrutine.wakeup.time && morningrutine.freetime.study ){
    result2MorningHtml += '早起きして勉強もした！<br>';
    console.log('早起きして勉強もした！');
}else if(morningrutine.wakeup.time && morningrutine.freetime.readbooks ){
    result2MorningHtml += '早起きして本も読んだ！<br>';
    console.log('早起きして本も読んだ！');
}else if(morningrutine.wakeup.time ){
    result2MorningHtml += '今日は早起きした！<br>';
    console.log('今日は早起きした！');
}else{
    result2MorningHtml += '今日は寝坊しちゃった。。。<br>';
    console.log('今日は寝坊しちゃった。。。');
};

//出勤日か否か
if(morningrutine.ready.changeclothes && morningrutine.ready.grabbag){
    result2MorningHtml += 'じゃ、お仕事行ってくるね〜<br>';
    console.log('じゃ、お仕事行ってくるね〜');
}else{
    result2MorningHtml += 'でも今日はお仕事お休みなんだ〜<br>';
    console.log('でも今日はお仕事お休みなんだ〜');
};

document.getElementById('result2_morning').innerHTML = result2MorningHtml;

// (3)複数引数の実行
const person2 = {
    name: "りんちゃん",
    walk: function(forward, sideways) {
        let output = `${this.name}は前に${forward}歩、横に${sideways}歩進んだよ！<br>`;
        console.log(`${this.name}は前に${forward}歩、横に${sideways}歩進んだよ！`);
        return forward + sideways;
    }
};

let totalSteps = person2.walk(10, 5);
let result2Html = `りんちゃんは前に10歩、横に5歩進んだよ！<br>合計${totalSteps}歩歩いたね！`;
document.getElementById('result2').innerHTML = result2Html;

// 戻り値の実行（更新されたコードに合わせて修正）
function eat(food) {
    console.log(`・食べ物「${food}」を食べました。`);
    console.log(`　出てきたもの：💩`);
    return "💩";
}

function selfControl() {
    console.log("・オナニーしました。");
    console.log("　出てきたもの：🤍");
    return "🤍";
}

let eatResult = eat("トマト");
let selfControlResult = selfControl();
let result3Html = `・食べ物「トマト」を食べました。<br>　出てきたもの：${eatResult}<br>・オナニーしました。<br>　出てきたもの：${selfControlResult}`;
document.getElementById('result3').innerHTML = result3Html;

// (4)おやすみライブラリの実行
const OyasumiLib = {
    saynemui: function() {
        console.log("(｡•́︿•̀｡) もうねむい");
        return "(｡•́︿•̀｡) もうねむい";
    },
    sweetDreams: function() {
        console.log("(ღ˘⌣˘ღ) 続きは夢でおしゃべりしよ♡");
        return "(ღ˘⌣˘ღ) 続きは夢でおしゃべりしよ♡";
    },
    sayGoodnight: function(name) {
        console.log(`(*˘︶˘*).｡.:*☆ おやすみ、${name}。また夢でね！`);
        return `(*˘︶˘*).｡.:*☆ おやすみ、${name}。また夢でね！`;
    }
};

let result4Html = '';
result4Html += '--- おやすみライブラリ ---<br>';
result4Html += OyasumiLib.saynemui() + '<br>';
result4Html += OyasumiLib.sweetDreams() + '<br>';
result4Html += OyasumiLib.sayGoodnight("うーろんくん") + '<br>';

document.getElementById('result4').innerHTML = result4Html;

// 型の実行（文字列型の結果を表示）
let str1 = "10";
let str2 = "10";
let int1 = 10;
let int2 = 10;

let dateObj = new Date("2025/07/02");
dateObj.setDate(dateObj.getDate() + 10);
let y = dateObj.getFullYear();
let m = (dateObj.getMonth() + 1).toString().padStart(2, "0");
let d = dateObj.getDate().toString().padStart(2, "0");

let result5Html = `string型：${str1}＋${str2}＝${str1 + str2}<br>int型：${int1}＋${int2}＝${int1 + int2}<br>date型：2025/7/2＋10日＝${y}/${m}/${d}`;
console.log(`string型：${str1}＋${str2}＝${str1 + str2}`);
console.log(`int型：${int1}＋${int2}＝${int1 + int2}`);
console.log(`date型：2025/7/2＋10日＝${y}/${m}/${d}`);

document.getElementById('result5').innerHTML = result5Html;

// 配列を使った日付表示の実行
let result6Html = '';
const month_list = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
const targetMonth = "7月";
const targetDay = 2;

month_list.forEach((month) =>{
    let month_days;
    
    if (["1月","3月","5月","7月","8月","10月","12月"].includes(month)) {
        month_days = 31;
    } else if (["4月","6月","9月","11月"].includes(month)) {
        month_days = 30;
    } else {
        month_days = 28;
    }
    
    //任意の日付をコンソール表示
    for (let day = 1; day <= month_days; day++) {
        if (month === targetMonth && day === targetDay) {
            result6Html += "見つけた！ " + month + day + "日<br>";
            console.log("見つけた！ " + month + day + "日");
        }
    }
});
document.getElementById('result6').innerHTML = result6Html;

// for文の実行
const year = (nth) => {           
    let count = 1;
    for(let i = 2025; i < 2100; i++){
        if (count === nth) {
            return i;
        }
        count++;
    }
    return "範囲外"; // ループを抜けた場合
};

let n = 3; // 3年後の西暦を表示したい
console.log(n + "年後の西暦は " + year(n) + "年です。"); // → 3年後の西暦は2027年です。

const dateFunc = (year, month, day) => {
    return `${year}/${month}/${day}`;
}

console.log(dateFunc(2025, 7, 2)); // → 2025/7/2

let result7Html = `${n}年後の西暦は ${year(n)}年です。<br>日付関数実行結果：${dateFunc(2025, 7, 2)}`;
document.getElementById('result7').innerHTML = result7Html;

// グラフィック表示の実行（新しいHELLOコードに更新）
let result8Html = '';
let text = "HELLO";

for (let y = 0; y < 5; y++) {
    let line = "";
    for (let x = 0; x < 10; x++) {
        if (y === 0 || y === 4) {
            // 一番上か一番下は全部枠
            line += "*";
        } else if (x === 0 || x === 9) {
            // 左右の枠
            line += "*";
        } else if (y === 2 && x >= 2 && x < 2 + text.length) {
            // y=2行目のx=2~6に文字を置く
            line += text[x - 2];
        } else {
            // それ以外は空白
            line += " ";
        }
    }
    result8Html += line + '<br>';
    console.log(line);
}
document.getElementById('result8').innerHTML = result8Html;
