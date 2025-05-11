// 1/1-12/31までコンソール上に表示する
const month_list = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];

// 月と日を組み合わせて表示
month_list.forEach((month) =>{// 矢印（=>）を使うと短く書ける、「=>」は「この計算をするよ」という意味
    let month_days;
    
    // ncludes（）で各月の日数を設定配列の中に、指定した値が含まれているかどうかを確認
    if (["1月","3月","5月","7月","8月","10月","12月"].includes(month)) {
        month_days = 31;
    } else if (["4月","6月","9月","11月"].includes(month)) {
        month_days = 30;
    } else {  // 2月の場合
        month_days = 28;
    }
    
    // 日付を表示
    for (let day = 1; day <= month_days; day++) {
        console.log(month + day + "日");
    }
});
