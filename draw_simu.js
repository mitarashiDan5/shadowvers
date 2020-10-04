// ===================================================================================================================================================
// for only debug
// デバッグ時に、変数の中身を見る用
// トリガー：dbg（ボタン）を押下した時
//====================================================================================================================================================
function debug(){

    set_list();
    simulation_start_1st2nd(); // シミュレーション本体の関数

    //id(#____)を変えれば、変数の値をchkできる
//   var dbg_val = document.querySelector('#cd1_name').value;
//    document.querySelector('#dbg_val').textContent = "dbg_val= "+ dbg_val;


//    document.querySelector('#dbg_val_0').textContent = "dbg_val= "+ label_no +" "+ card_label[label_no] +" "+ hand_in[card_label[label_no]];
    document.querySelector('#dbg_val_1').textContent = "_初期デッキ枚数="+ initial_deck +"_現在デッキ枚数="+ current_deck;
    document.querySelector('#dbg_val_2').textContent = "_手札所持数_" +"||No.01=" +hand_in[0] +"||No.02=" +hand_in[1] +"||No.03=" +hand_in[2] +"||No.04=" +hand_in[3] +"||No.05=" +hand_in[4] +"||No.06=" +hand_in[5] +"||No.07=" +hand_in[6] +"||No.08=" +hand_in[7] +"||No.09=" +hand_in[8] +"||No.10=" +hand_in[9];
    document.querySelector('#dbg_val_3').textContent = "_手札所持数_" +"||No.11=" +hand_in[10] +"||No.12=" +hand_in[11] +"||No.13=" +hand_in[12] +"||No.14=" +hand_in[13] +"||No.15=" +hand_in[14] +"||No.16=" +hand_in[15] +"||No.17=" +hand_in[16] +"||No.18=" +hand_in[17] +"||No.19=" +hand_in[18] +"||No.20=" +hand_in[19];

//    document.querySelector('#dbg_val_4').textContent = "_シミュレート繰り返し回数="+ repe_curr + "_予定通りplayできるか？=" +targeted_play[repe_curr-1];
    document.querySelector('#dbg_val_5').textContent = "_1TのNo.0プレイ数="+ play_1T[0];

    document.querySelector('#dbg_val_6').textContent = "_割合="+ rate_ok_simu +"%"+"_成功数="+ cnt_ok_simu +"_試行数="+ repe_simu;
    document.querySelector('#dbg_val_7').textContent = "マリガンで戻す数="+ mul_draw_num + ",,,戻すNo.[0]" + mul_ret_deck_cd[0] + ",,,戻すNo.[1]" + mul_ret_deck_cd[1] + ",,,戻すNo.[2]" + mul_ret_deck_cd[2];
    document.querySelector('#dbg_val_8').textContent = "初期手札ラベル[0]" + ini_hand_label[0] + "初期手札ラベル[1]" + ini_hand_label[1] + "初期手札ラベル[2]" + ini_hand_label[2];
 
}

// ２回目のコミット確認用です。


// ===================================================================================================================================================
// Create List
// デッキリストのテーブルを作成する
// トリガー：
//====================================================================================================================================================
function create_list_tbl(){

}


// ===================================================================================================================================================
// Marigan 1 を 全キープにする(マリガンなしにする)
// トリガー：Change Marigan1 to all keep(ボタン)を押下する
//====================================================================================================================================================
function all_keep()
{
    // マリガン1を全キープにする（実質マリガンなし）
    for(No=0; No < 20; No++)
    {
        document.querySelectorAll('.cd_mul_a_keep')[(No * mariganPetternMax) + 0].value = document.querySelector('#Ini_hand').value;
    }
}




