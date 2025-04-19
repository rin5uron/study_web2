// 1/1-12/31までコンソール上に表示する

// 月のリストと各月の日数を定義
const month_list = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
const month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// 月と日を組み合わせて表示
month_list.forEach((month, index) => {
    // その月の日数分繰り返す
    for (let day = 1; day <= month_days[index]; day++) {
        console.log(month + day + "日");
    }
});


// 1/1-12/31までコンソール上に表示する
const month_list = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];


// 月と日を組み合わせて表示
month_list.forEach((month, day) => {
    if (month_list= "1月","3月","5月","7月","8月","10月","12月") {
        const month_days = 31;
    }
    else if(month_list= "4月","6月","9月","11月") {
        const month_days = 30;
    }

    else if(month_list= "2月") {
        const month_days = 28;
    }
    
    
    
    
    for (let day = 1; day <= month_days; day++) {
        console.log(month + day + "日");
    }
});
