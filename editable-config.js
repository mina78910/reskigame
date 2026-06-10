// リスキリングセンター3 - 編集用設定
// スマホでも微修正しやすいよう、よく変更する座標・寸法だけをこのファイルに集約しています。
// 壁・床・当たり判定など複数箇所で連動する値は roomLayout を変更してください。
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
    interiorObjects: [
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
      {
        id: 'raised-lattice-platform',
        type: 'raisedLatticePlatform'
      }
    ]
  };
}());
