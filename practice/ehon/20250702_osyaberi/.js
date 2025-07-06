 // ①身の回りのものをオブジェクトとして認識してみる
    // (1)人間をオブジェクトとして、プロパティとメソッド（関数）をつけてみる
    const person = {
        name: 'りんちゃん',//nameという名のプロパティにりんちゃんという値を入れる
        walk: function(step){//walkという名のメソッドを定義。引数にstepを取る
            console.log(person.name + 'は'+ step + '歩歩けます');
            document.write(person.name + 'は'+ step + '歩歩けます');
        },
        speak:function(who){//speakと いう名のメソッドを定義。引数にwhoを取る
             console.log(person.name + 'は'+ who + 'とおしゃべりします。');
             document.write(person.name + 'は'+ who + 'とおしゃべりします。');
        },
        cooking:function(food){//cookingという名のメソッドを定義。引数にfoodを取る
            console.log('今日の'+ person.name + 'は'+ food + 'を作りました。');
            document.write('今日の'+ person.name + 'は'+ food + 'を作りました。');
            return food;//foodの値を次にも使えるようにする
        }
    };
    // オブジェクト定義が終わったあとに呼び出す！メソッドを呼び出し()内の引数を渡す
    person.walk(10)
    person.speak('うーろんくん')
    person.cooking('チキン南蛮')
    
    
    //(2)オブジェクトの中にオブジェクト/キー名: { ... } として中にまた {} でオブジェクトを作る
    //朝の準備オブジェクトの中に、複数のオブジェクトを作る
    //論理値を用いて定義し、if文で朝の行動を表す
    
    const morningrutine = {  // ← モーニングルーティーンオブジェクトを内包
            wakeup: {
                time: '7:00',//7時に起きる
                boilwater: true,//お湯を沸かす
                washface: true,//顔を洗う
                drinkwater: true,//水を飲む
                doskincare: true,//スキンケアをする
                },
            
            breakfast: {
                drinkhotwater: true,//お湯を飲む
                eat: true,//食べる
                takesupplements: true//サプリを飲む
                },
            ready: {
                changeclothes: true,//服を着る
                combhair: true,//髪の毛をとかす
                makeup: true,//メイクをする
                grabbag: true,//鞄を持つ
            },
            freetime: {
                study: true,//勉強をする
                readbooks: true,//本を読む
            }
        }
        //朝の準備が全てできたか
        if(morningrutine.wakeup.time && morningrutine.wakeup.washface 
        && morningrutine.wakeup.drinkwater && morningrutine.breakfast.boilwater && morningrutine.breakfast.eat
        && morningrutine.breakfast.drink && morningrutine.ready.changeclothes && morningrutine.ready.combhair 
        && morningrutine.ready.makeup && morningrutine.ready.grabbag && morningrutine.freetime.study 
        && morningrutine.freetime.readbooks){
            console.log('朝の準備は完璧！');
        }else{
            console.log();
        };
    
        //髪の毛とメイク
        if(morningrutine.ready.makeup && morningrutine.ready.combhair){
            console.log('髪の毛サラサラにしてお化粧もしたよ〜');
        };
    
    
        //早起きできたか
        if(morningrutine.wakeup.time && morningrutine.freetime.study ){
            console.log('早起きして勉強もした！');
        }else if(morningrutine.wakeup.time && morningrutine.freetime.readbooks ){
            console.log('早起きして本も読んだ！');
        }else if(morningrutine.wakeup.time ){
            console.log('今日は早起きした！');
        }else{
            console.log('今日は寝坊しちゃった。。。');
        };
    
        //出勤日か否か
        if(morningrutine.ready.changeclothes && morningrutine.ready.grabbag){
            console.log('じゃ、お仕事行ってくるね〜');
        }else{
            console.log('でも今日はお仕事お休みなんだ〜');
        };
    
        //(3)細かい動作を表す
        //複数引数
        const person2 = {
            name: "りんちゃん",
            
            walk: function(forward, sideways) {//marginやpadding設定と同じイメージ
                console.log(`${this.name}は前に${forward}歩、横に${sideways}歩進んだよ！`);
                return forward + sideways;  // 合計歩数を返す
            }
        };
        // 呼び出し例
        let totalSteps = person2.walk(10, 5);  // → りんちゃんは前に10歩、横に5歩進んだよ！
        console.log(`合計${totalSteps}歩歩いたね！`);  // → 合計15歩歩いたね！




        //戻り値returnを使う
        function eat(food) {
            console.log(`食べ物「${food}」を食べました。`);
            return "💩";  // 食べた結果
        }
        
        let result1 = eat("トマト");
        console.log(`体から出てきたもの：${result1}`); // → 体から出てきたもの：💩
        
        
        function selfControl() {
            console.log("オナニーしました。");
            return "🤍";  // 処理の結果として戻り値を返す
        }
        
        let result2 = selfControl();
        console.log(`出てきたもの：${result2}`);  // → 出てきたもの：🤍


        !-- 実際に実行されるJavaScript -->
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



//朝の準備が全てできたか
if(morningrutine.wakeup.time && morningrutine.wakeup.boilwater && morningrutine.wakeup.washface 
&& morningrutine.wakeup.drinkwater && morningrutine.wakeup.doskincare && morningrutine.breakfast.drinkhotwater 
&& morningrutine.breakfast.eat && morningrutine.breakfast.takesupplements && morningrutine.ready.changeclothes 
&& morningrutine.ready.combhair && morningrutine.ready.makeup && morningrutine.ready.grabbag 
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
    console.log(`食べ物「${food}」を食べました。`);
    return "💩";
}

function selfControl() {
    console.log("オナニーしました。");
    return "🤍";
}

let eatResult = eat("トマト");
let selfControlResult = selfControl();
let result3Html = `食べ物「トマト」を食べました。<br>出てきたもの：${eatResult}<br>オナニーしました。<br>出てきたもの：${selfControlResult}`;
document.getElementById('result3').innerHTML = result3Html;

// 型の実行（consoleログに変更）
let str1 = "10";
let str2 = "10";
console.log(`string型：${str1}＋${str2}＝${str1 + str2}`);

let int1 = 10;
let int2 = 10;
console.log(`int型：${int1}＋${int2}＝${int1 + int2}`);

let dateObj = new Date("2025/07/02");
dateObj.setDate(dateObj.getDate() + 10);
let y = dateObj.getFullYear();
let m = (dateObj.getMonth() + 1).toString().padStart(2, "0");
let d = dateObj.getDate().toString().padStart(2, "0");
console.log(`date型：2025/7/2＋10日＝${y}/${m}/${d}`);

// for文の実行
const year = (yearParam) => {
    for(let i = 2025; i < 2100; i++){
        return yearParam;
    }   
}

const dateFunc = (year, month, day) => {
    return `${year}/${month}/${day}`;
}

let result4Html = `年の関数実行結果：${year(2025)}<br>日付関数実行結果：${dateFunc(2025, 7, 4)}`;
document.getElementById('result4').innerHTML = result4Html;

// グラフィック表示の実行（新しいHELLOコードに更新）
let result5Html = '';
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
    result5Html += line + '<br>';
    console.log(line);
}
document.getElementById('result5').innerHTML = result5Html;
</script>

</body>
</html>