// ===================================================================================================================================================
// Setting lists
// よく使うデッキリストを登録する
// トリガー：Set sample list（プルダウンメニュー）から選択した時
//====================================================================================================================================================
function set_list(){

    const basic_class = [
        //Basic
        '.cd_name',
        '.cd_deckin',
        '.cd_sameno'
    ];

    const effect_class = [
        //Effect
        '.cd_eff',
        '.cd_e_num',
        '.cd_e_choice',
        '.cd_e_no1',
        '.cd_e_no2',
        '.cd_e_no3',
        '.cd_e_no4',
        '.cd_e_no5',
        '.cd_e_timing'
    ];

    const marigan_class = [
        //Marigan
        '.cd_mul_condition',
        '.cd_mul_a_in_hand_l',
        '.cd_mul_a_in_hand_h',
        '.cd_mul_a_keep'
    ];

    const play_class = [
        //Play
        '.cd_1T',
        '.cd_2T',
        '.cd_3T',
        '.cd_4T',
        '.cd_5T',
        '.cd_6T',
        '.cd_7T',
        '.cd_8T',
        '.cd_9T',
        '.cd_10T'
    ];


    switch (document.querySelector('#set_list').value){


        case "gaiant": // ジャイアントマッチドラゴン 

            const basic_value = [
                /*           Card_name    Deck_in     Ref.No */
                /* No.1  */ ['邪竜の契り',3,0],
                /* No.2  */ ['邪竜の契り(覚醒)',0,1],
                /* No.3  */ ['竜の託宣',3,0],
                /* No.4  */ ['竜の託宣(覚醒)',0,3],
                /* No.5  */ ['ﾄﾞﾗｺﾞﾆｯｸｺｰﾙ',3,0],
                /* No.6  */ ['ﾄﾞﾗｺﾞﾆｯｸｺｰﾙ(覚醒)',0,5],
                /* No.7  */ ['聡明のﾄﾞﾗｺﾞﾆｯｸｽｶﾗｰ',3,0],
                /* No.8  */ ['聡明のﾄﾞﾗｺﾞﾆｯｸｽｶﾗｰ(進化)',0,7],
                /* No.9  */ ['虐殺のﾄﾞﾗｺﾞﾆｭｰﾄ',3,0],
                /* No.10 */ ['竜人の吐息',3,0],
                /* No.11 */ ['竜人の吐息(捨)',0,10],
                /* No.12 */ ['ﾄﾞﾗｺﾞﾆｯｸﾚｲｼﾞ',3,0],
                /* No.13 */ ['(世界)・ｾﾞﾙｶﾞﾈｲｱ(14以下)',3,0],
                /* No.14 */ ['ｼﾞｬｲｱﾝﾄﾏｯﾁ',3,0],
                /* No.15 */ ['天災のｼﾞｪﾈｼｽﾄﾞﾗｺﾞﾝ',3,0],
                /* No.16 */ ['正義・ｲﾗﾝﾂｧ',3,0],
                /* No.17 */ ['金剛のﾊﾟｷｹﾌｧﾛｻｳﾛｽ',2,0],
                /* No.18 */ ['治癒のﾄﾞﾗｸﾞｰﾝ',3,0],
                /* No.19 */ ['波濤のﾌﾟﾚｼｵｻｳﾛｽ',2,0],
                /* No.20 */ ['波濤のﾌﾟﾚｼｵｻｳﾛｽ(進化)',0,19],

                // ['(世界)・ｾﾞﾙｶﾞﾈｲｱ',3,0],
                // ['正義・ｲﾗﾝﾂｧ(3ﾄﾞﾛｰ)',3,0],
            ];

            const effect_value = [
                /*          type    num     choice   filter(card no 1 2 3 4 5)   timing */
                /* No. 1  */ ['draw',1,'',0,0,0,0,0,0],
                /* No. 2  */ ['draw',2,'',0,0,0,0,0,0],
                /* No. 3  */ ['',0,'',0,0,0,0,0,0],
                /* No. 4  */ ['draw',1,'',0,0,0,0,0,0],
                /* No. 5  */ ['sarch_from_deck',1,'random',0,0,0,0,0,0],
                /* No. 6  */ ['sarch_from_deck',2,'random',0,0,0,0,0,0],
                /* No. 7  */ ['draw',1,'',0,0,0,0,0,0],
                /* No. 8  */ ['draw',2,'',0,0,0,0,0,0],
                /* No. 9  */ ['discard_deck',3,'each',0,0,0,0,0,0],
                /* No. 10 */ ['',0,'',0,0,0,0,0,0],
                /* No. 11 */ ['draw',1,'',0,0,0,0,0,0],
                /* No. 12 */ ['',0,'',0,0,0,0,0,0],
                /* No. 13 */ ['draw',2,'',0,0,0,0,0,0],
                /* No. 14 */ ['',0,'',0,0,0,0,0,0],
                /* No. 15 */ ['',0,'',0,0,0,0,0,0],
                /* No. 16 */ ['',0,'',0,0,0,0,0,0],
                /* No. 17 */ ['',0,'',0,0,0,0,0,0],
                /* No. 18 */ ['',0,'',0,0,0,0,0,0],
                /* No. 19 */ ['',0,'',0,0,0,0,0,0],
                /* No. 20 */ ['draw',2,'',0,0,0,0,0,0]
            ];


            // 各No. mariganPetternMax = 5 を考慮したテーブル構成
            const marigan_value = [
                /*            ptn 1      ptn 2      ptn 3      ptn 4      ptn 5     */
                /* No.1  */ [ [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0] ],
                /* No.2  */ [ [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0] ],
                /* No.3  */ [ [0,1,3,1], [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0] ],
                /* No.4  */ [ [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0] ],
                /* No.5  */ [ [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0] ],
                /* No.6  */ [ [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0] ],
                /* No.7  */ [ [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0] ],
                /* No.8  */ [ [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0] ],
                /* No.9  */ [ [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0] ],
                /* No.10 */ [ [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0] ],
                /* No.11 */ [ [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0] ],
                /* No.12 */ [ [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0] ],
                /* No.13 */ [ [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0] ],
                /* No.14 */ [ [0,1,3,1], [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0] ],
                /* No.15 */ [ [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0] ],
                /* No.16 */ [ [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0] ],
                /* No.17 */ [ [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0] ],
                /* No.18 */ [ [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0] ],
                /* No.19 */ [ [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0] ],
                /* No.20 */ [ [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0], [0,1,3,0] ]
            ];

            // 各No. playPatternMax = 10 を考慮したテーブル構成
            const play_value = [
                /*             ptn 1                  ptn 2                  ptn 3                  ptn 4                  ptn 5                  ptn 6                  ptn 7                  ptn 8                  ptn 9                  ptn 10                */
                /* No. 1  */ [ [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0] ],
                /* No. 2  */ [ [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0] ],
                /* No. 3  */ [ [0,1,1,0,0,0,0,0,0,0], [0,1,0,0,0,0,0,0,0,0], [0,1,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0] ],
                /* No. 4  */ [ [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0] ],
                /* No. 5  */ [ [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0] ],
                /* No. 6  */ [ [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0] ],
                /* No. 7  */ [ [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0] ],
                /* No. 8  */ [ [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0] ],
                /* No. 9  */ [ [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0] ],
                /* No. 10 */ [ [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0] ],
                /* No. 11 */ [ [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0] ],
                /* No. 12 */ [ [0,0,0,0,0,0,0,0,0,0], [0,0,1,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,1,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0] ],
                /* No. 13 */ [ [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0] ],
                /* No. 14 */ [ [0,0,0,1,0,0,0,0,0,0], [0,0,0,1,0,0,0,0,0,0], [0,0,0,1,0,0,0,0,0,0], [0,0,0,0,1,0,0,0,0,0], [0,0,0,0,1,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0] ],
                /* No. 15 */ [ [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,1,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,1,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0] ],
                /* No. 16 */ [ [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0] ],
                /* No. 17 */ [ [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0] ],
                /* No. 18 */ [ [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0] ],
                /* No. 19 */ [ [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0] ],
                /* No. 20 */ [ [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0] ],
            ];
            




            // card No.1 - 20 まで書き込み
            for(No=0; No<20; No++)
            {
                //Basic
                for(i=0; i<basic_class.length; i++){
                    document.querySelectorAll(basic_class[i])[No].value = basic_value[No][i];
                }

                //Effect
                for(j=0; j<effect_class.length; j++){
                    document.querySelectorAll(effect_class[j])[No].value = effect_value[No][j];
                }

                //Marigan
                for(m=0; m<mariganPetternMax; m++){
                    for(k=0; k<marigan_class.length; k++){
                        document.querySelectorAll(marigan_class[k])[(No * mariganPetternMax) + m].value = marigan_value[No][m][k];
                    }
                }

                //Play
                for(n=0; n<playPatternMax; n++){
                    for(p=0; p<play_class.length; p++){
                        document.querySelectorAll(play_class[p])[(No * playPatternMax) + n].value = play_value[No][n][p];
                    }
                }
            }


            break;

        case "sample1":
            document.querySelectorAll('.cd_name')[0].value = "カードA";
            document.querySelectorAll('.cd_deckin')[0].value = 3;
            document.querySelectorAll('.cd_1T')[0+0].value = 1;
            document.querySelectorAll('.cd_1T')[0+1].value = 1;
            document.querySelectorAll('.cd_2T')[0+2].value = 1;
            document.querySelectorAll('.cd_2T')[0+3].value = 1;
            document.querySelectorAll('.cd_3T')[0+4].value = 1;

            

            document.querySelectorAll('.cd_name')[1].value = "その他";
            document.querySelectorAll('.cd_deckin')[1].value = 37;

            break;

        case "senpuku":                                                         // 潜伏リオードデッキ 
            document.querySelectorAll('.cd_name')[0].value = "王城(ツバキ)";
            document.querySelectorAll('.cd_deckin')[0].value = 3;
            document.querySelectorAll('.cd_1T')[0].value = 0;
            document.querySelectorAll('.cd_eff')[0].value = "play_from_deck";
            document.querySelectorAll('.cd_e_choice')[0].value = "each";
            document.querySelectorAll('.cd_e_num')[0].value = 1;
            document.querySelectorAll('.cd_e_no1')[0].value = 11;
        
            document.querySelectorAll('.cd_name')[1].value = "両雄";
            document.querySelectorAll('.cd_deckin')[1].value = 3;
            document.querySelectorAll('.cd_1T')[1].value = 0;
        
            document.querySelectorAll('.cd_name')[2].value = "カゲミツ";
            document.querySelectorAll('.cd_deckin')[2].value = 2;
            document.querySelectorAll('.cd_1T')[2].value = 0;
        
            document.querySelectorAll('.cd_name')[3].value = "もてなし";
            document.querySelectorAll('.cd_deckin')[3].value = 3;
            document.querySelectorAll('.cd_1T')[3].value = 0;
            document.querySelectorAll('.cd_eff')[3].value = "sarch_from_deck";
            document.querySelectorAll('.cd_e_choice')[3].value = "each";
            document.querySelectorAll('.cd_e_num')[3].value = 1;
            document.querySelectorAll('.cd_e_no1')[3].value = 8;

        
            document.querySelectorAll('.cd_name')[4].value = "奪取";
            document.querySelectorAll('.cd_deckin')[4].value = 3;
            document.querySelectorAll('.cd_1T')[4].value = 0;
        
            document.querySelectorAll('.cd_name')[5].value = "泉";
            document.querySelectorAll('.cd_deckin')[5].value = 3;
            document.querySelectorAll('.cd_2T')[5].value = 1;
        
            document.querySelectorAll('.cd_name')[6].value = "集会所";
            document.querySelectorAll('.cd_deckin')[6].value = 3;
            document.querySelectorAll('.cd_1T')[6].value = 0;
        
            document.querySelectorAll('.cd_name')[7].value = "リオード";
            document.querySelectorAll('.cd_deckin')[7].value = 3;
            document.querySelectorAll('.cd_1T')[7].value = 0;
        
            document.querySelectorAll('.cd_name')[8].value = "剣舞";
            document.querySelectorAll('.cd_deckin')[8].value = 3;
            document.querySelectorAll('.cd_5T')[8].value = 1;
        
            document.querySelectorAll('.cd_name')[9].value = "躓き";
            document.querySelectorAll('.cd_deckin')[9].value = 3;
            document.querySelectorAll('.cd_1T')[9].value = 0;
            document.querySelectorAll('.cd_eff')[9].value = "draw";
            document.querySelectorAll('.cd_e_num')[9].value = 1;
        
            document.querySelectorAll('.cd_name')[10].value = "ツバキ";
            document.querySelectorAll('.cd_deckin')[10].value = 3;
            document.querySelectorAll('.cd_3T')[10].value = 1;
        
            document.querySelectorAll('.cd_name')[11].value = "武装";
            document.querySelectorAll('.cd_deckin')[11].value = 3;
            document.querySelectorAll('.cd_1T')[11].value = 0;
        
            document.querySelectorAll('.cd_name')[12].value = "ヴェイリオン";
            document.querySelectorAll('.cd_deckin')[12].value = 2;
            document.querySelectorAll('.cd_1T')[12].value = 0;
        
            document.querySelectorAll('.cd_name')[13].value = "二刀流";
            document.querySelectorAll('.cd_deckin')[13].value = 3;
            document.querySelectorAll('.cd_6T')[13].value = 1;

            document.querySelectorAll('.cd_name')[14].value = "王城(リオード)";
            document.querySelectorAll('.cd_deckin')[14].value = 0;
            document.querySelectorAll('.cd_sameno')[14].value = 1;
            document.querySelectorAll('.cd_1T')[14].value = 0;
            document.querySelectorAll('.cd_eff')[14].value = "play_from_deck";
            document.querySelectorAll('.cd_e_choice')[14].value = "each";
            document.querySelectorAll('.cd_e_num')[14].value = 1;
            document.querySelectorAll('.cd_e_no1')[14].value = 8;

            document.querySelectorAll('.cd_name')[15].value = "王城(ヴェイリオン)";
            document.querySelectorAll('.cd_deckin')[15].value = 0;
            document.querySelectorAll('.cd_sameno')[15].value = 1;
            document.querySelectorAll('.cd_1T')[15].value = 0;
            document.querySelectorAll('.cd_eff')[15].value = "play_from_deck";
            document.querySelectorAll('.cd_e_choice')[15].value = "each";
            document.querySelectorAll('.cd_e_num')[15].value = 1;
            document.querySelectorAll('.cd_e_no1')[15].value = 13;

            document.querySelectorAll('.cd_name')[16].value = "王城(カゲミツ)";
            document.querySelectorAll('.cd_deckin')[16].value = 0;
            document.querySelectorAll('.cd_sameno')[16].value = 1;
            document.querySelectorAll('.cd_1T')[16].value = 0;
            document.querySelectorAll('.cd_eff')[16].value = "play_from_deck";
            document.querySelectorAll('.cd_e_choice')[16].value = "each";
            document.querySelectorAll('.cd_e_num')[16].value = 1;
            document.querySelectorAll('.cd_e_no1')[16].value = 3;

            document.querySelectorAll('.cd_name')[17].value = "躓き(エンハンス)";
            document.querySelectorAll('.cd_deckin')[17].value = 0;
            document.querySelectorAll('.cd_sameno')[17].value = 10;
            document.querySelectorAll('.cd_1T')[17].value = 0;
            document.querySelectorAll('.cd_eff')[17].value = "draw";
            document.querySelectorAll('.cd_e_num')[17].value = 3;

            document.querySelectorAll('.cd_name')[18].value = "首飾り";

            document.querySelectorAll('.cd_name')[19].value = "----";
        
            break;

        default:
            break;
    }
}


