// dateライブラリを使って、1/1-12/31までコンソール上に表示する

import { format, addDays, isAfter } from 'date-fns';

const startDate = new Date('2025-01-01');
const endDate = new Date('2025-12-31');

let currentDate = startDate;

while (!isAfter(currentDate, endDate)) {
  console.log(format(currentDate, 'yyyy-MM-dd'));
  currentDate = addDays(currentDate, 1);
}

// date-fnsから必要な関数をインポート
// format: 日付のフォーマットを指定
// addDays: 日付を1日進める
// isAfter: 日付の比較
// 開始日と終了日を設定
// Apply to test3.js
// ;
// whileループで日付を1日ずつ進めながら表示
