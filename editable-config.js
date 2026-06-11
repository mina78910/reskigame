// リスキリングセンター3 - 編集用設定
// スマホでも微修正しやすいよう、よく変更する座標・寸法だけをこのファイルに集約しています。
// 壁・床・当たり判定など複数箇所で連動する値は roomLayout を変更してください。
//
// 座標の見方:
// - X は左右方向です。マイナスが左、プラスが右です。
// - Z は奥行き方向です。マイナスが奥、プラスが手前です。
// - サイズや座標の単位は Three.js 上のメートル相当の値です。
(function () {
  const roomLayout = {
    // 部屋の大外。外周壁・床/天井・前方の当たり判定の基準になります。
    outerMinX: -18,
    outerMaxX: 18,
    baseDepth: 14,
    backExtension: 10,
    frontMaxZ: 17.16,
    wallThickness: 0.2,
    playerWallPadding: 0.45
  };

  window.RESKI_EDITABLE_CONFIG = {
    roomLayout,

    // 前方ショールーム化のため、外周壁の少し内側まで既存内装を撤去する余白。
    showcaseClearance: 0.25,

    // 座標ガイド表示。Z max は roomLayout.frontMaxZ と連動させます。
    coordinateGuides: {
      minX: -16,
      maxX: 16,
      minZ: -15,
      maxZ: roomLayout.frontMaxZ
    },

    // 単体で動かす内装。位置・サイズの微修正はここを編集してください。
    // 細かい形状（へこみ・でっぱり・手すり等）は index.html の各 create... 関数で生成します。
    // それらの凹凸はオブジェクト原点からの相対位置で作るため、親の position を変えると一緒に追従します。
    //
    // 各項目の見方:
    // - id: 管理用の名前です。重複しないようにします。
    // - type: 生成する物の種類です。index.html 側の create... 関数と対応しています。
    // - minX / maxX: 左右方向の端の位置です。差分が横幅になります。
    // - centerZ: 奥行き方向の中心位置です。
    // - depth: 手前/奥方向の厚みです。
    // - height: 床から上面までの高さです。
    // - topThickness: 天板だけの厚みです。
    interiorObjects: [
      // 物の名前: 木目＋黒大理石カウンター
      // 概要: 正面寄りに置く受付/作業用の横長カウンターです。
      //       minX/maxX で横幅、centerZ で前後位置、depth/height/topThickness で大きさを調整します。
      {
        id: 'main-marble-counter',
        type: 'woodMarbleCounter',
        minX: -5.0,
        maxX: 2.0,
        depth: 1.0,
        height: 1.22,
        topThickness: 0.08,
        centerZ: 4.41
      },
      // 物の名前: 黒格子付き高台
      // 概要: 右奥側に置く、木製デッキ・階段・黒い格子手すりを組み合わせた高台です。
      //       現状は形状と位置を index.html の createRaisedLatticePlatform 関数で固定生成しています。
      {
        id: 'raised-lattice-platform',
        type: 'raisedLatticePlatform'
      },
      // 物の名前: 木製ダイニングセット
      // 概要: 参考画像のような、明るい木目の四角テーブルと4脚の木製チェアです。
      //       centerX/centerZ で配置、rotationY で向き、tableSize/chairDistance で広がりを調整できます。
      {
        id: 'reference-wood-dining-set',
        type: 'woodDiningSet',
        centerX: 6.2,
        centerZ: 5.8,
        rotationY: 0.08,
        tableSize: 1.72,
        tableHeight: 0.76,
        tableTopThickness: 0.08,
        chairDistance: 1.35,
        chairScale: 1.0
      }
    ]
  };
}());