// ===================================================================================================================================================
// シミュレーション結果をリセットする
// トリガー：Reset simulation result(ボタン)を押下した時
//====================================================================================================================================================
//------------------------------------------------------------------------------------------------------
//  概　要：シミュレーション結果をリセットする
//  引  数：なし
//  戻り値：なし
//------------------------------------------------------------------------------------------------------

const max_result_tbl_no = 100;  //最大の結果テーブル行（本来は画面から取得したい）

function reset_result()
{
    const result_tbl_class = [  //結果テーブルのクラス一覧
        '.sm_case_no',
        '.sm_result_1st',
        '.sm_result_2nd',
        '.sm_marigan_no',
        '.sm_plus_minus',
        '.sm_play_no',
        '.sm_1T',
        '.sm_2T',
        '.sm_3T',
        '.sm_4T',
        '.sm_5T',
        '.sm_6T',
        '.sm_7T',
        '.sm_8T',
        '.sm_9T',
        '.sm_10T',
        '.sm_done',
        '.sm_pattern'
    ];

    // 結果欄を全て空行にする、文字を黒色にする
    for(i=0; i < max_result_tbl_no; i++)            //全ての行
    {
        for(k=0; k < result_tbl_class.length; k++)  //全ての列
        {
            document.querySelectorAll(result_tbl_class[k])[i].value = "";
            document.querySelectorAll(result_tbl_class[k])[i].textContent = "-";
            document.querySelectorAll(result_tbl_class[k])[i].style.color = "black";
        }
    }

    // 結果のナンバリングを初期化
    case_no = 0;
    result_tbl_no = 0;

}




// ===================================================================================================================================================
// Simulation
// "Simulation Start" ボタンを押下した時に、シミュレーションをスタートするための関数
// トリガー：Simulation start 1st&2nd(ボタン)を押下した時
//====================================================================================================================================================
//------------------------------------------------------------------------------------------------------
//  概　要：シミュレータmain(top関数)
//  引  数：なし
//  戻り値：なし
//------------------------------------------------------------------------------------------------------

