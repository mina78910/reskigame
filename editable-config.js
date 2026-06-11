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

    // スタジオ風天井にする範囲。指定座標（Z2/X7、Z-11/X7、Z2/X-7、Z-9/X-7）を
    // X/Z 形式へ変換した四角形です。ここだけアルミ配管・電気配線を露出させます。
    studioCeilingZone: [
      { x: -7, z: 2 },
      { x: 7, z: 2 },
      { x: 7, z: -11 },
      { x: -7, z: -9 }
    ],

    // 白い壁で天井まで覆うエリア。指定座標（Z17/X7、Z10/X7、Z17/X-7、Z10/X-7）を
    // X/Z 形式へ変換した四角形です。四辺に床から天井までの白壁を立てます。
    whiteWallZones: [
      {
        id: 'front-white-wall-zone',
        minX: -7,
        maxX: 7,
        minZ: 10,
        maxZ: 17
      }
    ],

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
      // 物の名前: 整列した学習テーブル＆チェア
      // 概要: 参考画像のような、明るい天板・黒い細脚・木板背もたれの机と椅子です。
      //       指定された2つの範囲（X:-6〜1 / Z:-12〜-10、X:-6〜1 / Z:-8〜-6）に整列配置します。
      {
        id: 'aligned-study-table-chair-zone-back',
        type: 'alignedStudyTableChairs',
        minX: -6.0,
        maxX: 1.0,
        centerZ: -11.0,
        count: 5
      },
      {
        id: 'aligned-study-table-chair-zone-front',
        type: 'alignedStudyTableChairs',
        minX: -6.0,
        maxX: 1.0,
        centerZ: -7.0,
        count: 5
      },
      // 物の名前: 木製ダイニングセット
      // 概要: 参考画像のような、明るい木目の四角テーブル＋4脚の木製チェアです。
      //       centerX/centerZ で配置、rotationY で向き、tableSize/chairDistance で広がりを調整します。
      //       指定座標（X/Z）にピンポイントで8セット配置します。
      {
        id: 'wood-dining-set-x6-z1',
        type: 'woodDiningSet',
        centerX: 6,
        centerZ: 1,
        rotationY: 0.08,
        tableSize: 1.08,
        tableHeight: 0.74,
        tableTopThickness: 0.075,
        chairDistance: 0.88,
        chairScale: 0.72
      },
      {
        id: 'wood-dining-set-x3-z1',
        type: 'woodDiningSet',
        centerX: 3,
        centerZ: 1,
        rotationY: -0.06,
        tableSize: 1.08,
        tableHeight: 0.74,
        tableTopThickness: 0.075,
        chairDistance: 0.88,
        chairScale: 0.72
      },
      {
        id: 'wood-dining-set-x6-z-2',
        type: 'woodDiningSet',
        centerX: 6,
        centerZ: -2,
        rotationY: 0.18,
        tableSize: 1.08,
        tableHeight: 0.74,
        tableTopThickness: 0.075,
        chairDistance: 0.88,
        chairScale: 0.72
      },
      {
        id: 'wood-dining-set-x3-z-2',
        type: 'woodDiningSet',
        centerX: 3,
        centerZ: -2,
        rotationY: -0.12,
        tableSize: 1.08,
        tableHeight: 0.74,
        tableTopThickness: 0.075,
        chairDistance: 0.88,
        chairScale: 0.72
      },
      {
        id: 'wood-dining-set-x-5-z1',
        type: 'woodDiningSet',
        centerX: -5,
        centerZ: 1,
        rotationY: Math.PI / 2 + 0.05,
        tableSize: 1.08,
        tableHeight: 0.74,
        tableTopThickness: 0.075,
        chairDistance: 0.88,
        chairScale: 0.72
      },
      {
        id: 'wood-dining-set-x-5-z-2',
        type: 'woodDiningSet',
        centerX: -5,
        centerZ: -2,
        rotationY: Math.PI / 2 - 0.05,
        tableSize: 1.08,
        tableHeight: 0.74,
        tableTopThickness: 0.075,
        chairDistance: 0.88,
        chairScale: 0.72
      },
      {
        id: 'wood-dining-set-x-8-z-2',
        type: 'woodDiningSet',
        centerX: -8,
        centerZ: -2,
        rotationY: Math.PI / 2 + 0.12,
        tableSize: 1.08,
        tableHeight: 0.74,
        tableTopThickness: 0.075,
        chairDistance: 0.88,
        chairScale: 0.72
      },
      {
        id: 'wood-dining-set-x-8-z1',
        type: 'woodDiningSet',
        centerX: -8,
        centerZ: 1,
        rotationY: Math.PI / 2 - 0.12,
        tableSize: 1.08,
        tableHeight: 0.74,
        tableTopThickness: 0.075,
        chairDistance: 0.88,
        chairScale: 0.72
      },
      // 物の名前: 天井まで届く円柱の柱
      // 概要: 参考画像の赤印のようなコンクリート調の丸柱です。
      //       centerX/centerZ で柱の中心位置、radius で太さを調整します。高さは天井まで自動で伸びます。
      {
        id: 'ceiling-column-x7-z-14',
        type: 'ceilingCylinderColumn',
        centerX: 7,
        centerZ: -14,
        radius: 0.36
      },
      {
        id: 'ceiling-column-x-9-z-14',
        type: 'ceilingCylinderColumn',
        centerX: -9,
        centerZ: -14,
        radius: 0.36
      },
      // 物の名前: 卓球台
      // 概要: 参考画像のような、明るい天板・中央ネット・木脚付きの卓球台です。
      //       指定範囲（X:5〜7 / Z:-12〜-7）いっぱいに1台だけ配置します。
      {
        id: 'ping-pong-table-x5-7-z-12--7',
        type: 'pingPongTable',
        minX: 5,
        maxX: 7,
        minZ: -12,
        maxZ: -7,
        tableHeight: 0.76,
        topThickness: 0.08
      }
    ]
  };
}());
