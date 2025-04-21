// 1/1-12/31までコンソール上に表示する

// AI推奨パターン
const month_list = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
const month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// 月と日を組み合わせて表示
month_list.forEach((month, index) => {
    // その月の日数分繰り返す
    for (let day = 1; day <= month_days[index]; day++) {
        console.log(month + day + "日");
    }
});




// ①1/1-12/31までコンソール上に表示する
const month_list = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];

// forEach配列メソッドを使ってmonth_listの配列をmonthとして一つずつ順番に取り出す
month_list.forEach(function(month) {
    console.log(month);
});

// アロー関数を使用したver
// month_list.forEach((month) => {
//     console.log(month);
// });


// ②各月を31日までとし、月日を組み合わせて表示する
const month_list = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];

month_list.forEach(function(month,day) {
    for (let day = 1; day <= 31; day++) {
        console.log(month + day + "日");
    }
});

// アロー関数を使用したver
// month_list.forEach((month,day) => {
//     for (let day = 1; day <= 31; day++) {
//         console.log(month + day + "日");
//     }
// });


// ③月毎の日数の違いを考慮して、月日を組み合わせて表示する
const month_list = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];

// 月毎の日数をmonth_daysとして定める
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