const mariganPetternMax = 5;	// マリガンのパターン数の最大    // 本来は、画面から入力したい...(index.htmlと同期取れてない)
const playPatternMax    = 10;	// プレイのパターン数の最大     // 本来は、画面から入力したい...(index.htmlと同期取れてない)

var play_ptn = 0;           // 現在のプレイのパターン
var marigan_ptn = 0;        // 現在のマリガンのパターン

var initial_case_no = 0;    // 初期ケースno(結果テーブル用)



function simulation_start_1st2nd(){

    get_input();    // get user input date on html

    // マリガンのパターン、繰り返す
    for(var k=0; k<mariganPetternMax; k++)
    {
        marigan_ptn = k;                        // 現在のマリガンのパターン数

        if(mul_enable[marigan_ptn] == true)     // marigan x のチェックボックス=チェック有 の時
        {
            // 初期ケースno(結果テーブル用)を控える
            initial_case_no = case_no;

            // プレイのパターン、繰り返す
            for(var i=0; i<playPatternMax; i++)
            {
                play_ptn = i;                       // 現在のプレイのパターン数
        
                if(play_enable[play_ptn] == true)   // play x のチェックボックス=チェック有 の時
                {
                    your_turn = "first";
                    simulation();                   // simulation part
                    write_result();                 // write simulation results to html
                
                    your_turn = "second";
                    simulation();                   // simulation part
                    write_result();                 // write simulation results to html
                }
            }
            
            // write total simulation results to html
            write_total_result();
        }
    }
}



// #####################################################################################################
// get user input date on html
// #####################################################################################################
//------------------------------------------------------------------------------------------------------
//  概　要：画面からの全ての入力値を読み込む
//  引  数：なし
//  戻り値：なし
//------------------------------------------------------------------------------------------------------
function get_input(){

    get_gametype();
    get_list_deck_plays();
    get_repe_simulator();
}

//------------------------------------------------------------------------------------------------------
//  概　要：Game type(テーブルのinput)からの入力値を読み込む
//  引  数：なし（画面から）
//  戻り値：なし（グローバル変数）
//------------------------------------------------------------------------------------------------------
//game type
var total_deck          = 0;
var Ini_hand            = 0;
var first_1T_draw       = 0;
var second_1T_draw      = 0;
var mulligan_type       = "";

function get_gametype(){
    total_deck          = document.querySelector('#total_deck').value;
    Ini_hand            = document.querySelector('#Ini_hand').value;
    first_1T_draw       = document.querySelector('#first_1T_draw').value;
    second_1T_draw      = document.querySelector('#second_1T_draw').value;
    mulligan_type       = document.querySelector('#mulligan_type').value;
}


//------------------------------------------------------------------------------------------------------
//  概　要：List of Deck & Plays(テーブルのinput)からの入力値を読み込む
//  引  数：なし（画面から）
//  戻り値：なし（グローバル変数）
//------------------------------------------------------------------------------------------------------
// List of deck & plays
var card_name   = new Array;
var deck_in     = new Array;
var same_no     = new Array;

// plays
var play_enable = new Array;
var total_minus = new Array;

var play_1T     = new Array;
var play_2T     = new Array;
var play_3T     = new Array;
var play_4T     = new Array;
var play_5T     = new Array;
var play_6T     = new Array;
var play_7T     = new Array;
var play_8T     = new Array;
var play_9T     = new Array;
var play_10T    = new Array;

//mulligan
var mul_enable      = new Array;

var mul_condition   = new Array;
var mul_a_in_hand_l = new Array;
var mul_a_in_hand_h = new Array;
var mul_a_keep      = new Array;

//effect
var eff_type    = new Array;
var eff_timing  = new Array;
var eff_num     = new Array;
var eff_choice  = new Array;
var eff_fil_no1 = new Array;
var eff_fil_no2 = new Array;
var eff_fil_no3 = new Array;
var eff_fil_no4 = new Array;
var eff_fil_no5 = new Array;


function get_list_deck_plays(){

    // marigan 1〜x のcheck box
    for(var i=0; i < mariganPetternMax; i++)
    {
        mul_enable[i] = document.querySelectorAll('.marigan_enable')[i].checked;
    }

    // play 1〜x の check box
    for(var j=0; j < playPatternMax; j++)
    {
        play_enable[j] = document.querySelectorAll('.play_enable')[j].checked;
        total_minus[j] = document.querySelectorAll('.total_minus')[j].checked;
    }

    // カードNo.1〜20 のinput
    for(var No=0; No<20; No++)
    {
        //Basic
        card_name[No]   = document.querySelectorAll('.cd_name')[No].value;
        deck_in[No]     = document.querySelectorAll('.cd_deckin')[No].value;
        same_no[No]     = document.querySelectorAll('.cd_sameno')[No].value;

        //mulligan
        for(var m_no=0; m_no < mariganPetternMax; m_no++){

            var m_i = (No * mariganPetternMax) + m_no;     // (Case No * 最大マリガンパターン) + 今のマリガンパターン

            mul_condition[m_i]   = document.querySelectorAll('.cd_mul_condition')[m_i].value;
            mul_a_in_hand_l[m_i] = document.querySelectorAll('.cd_mul_a_in_hand_l')[m_i].value;
            mul_a_in_hand_h[m_i] = document.querySelectorAll('.cd_mul_a_in_hand_h')[m_i].value;
            mul_a_keep[m_i]      = document.querySelectorAll('.cd_mul_a_keep')[m_i].value;
        }

        //play
        for(var p_no=0; p_no < playPatternMax; p_no++){

            var p_i = (No * playPatternMax) + p_no;     // (Case No * 最大プレイパターン) + 今のプレイパターン

            play_1T[p_i]    = document.querySelectorAll('.cd_1T')[p_i].value;
            play_2T[p_i]    = document.querySelectorAll('.cd_2T')[p_i].value;
            play_3T[p_i]    = document.querySelectorAll('.cd_3T')[p_i].value;
            play_4T[p_i]    = document.querySelectorAll('.cd_4T')[p_i].value;
            play_5T[p_i]    = document.querySelectorAll('.cd_5T')[p_i].value;
            play_6T[p_i]    = document.querySelectorAll('.cd_6T')[p_i].value;
            play_7T[p_i]    = document.querySelectorAll('.cd_7T')[p_i].value;
            play_8T[p_i]    = document.querySelectorAll('.cd_8T')[p_i].value;
            play_9T[p_i]    = document.querySelectorAll('.cd_9T')[p_i].value;
            play_10T[p_i]   = document.querySelectorAll('.cd_10T')[p_i].value;    
            // 下記のように、2次元配列を1次元配列に変換することは難しい...
            // play_1T[No][p_no]     = all_cd_1T[p_i].value;
            // play_2T[No][p_no]     = all_cd_2T[p_i].value;
            // ... 
        }

        //effect
        eff_type[No]    = document.querySelectorAll('.cd_eff')[No].value;
        eff_timing[No]  = document.querySelectorAll('.cd_e_timing')[No].value;
        eff_num[No]     = document.querySelectorAll('.cd_e_num')[No].value;
        eff_choice[No]  = document.querySelectorAll('.cd_e_choice')[No].value;
        eff_fil_no1[No] = document.querySelectorAll('.cd_e_no1')[No].value;
        eff_fil_no2[No] = document.querySelectorAll('.cd_e_no2')[No].value;
        eff_fil_no3[No] = document.querySelectorAll('.cd_e_no3')[No].value;
        eff_fil_no4[No] = document.querySelectorAll('.cd_e_no4')[No].value;
        eff_fil_no5[No] = document.querySelectorAll('.cd_e_no5')[No].value;
    }
}


