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

    // カフェ区画の最新配置。ユーザー指定は「Z, X」順なので、ここでは pointsZX にそのまま保持します。
    // 不足している奥行き・幅・向きは index.html 側で仮寸法を補って生成します。
    cafeLayout: {
      shell: {
        pointsZX: [
          { z: 17, x: 7 },
          { z: 10, x: 7 },
          { z: 17, x: -7 },
          { z: 10, x: -7 }
        ]
      },
      platforms: [
        {
          id: 'single-front-stand',
          label: '台',
          pointsZX: [{ z: 9, x: 7 }],
          width: 1.25,
          depth: 1.25,
          height: 2
        },
        {
          id: 'raised-platform',
          label: '高台',
          pointsZX: [
            { z: 0, x: 14 },
            { z: -12, x: 14 },
            { z: -11, x: 9 },
            { z: 0, x: 9 }
          ],
          height: 2
        },
        {
          id: 'serving-counter',
          label: '配膳台',
          pointsZX: [
            { z: 17, x: -16 },
            { z: 17, x: -14 },
            { z: 4, x: -16 },
            { z: 4, x: -14 }
          ],
          height: 2
        },
        {
          id: 'stage-strip',
          label: 'ステージ',
          pointsZX: [
            { z: 4, x: -14 },
            { z: 4, x: -16 }
          ],
          depth: 1.4,
          height: 0.3
        },
        {
          id: 'back-stand',
          label: '台',
          pointsZX: [
            { z: 5, x: -7 },
            { z: 13, x: -7 },
            { z: 13, x: -8 },
            { z: 5, x: -8 }
          ],
          height: 1.05
        },
        {
          id: 'shelf',
          label: '棚',
          pointsZX: [
            { z: 9, x: -7 },
            { z: 9, x: -6 },
            { z: 5, x: -7 },
            { z: 5, x: -6 }
          ],
          height: 1.9
        }
      ],
      furniture: [
        {
          id: 'main-marble-counter',
          type: 'woodMarbleCounter',
          label: '大理石カウンター',
          pointsZX: [
            { z: 6, x: 7 },
            { z: 5, x: 7 },
            { z: 6, x: -2 },
            { z: 5, x: -2 }
          ],
          height: 1.22,
          topThickness: 0.08
        },
        {
          id: 'long-table-benches',
          type: 'longTableWithBenches',
          label: '長机＆両サイド水平長椅子',
          pointsZX: [
            { z: -3, x: 0 },
            { z: 2, x: -3 }
          ]
        },
        {
          id: 'square-table-zone-front',
          type: 'squareTableSets',
          label: '四角テーブル＆４椅子セット×4',
          pointsZX: [
            { z: -4, x: 6 },
            { z: -4, x: 1 },
            { z: 1, x: 1 },
            { z: 1, x: 6 }
          ],
          count: 4
        },
        {
          id: 'square-table-zone-back',
          type: 'squareTableSets',
          label: '四角テーブル＆４椅子セット×4',
          pointsZX: [
            { z: 1, x: -5 },
            { z: 1, x: -8 },
            { z: -4, x: -5 },
            { z: -4, x: -8 }
          ],
          count: 4
        },
        {
          id: 'counter-seats',
          type: 'counterSeats',
          label: 'カウンター席テーブルつき',
          pointsZX: [
            { z: -14, x: -16 },
            { z: -15, x: -16 },
            { z: -14, x: -2 },
            { z: -15, x: -2 }
          ]
        }
      ]
    }
  };
}());
