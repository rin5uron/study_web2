https://docs.google.com/spreadsheets/d/1S4dfK9bBDfCS_Mp6IdQbsgM1vEDgaPCs55qsNC-QvtE/edit?gid=0#gid=0

- 裏面とりあえず確認用統合関数
=E131 & CHAR(10) & CHAR(10) & "例：" & F131 & CHAR(10) & "補：" & SUBSTITUTE(G131, "、", CHAR(10) & "　　")

- Appsscript
 - 拡張機能から設定できる
 - function onOpen()でメニューバーに関数メニュー表示、その中にアイテム入れてそれぞれ実行できるようにする

# CSVデータから単語帳印刷までの完全ガイド

#=REPT("　",2) &SUBSTITUTE(D2 & CHAR(10) &"例：" & E2 & CHAR(10) &"補：" & SUBSTITUTE(F2,"、",CHAR(10) & "　　"),CHAR(10), CHAR(10) & REPT("　",2))

全てに、
- =REPT("　",2) &SUBSTITUTE(SUBSTITUTE(D2 & CHAR(10) &"例：" & E2 & CHAR(10) &"補：" & F2,"、",CHAR(10) & "　　"),CHAR(10), CHAR(10) & REPT("　",2))

一部に、
- =REPT("　",2) &SUBSTITUTE(D3 & CHAR(10) & CHAR(10) &"例：" & E3 & CHAR(10) &"補：" & SUBSTITUTE(F3,"、",CHAR(10) & "　　"),CHAR(10), CHAR(10) & REPT("　",2)) & CHAR(10)

直してみた
- - =REPT("　",2) &SUBSTITUTE(SUBSTITUTE(D2 & CHAR(10) & CHAR(10) &"例：" & E2 & CHAR(10) &"補：" & F2,"、",CHAR(10) & "　　"),CHAR(10), CHAR(10) & REPT("　",2)) & CHAR(10)