//------------------------------------------------------------------------------------------------------
//  概　要：Repetition of simulation(プルダウンメニュー)から入力値を読み込む
//  引  数：なし（画面から）
//  戻り値：なし（グローバル変数）
//------------------------------------------------------------------------------------------------------
var repe_simu = 0;

function get_repe_simulator(){
    repe_simu     = document.querySelector('#repe_simu').value;
}


// #####################################################################################################
// simulation part
// #####################################################################################################
//------------------------------------------------------------------------------------------------------
//  概　要：シミュレーションし、狙いのplayができる確率を計算する
//  引  数：なし（グローバル変数）
//  戻り値：なし（グローバル変数）
//------------------------------------------------------------------------------------------------------
var cnt_ok_simu=0;
var rate_ok_simu=0;
var current_turn=0;
var targeted_play = new Array;      // 各シミュレート試行中、目的のカードがplayできるか？ できる/できない(enable/disable)
var repe_curr =0;                   // 現在のシミュレート繰り返し回数

function simulation(){

    rate_ok_simu = 0;   //初期化
    cnt_ok_simu = 0;    //初期化

    for(repe_curr=0; repe_curr<repe_simu; repe_curr++){
        targeted_play[repe_curr] = "enable";

        // Initial
        total_deck_calc();  //ゲームによっては、デッキ枚数が可変
        initial_draw();     //デッキ総数から、ランダムに３枚引く
        mulligan_chk();     //初期手札から、条件に従って、引き直しをする

        //1T-10T
        for(current_turn=1; current_turn <=10; current_turn++){
            draw();         //1Tの時だけ、引く枚数が先攻、後攻で変わる
            play_chk();     //プレイしたいカードを持っているか？ NGの時、ループから抜ける
            effect_chk();   //プレイできた時、デッキや手札に影響を与える効果のみ(ドロー、サーチ)
        }
        if(targeted_play[repe_curr] == "enable"){//OKフラグがONのままなら
            cnt_ok_simu++;
        }
    }
    
    // Simulation result
    rate_ok_simu = Math.round(100 * cnt_ok_simu / repe_simu *100) /100;   // 単位% (小数は四捨五入)


}

// _____________________________________________________________________________________________________
// total deck calclation
// _____________________________________________________________________________________________________
//------------------------------------------------------------------------------------------------------
//  概　要：デッキリストからデッキの合計枚数を計算し、カードを1枚ずつを区別する
//  引  数：なし（グローバル変数）
//  戻り値：なし（グローバル変数）
//------------------------------------------------------------------------------------------------------
var initial_deck = 0;       // デッキの初期枚数
var current_deck = 0;       // 現在のデッキ枚数
var card_label = new Array; // デッキ１枚毎のラベル　値は "No."を格納する
var card_rest = new Array;  // デッキ１枚毎のラベル　値は デッキに残っている/ない("true"/"false") を格納する

function total_deck_calc(){
    var j = 0;

    initial_deck = 0;   // 初期化
    current_deck = 0;   // 初期化

    for(No=0;No < 20; No++){
        initial_deck = initial_deck + Number(deck_in[No]);  // 初期デッキ枚数を計算する

        for(i=0; i < Number(deck_in[No]); i++){
            card_label[j] = No;                             // カード1枚ずつ区別するためのラベルを作成する
            card_rest[j] = true;                            // カード1枚毎に、デッキに残存してる
            j++;
        }
    }
    current_deck = initial_deck;        // 現在のデッキ数を設定
}

// _____________________________________________________________________________________________________
// initial draw
// _____________________________________________________________________________________________________
//------------------------------------------------------------------------------------------------------
//  概　要：初期手札の計算、初期手札のドロー(0T目)を行う ※1-10T目は draw() を参照
//  引  数：なし（グローバル変数）
//  戻り値：なし（グローバル変数）
//------------------------------------------------------------------------------------------------------
var hand_in         = new Array;    // 各No.のカードについて、手札に持っているか？ 値は、手札の所有枚数
var ini_hand_label  = new Array;    // 初期手札にどのラベルのカードを持っているか？ 値は、ラベル

function initial_draw(){
    for(No=0;No<20; No++){
        hand_in[No] = 0;    // 手札の初期化
    }
    for(i=0; i < Ini_hand; i++){            // 初期手札の枚数分、繰り返す //Ini_hand=3
        draw_1card();
        ini_hand_label[i] = label_no;       // 初期手札のラベルを記憶する(マリガンchk用)
    }
}




// _____________________________________________________________________________________________________
// Mulligan
// _____________________________________________________________________________________________________
//------------------------------------------------------------------------------------------------------
//  概　要：初期手札の引き直しを行う（マリガン）
//  引  数：なし（グローバル変数）
//  戻り値：なし
//------------------------------------------------------------------------------------------------------
function mulligan_chk(){

    if(mulligan_type != "none"){

        //mulligan_condition_chk();     // hand_in[]をチェックして、複合条件のtrue/falseをchkする

        switch(mulligan_type){

            case "select_draw_bef_ret":
                mul_keep_chk();                 // マリガン時の、キープカードのチェック
                for(i=0;i<mul_draw_num;i++){    
                    draw_1card();
                }
                mul_ret_deck_cd_chk();          // マリガン時の、キープしないカードをデッキに戻す
                break;

            case "select_draw_aft_ret":     // 未実装
                break;
            
            case "no_select_draw_bef_ret":  // 未実装
                break;

            case "no_select_draw_aft_ret":  // 未実装
                break;

            default:
                break;
        }
    }
}


//------------------------------------------------------------------------------------------------------
//  概　要：マリガン時の、キープカードのチェック
//  引  数：なし（グローバル変数）
//  戻り値：なし（グローバル変数）
//------------------------------------------------------------------------------------------------------
var mul_ret_deck_cd   = new Array;     // マリガン時にデッキに戻すカードのリスト 値=カードNo.
var mul_sp_cond_judge = new Array;     // マリガン時の他カード依存の特殊条件の判定 値=true/false.
var mul_draw_num;                      // マリガン時に、引き直す枚数 値=枚数

