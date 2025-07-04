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
                time: '7:00',
                washface: true,
                drinkwater: true,
                },
            
            breakfast: {
                boilwater: true,
                drinkhotwater: true,
                eat: true
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
    