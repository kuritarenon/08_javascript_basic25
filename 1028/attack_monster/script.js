// 初期設定
const MAX_HP = 100;
const DAMAGE_MIN = 8;
const DAMAGE_MAX = 20;

//震えるアニメーション関数の定義
function shakeEnemy() {
  const enemyArea = document.querySelector('.enemy');
  enemyArea.classList.remove('hit');
  enemyArea.offsetWidth;// 再描写のためのおまじない
  enemyArea.classList.add('hit');
}

// 状態（HP）
let hp = MAX_HP;// 100

// モンスター
const enemy = document.querySelector('.enemyImg');

// HP表示部分
const hpText = document.querySelector('.hpText span');
const hpBar = document.querySelector('.hpBar');

// 攻撃処理
const attackButton = document.querySelector('.attackBtn');

// 効果音を取得
const sehit = document.querySelector('#se-hit');
const sedefeat = document.querySelector('#se-defeat')

// １ランダムダメージの実装
attackButton.addEventListener('click', function () {
  const damage =
    Math.floor(Math.random() * (DAMAGE_MAX - DAMAGE_MIN + 1)) + DAMAGE_MIN;
  // ダメージ計算
  hp = hp - damage;
  hpText.textContent = hp;

  // 2 HP表示の更新ロジック修正（マイナス値の防止）
  if (hp <= 0) {
    hpText.textContent = 0;
    hpBar.value = 0;
    // 3 撃破時のエフェクト適用（enemy - fly または enemy - squash）
    enemy.classList.add('enemy--squash');

    // 効果音の追加（オプション）
    shakeEnemy();
    sedefeat.currentTime = 0;
    sedefeat.play();

    // 4 撃破後のボタン無効化処理
    attackButton.disabled = true;
    //5  撃破メッセージの表示
    document.querySelector('.log').textContent = "モンスターを倒した！"
    // 変数に入れずにそのまま.でつなぐ書き方でもOK


  } else {
    hpText.textContent = hp;
    hpBar.value = hp;
    // ６攻撃時の効果を追加
    shakeEnemy();
    sehit.currentTime = 0;
    sehit.play();
  }
});
// リスタート機能の実装（オプション）





// モンスター２用

// モンスター
const enemy2 = document.querySelector('.enemyImg');

// HP表示部分
const hpText2 = document.querySelector('.hpText span');
const hpBar2 = document.querySelector('.hpBar');

// 攻撃処理
const attackButton2 = document.querySelector('.attackBtn2');

// 効果音を取得
const sehit2 = document.querySelector('#se-hit2');
const sedefeat2 = document.querySelector('#se-defeat2')

// １ランダムダメージの実装
attackButton2.addEventListener('click', function () {
  console.log('attack');
  const damage2 =
    Math.floor(Math.random() * (DAMAGE_MAX - DAMAGE_MIN + 1)) + DAMAGE_MIN;
  console.log('random');
  // ダメージ計算
  hp = hp - damage2;
  console.log('hp2')

  hpText2.textContent = hp;
  console.log('hpText2')

  // // 2 HP表示の更新ロジック修正（マイナス値の防止）
  if (hp2 <= 0) {
    hpText2.textContent = 0;
    hpBar2.value = 0;
    // 3 撃破時のエフェクト適用（enemy - fly または enemy - squash）
    enemy2.classList.add('enemy--squash');

    //   // 効果音の追加（オプション）
    //   shakeEnemy();
    //   sedefeat2.currentTime = 0;
    //   sedefeat2.play();

    //   // 4 撃破後のボタン無効化処理
    //   attackButton2.disabled = true;
    //   //5  撃破メッセージの表示
    //   document.querySelector('.log').textContent = "モンスターを倒した！"
    //   // 変数に入れずにそのまま.でつなぐ書き方でもOK


    // } else {
    //   hpText2.textContent = hp2;
    //   hpBar2.value = hp2;
    //   // ６攻撃時の効果を追加
    //   shakeEnemy();
    //   sehit.currentTime = 0;
    //   sehit.play();

  });