function mul_keep_chk(){      // マリガン時の、キープカードのチェック


    mul_draw_num = 0;  // 初期化 // マリガン時に、引き直す枚数 // mul_ret_deck_cd用の要素カウンタ も兼ねる
    for(No=0; No<20; No++){


        // ########### 下記、実装場所が間違っている -> mulligan_condition_chk() へ移動 ##############
        switch (mul_condition[(No * mariganPetternMax) + marigan_ptn]){
            case 1:                                     // マリガン複合条件 その１ 判定（仮)
                if( (hand_in[0]>0) && (hand_in[1]>0) ){ // No1 とNo2が1枚以上 初期手札にある場合
                    mul_sp_cond_judge[No] = true; 
                }
                    mul_sp_cond_judge[No] = false;
                break;
            
            default:
                mul_sp_cond_judge[No] = true;       // とりあえず、全部trueにしておく（本来は、条件番号毎にtrue/false判定させる)
        }
        // ########### 上記、実装場所が間違っている -> mulligan_condition_chk() へ移動 ##############


        if(hand_in[No]>0){



            if( (mul_a_keep[(No * mariganPetternMax) + marigan_ptn]>0) 
                && (hand_in[No] >= mul_a_in_hand_l[(No * mariganPetternMax) + marigan_ptn]) 
                && (hand_in[No] <= mul_a_in_hand_h[(No * mariganPetternMax) + marigan_ptn])
                && (mul_sp_cond_judge[No] == true)
              ){                                                                                        // Activeマリガン有 & Activeマリガンの範囲
                if(hand_in[No] <= mul_a_keep[(No * mariganPetternMax) + marigan_ptn]){                  // 初期ハンド <= 最大キープ数
                    /* No operation */                                                                  // 全キープ
                } else {                                                                                // 初期ハンド  > 最大キープ数
                    for(i=0; i< hand_in[No] - mul_a_keep[(No * mariganPetternMax) + marigan_ptn]; i++){ // デッキに戻す枚数分、
                        mul_ret_deck_cd[mul_draw_num] = No;                                             // デッキに戻すカードNo.を退避
                        mul_draw_num++;                                                                 // 引き直す枚数++
                    }
                    hand_in[No] = mul_a_keep[(No * mariganPetternMax) + marigan_ptn];                   // 最大キープ数だけキープ   *No.の退避後にする事(for文の条件を簡単にするため)
                }
            } else {                                                                                    // キープなし
                for(i=0; i< hand_in[No]; i++){                                                          // デッキに戻す枚数分、
                    mul_ret_deck_cd[mul_draw_num] = No;                                                 // デッキに戻すカードNo.を退避
                    mul_draw_num++;                                                                     // 引き直す枚数++
                }
                hand_in[No] = 0;                                                                        // キープなし   *No.の退避後にする事(for文の条件を簡単にするため)
            }

        }
    }
}

//------------------------------------------------------------------------------------------------------
//  概　要：マリガン時の、キープしないカードをデッキに戻す
//  引  数：なし（グローバル変数）
//  戻り値：なし（グローバル変数）
//------------------------------------------------------------------------------------------------------
function mul_ret_deck_cd_chk(){                                             // マリガン時の、キープしないカードをデッキに戻す

    if(mul_draw_num > 0){                                                   // 全キープ以外の時
        for(i=0; i<mul_draw_num; i++){                                      // デッキに戻すカードの枚数分繰り返す
            for(j=0; j<Ini_hand; j++){                                      // 全ての初期手札から、戻すべきカードを検索
                if(card_label[ini_hand_label[j]] == mul_ret_deck_cd[i]){    // 初期手札とデッキに戻すカード番号のNo.が一致
                    card_rest[ini_hand_label[j]] = true;                    // カードをデッキに戻す
                    break;                                                  // 戻すカード番号1つにつき、1枚だけカードをデッキに戻すので、ブレークさせる
                }
            }
        }
    }
}





// _____________________________________________________________________________________________________
// draw
// _____________________________________________________________________________________________________
//------------------------------------------------------------------------------------------------------
//  概　要：1〜10T目のドロー ※0T目は initial_draw() を参照
//  引  数：なし（グローバル変数）
//  戻り値：なし（グローバル変数）
//------------------------------------------------------------------------------------------------------
function draw(){

    switch(current_turn){
        case 1:
            if(your_turn == "first"){
                for(i=0;i<first_1T_draw;i++){
                    draw_1card();
                }
            } else if(your_turn == "second"){
                for(i=0;i<second_1T_draw;i++){
                    draw_1card();
                }
            } else {
                /* No operation */
            }
            break;

        default:
            draw_1card();
            break;
    }
}

// _____________________________________________________________________________________________________
// Whether the selected card can be played
// _____________________________________________________________________________________________________
//------------------------------------------------------------------------------------------------------
//  概　要：1-10Tに、プレイしたいカードが手札に〜枚数以上あるか or 〜枚数以下であるか判定する
//  引  数：なし（グローバル変数）
//  戻り値：なし（グローバル変数）
//------------------------------------------------------------------------------------------------------
function play_chk(){

    var all_play_xT = new Array(        // 各ターンの、各カードのプレイ枚数(2次元配列)
        play_1T,
        play_2T,
        play_3T,
        play_4T,
        play_5T,
        play_6T,
        play_7T,
        play_8T,
        play_9T,
        play_10T
    );
    
    for(No=0; No<20; No++){                                                                                         // No.1-20のカードをcheck
        if(all_play_xT[current_turn-1][(No  * playPatternMax) + play_ptn]>0){                                       // xTにプレイしたいカードが、1枚以上あるか？
            if(all_play_xT[current_turn-1][(No  * playPatternMax) + play_ptn] <= hand_in[No]){                      // プレイしたい枚数より、ハンドの枚数の方が多い
                hand_in[No] = hand_in[No] - all_play_xT[current_turn-1][(No  * playPatternMax) + play_ptn];         // xTのプレイ達成、手札を調整
            } else if (all_play_xT[current_turn-1][(No  * playPatternMax) + play_ptn] <= hand_in[same_no[No]-1]){   // (他効果用) プレイしたい枚数より、ハンドの枚数の方が多い
                hand_in[same_no[No]-1] -= all_play_xT[current_turn-1][(No  * playPatternMax) + play_ptn];           // (他効果用) xTのプレイ達成、手札を調整
            } else {
                targeted_play[repe_curr] = "disable";                                                               //ない場合は、OKフラグをOFFにする
                break;
            }

        } else if (all_play_xT[current_turn-1][(No  * playPatternMax) + play_ptn]<0){                           // xTに、引きたくないカードが、1枚以上あるか？
            if(hand_in[No] < ((-1) * (all_play_xT[current_turn-1][(No  * playPatternMax) + play_ptn]))  ){      // 引きたくないカードが、ハンドの中にy枚未満
                /* No operation */                                                                              // Trueケースは、処理なし(チェックしたいだけなので)
            } else {
                targeted_play[repe_curr] = "disable";                                                           // カードを引き込んでいた場合は、OKフラグをOFFにする
            }

        } else {
            /* No operation */                                                                                  // xTのプレイカード数 = 0 の場合
        }
    }
}


// _____________________________________________________________________________________________________
// card effect check (Only +- deck/hand effect)
// _____________________________________________________________________________________________________
//------------------------------------------------------------------------------------------------------
//  概　要：カードの効果※を実行するか否かを判定する　　※山札/手札のカードの枚数増減に関わる効果に限る
//  引  数：なし（グローバル変数）
//  戻り値：なし（グローバル変数）
//------------------------------------------------------------------------------------------------------
function effect_chk()
{
    var all_play_xT = new Array(        // 各ターンの、各カードのプレイ枚数（2次元配列)
    play_1T,
    play_2T,
    play_3T,
    play_4T,
    play_5T,
    play_6T,
    play_7T,
    play_8T,
    play_9T,
    play_10T
    );

    // effeck chk need/not
    if(targeted_play[repe_curr] == "enable")    //OKフラグがONのままなら
    {           
        for(No=0; No<20; No++)
        {
            for(timing=0; timing<current_turn; timing++)                                    // 効果発動する遅延T(タイミング)
            {                                                                                               
                if((all_play_xT[current_turn-1-timing][(No * playPatternMax) + play_ptn] > 0) // xTのプレイ枚数が1枚以上、効果あり、効果タイミングyT後
                    && (eff_type[No]!="none") 
                    && (eff_timing[No]==timing))
                {                                                                 
                    for(i=0; i< all_play_xT[current_turn-1-timing][(No  * playPatternMax) + play_ptn]; i++) // xTのプレイ枚数分、効果を繰り返す
                    {                                            
                        effect_type_chk(No);                                                                // Effect type check
                    }
                }
            }
        }       
    }
}


//------------------------------------------------------------------------------------------------------
//  概　要：カードの効果※のタイプを判定する　　※山札/手札のカードの枚数増減に関わる効果に限る
//  引  数：なし（グローバル変数）
//  戻り値：なし
//------------------------------------------------------------------------------------------------------
function effect_type_chk(No)
{
    switch(eff_type[No])
    {
        case "draw":                // 単純なドロー
            for(i=0; i<eff_num[No]; i++)
            {
                draw_1card();
            }
            break;
        
        case "sarch_from_deck":      // 特定のカードをデッキから手札に加える （randomは未実装）
            sarch_from_deck(No);
            break;
        
        case "play_from_deck":      // 特定のカードをデッキから引き、直接使用する(手札には加えない) （randomは未実装）
            play_from_deck(No);
            break;
        
        case "add_to_hand":         // 特定のカードを手札に追加する （未実装）
            break;
        
        case "add_to_deck":         // 特定のカードを山札に追加する（未実装）
            break;
        
        case "discard_hand":        // 手札からカードを捨てる（未実装）
            break;
        
        case "return_hand_to_deck": // 手札からデッキにカードを戻す（未実装）
            break;
        
        case "discard_deck":        // デッキからカードを捨てる（未実装）
            break;
        
        default:
            break;
    }
}


// draw fully random 1 card in deck
//------------------------------------------------------------------------------------------------------
//  概　要：デッキからカードを1毎引く（完全にランダムに残りのデッキから１枚カードを引く）
//  引  数：なし（グローバル変数）
//  戻り値：なし（グローバル変数）
//------------------------------------------------------------------------------------------------------
// initial_draw(), draw(), effect_type_chk() から参照される

var label_no = 0;     // ラベルの番号

function draw_1card(){

    var sarch_continue = true;
    while(sarch_continue == true){                                  // １枚引けるまで検索を繰り返す

        label_no = Math.floor( Math.random() * card_label.length);  // 乱数で、引くカードのラベルを決定する
        if(card_rest[label_no] == true){                            // まだ引いてないカードであれば
            hand_in[card_label[label_no]]++;                        // 手札に加える
            current_deck--;                                         // 現在のデッキ枚数をー１する
            card_rest[label_no] = false;                            // デッキからなくなった（１度引いたカードは、今後、引けないようにする）
            sarch_continue = false;                                 // １枚引けたので、終了
        } else {
            sarch_continue = true;                                  // １枚引けなかったので、継続
        }
    }
}


// draw from deck
//------------------------------------------------------------------------------------------------------
//  概　要：特定のカードをデッキから手札に加える
//  引  数：なし
//  戻り値：なし
//------------------------------------------------------------------------------------------------------
function sarch_from_deck(No){

    switch(eff_choice[No]){
        case "each":
            sarch_from_deck_each(No);
            break;

        case "random":              // 未実装
            break;
        
        default:
            break;
    }
}

// draw from deck (each)
//------------------------------------------------------------------------------------------------------
//  概　要：特定のカードをサーチし、デッキから手札に加える（任意のカードを任意の枚数引く）
//  引  数：なし
//  戻り値：なし
//------------------------------------------------------------------------------------------------------
function sarch_from_deck_each(No){                                   

    var cnt;                                                        // 引いた枚数のカウント
    var all_eff_fil_no = new Array(                                 // 各フィルター指定番号について、2次元配列にする
        eff_fil_no1,
        eff_fil_no2,
        eff_fil_no3,
        eff_fil_no4,
        eff_fil_no5
    );

    for(fil_no=0; fil_no < 5; fil_no++){                                    // 各フィルター指定番号について (No.1-5まで指定可能)

        if(eff_num[No] >0){                                                 // 引く枚数が0以上の場合
            cnt=0;                                                          // 引く枚数のカウント用
            for(label_no=0; label_no<card_label.length; label_no++){        // デッキの全カードを検索する
                if( (card_label[label_no] == (all_eff_fil_no[fil_no][No]-1))// 引きたいカードと一致した場合
                  &&(card_rest[label_no] == true)                           // まだ引いてないカードであれば
                  ){            
                    hand_in[card_label[label_no]]++;                        // 手札に加える
                    current_deck--;                                         // 現在のデッキ枚数をー１する
                    card_rest[label_no] = false;                            // デッキからなくなった（１度引いたカードは、今後、引けないようにする）
                    cnt++;                                                  // 引いた枚数のカウントをプラスする
                    if(cnt>=eff_num[No]){                                   // 引く枚数に達したら、検索終了
                        break;
                    }
                }
            }    
        }
    } 
}

// play/discard from deck
//------------------------------------------------------------------------------------------------------
//  概　要：特定のカードをデッキから引き、直接使用する(手札には加えない) or デッキから捨てる
//  引  数：なし
//  戻り値：なし
//------------------------------------------------------------------------------------------------------
function play_from_deck(No){

    switch(eff_choice[No]){
        case "each":
            play_from_deck_each(No);
            break;

        case "random":              // 未実装
            break;
        
        default:
            break;
    }
}

// draw from deck (each)
//------------------------------------------------------------------------------------------------------
//  概　要：特定のカードをデッキから引き、直接使用する(手札には加えない) or デッキから捨てる（任意のカードを任意の枚数引く）
//  引  数：なし
//  戻り値：なし
//------------------------------------------------------------------------------------------------------
function play_from_deck_each(No){                                   // draw_from_deck_each()とほぼ同じ (手札に加える以外)

    var cnt;                                                        // 引いた枚数のカウント
    var all_eff_fil_no = new Array(                                 // 各フィルター指定番号について、2次元配列にする
        eff_fil_no1,
        eff_fil_no2,
        eff_fil_no3,
        eff_fil_no4,
        eff_fil_no5
    );

    for(fil_no=0; fil_no < 5; fil_no++){                                    // 各フィルター指定番号について (No.1-5まで指定可能)

        if(eff_num[No] >0){                                                 // 引く枚数が0以上の場合
            cnt=0;                                                          // 引く枚数のカウント用
            for(label_no=0; label_no<card_label.length; label_no++){        // デッキの全カードを検索する
                if( (card_label[label_no] == (all_eff_fil_no[fil_no][No]-1))// 引きたいカードと一致した場合
                  &&(card_rest[label_no] == true)                           // まだ引いてないカードであれば
                  ){            
//                  hand_in[card_label[label_no]]++;                        // デッキから直接プレイ or デッキから捨てる なので、手札には加えない)
                    current_deck--;                                         // 現在のデッキ枚数をー１する
                    card_rest[label_no] = false;                            // デッキからなくなった（１度引いたカードは、今後、引けないようにする）
                    cnt++;                                                  // 引いた枚数のカウントをプラスする
                    if(cnt>=eff_num[No]){                                   // 引く枚数に達したら、検索終了
                        break;
                    }
                }
            }    
        }
    } 
}




// #####################################################################################################
// write simulation results to html
// #####################################################################################################
//------------------------------------------------------------------------------------------------------
//  概　要：シミュレーションの計算結果を画面のテーブルに書き込みする
//  引  数：なし（グローバル変数）
//  戻り値：なし（画面）
//------------------------------------------------------------------------------------------------------
var result_tbl_no = 0;
var case_no = 0;
var total_1st = 0;
var total_2nd = 0;

function write_result()
{
    const cd_xT = ['.cd_1T','.cd_2T','.cd_3T','.cd_4T','.cd_5T','.cd_6T','.cd_7T','.cd_8T','.cd_9T','.cd_10T']; //各Tのプレイ数のclass名   (最大10)
    const sm_xT = ['.sm_1T','.sm_2T','.sm_3T','.sm_4T','.sm_5T','.sm_6T','.sm_7T','.sm_8T','.sm_9T','.sm_10T']; //各Tのプレイカード記録場所  (最大10)

    // その他の結果を書き込みする
    document.querySelectorAll('.sm_case_no')[result_tbl_no].textContent = case_no + 1;          // Case No. を書き込む
    document.querySelectorAll('.sm_marigan_no')[result_tbl_no].textContent = marigan_ptn + 1;   // Marigan パターン を書き込む
    document.querySelectorAll('.sm_play_no')[result_tbl_no].textContent = play_ptn + 1;         // Play パターン を書き込む
    document.querySelectorAll('.sm_done')[result_tbl_no].textContent = repe_simu;               // シミュレーション回数を書き込む

    if (total_minus[play_ptn] == false) {                                                       // 合計を計算時の+/-
        document.querySelectorAll('.sm_plus_minus')[result_tbl_no].textContent = "+";
    } else {
        document.querySelectorAll('.sm_plus_minus')[result_tbl_no].textContent = "-";
    }

    

    // 1-10Tにプレイしたカード名の書き込み欄を初期化する
    for(i=0; i<10; i++)
    {
        document.querySelectorAll(sm_xT[i])[result_tbl_no].textContent ="";               // 初期化
    }

    // 1-10Tにプレイしたカード名を書き込む
    for(No=0; No<20; No++)
    {
        for(tern=0; tern<10; tern++)
        {
            if(document.querySelectorAll(cd_xT[tern])[(No  * playPatternMax) + play_ptn].value > 0)                                         // 1枚以上playする場合
            {                                        
                for(i=0; i< document.querySelectorAll(cd_xT[tern])[(No  * playPatternMax) + play_ptn].value; i++)                           // 2枚以上playする場合、枚数分繰り返す
                {                          
                    document.querySelectorAll(sm_xT[tern])[result_tbl_no].textContent += document.querySelectorAll('.cd_name')[No].value + ",";   // playカード名を書き込む
                }
            } 
            else if (document.querySelectorAll(cd_xT[tern])[(No  * playPatternMax) + play_ptn].value < 0)                                 // 手札に1枚もない場合
            {                                                                                                                               // playカード名を書き込む
                    document.querySelectorAll(sm_xT[tern])[result_tbl_no].textContent += document.querySelectorAll('.cd_name')[No].value + ((-1)*(document.querySelectorAll(cd_xT[tern])[(No  * playPatternMax) + play_ptn].value)) + "枚未満," ;                                                                                         
            } 
            else 
            {
                /* No operation */
            }

            // 色の調整
            if (total_minus[play_ptn] == true) {                                           // 合計を計算時-の時
                document.querySelectorAll(sm_xT[tern])[result_tbl_no].style.color = "lightgray";  // グレーっぽいのに変更する
              //document.querySelectorAll(sm_xT[tern])[result_tbl_no].style.color = "B4B4B4";     // グレーっぽいのに変更する
            }
        
        }
    }

    // シミュレート結果(プレイできる確率)を書き込む
    if(your_turn == "first")
    {
        document.querySelectorAll('.sm_result_1st')[result_tbl_no].textContent = rate_ok_simu;                            // 先攻時のシミュレート結果
        // 色の調整
        if (total_minus[play_ptn] == true) {　// 合計を計算時-の時
            document.querySelectorAll('.sm_result_1st')[result_tbl_no].style.color = "lightgray";
        }
        

        // 先攻時の合計を計算する
        if(total_minus[play_ptn]==false){
            total_1st += rate_ok_simu; // 合計確率にプラスする
        } else {
            total_1st -= rate_ok_simu; // 合計確率からマイナスする
        }

        // 先攻時の合計を書き込む
//        document.querySelector('#total_1st').textContent = "Total(1st)= " + Math.round(total_1st * 100) / 100 +"%";

    }
    else if(your_turn == "second")
    {
        document.querySelectorAll('.sm_result_2nd')[result_tbl_no].textContent = rate_ok_simu;                            // 後攻時のシミュレート結果
        // 色の調整
        if (total_minus[play_ptn] == true) {　// 合計を計算時-の時
            document.querySelectorAll('.sm_result_2nd')[result_tbl_no].style.color = "lightgray";
        }


        // 後攻時の合計を計算する
        if(total_minus[play_ptn]==false){
            total_2nd += rate_ok_simu; // 合計確率にプラスする
        } else {
            total_2nd -= rate_ok_simu; // 合計確率からマイナスする
        }

        // 後攻時の合計を書き込む
//        document.querySelector('#total_2nd').textContent = "Total(2nd)= " + Math.round(total_2nd*100)/100 +"%";

        // ケースNoをずらす
        case_no++; 

        // 結果の記入欄をずらす
        result_tbl_no++;
    }
    else
    {
        /* No operation */
    }

}



//------------------------------------------------------------------------------------------------------
//  概　要：play 1〜x のシミュレート結果の合計を書き込む
//  引  数：なし（グローバル変数）
//  戻り値：なし（画面）
//------------------------------------------------------------------------------------------------------
function write_total_result()
{

    // 画面に書き込み
    document.querySelectorAll('.sm_case_no')[result_tbl_no].textContent = "Total:" + (initial_case_no+1) + "~" + (result_tbl_no);   // Case No. を書き込む(合計)
    document.querySelectorAll('.sm_result_1st')[result_tbl_no].textContent = Math.round(total_1st * 100) / 100;                     // 先攻時のシミュレート結果の合計
    document.querySelectorAll('.sm_result_2nd')[result_tbl_no].textContent = Math.round(total_2nd * 100) / 100;                     // 後攻時のシミュレート結果の合計

    // 画面の文字を変更する
    document.querySelectorAll('.sm_case_no')[result_tbl_no].style.color    = "blue";
    document.querySelectorAll('.sm_result_1st')[result_tbl_no].style.color = "blue";
    document.querySelectorAll('.sm_result_2nd')[result_tbl_no].style.color = "blue";


    //初期化
    total_1st = 0;
    total_2nd = 0;

    // 結果の記入欄をずらす
    result_tbl_no++;
}


// ____________________________________________
// 以上