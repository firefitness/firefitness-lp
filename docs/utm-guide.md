# FIREFITNESS UTMパラメータ設計書

## 概要
すべての広告・チラシ・SNS投稿からのリンクにUTMパラメータを付与することで、流入元を正確に把握できます。

---

## UTMパラメータ一覧

| パラメータ | 用途 | 例 |
|-----------|------|-----|
| utm_source | 流入元（どこから） | google, meta, flyer, googlemap |
| utm_medium | 媒体種別（どうやって） | cpc, organic, qrcode, social |
| utm_campaign | キャンペーン名 | winter2025, postnatal, trial |
| utm_content | コンテンツ識別（任意） | banner_a, header_cta |

---

## 流入元別URL一覧

### 1. Google広告 (P-MAX, 検索広告)

**メインLP**
```
https://www.firefitness-okayama.com/?utm_source=google&utm_medium=cpc&utm_campaign=pmax_main
```

**産後LP**
```
https://www.firefitness-okayama.com/mamarestore?utm_source=google&utm_medium=cpc&utm_campaign=pmax_postnatal
```

---

### 2. Meta広告 (Instagram/Facebook)

**メインLP**
```
https://www.firefitness-okayama.com/?utm_source=meta&utm_medium=cpc&utm_campaign=ig_main
```

**産後LP**
```
https://www.firefitness-okayama.com/mamarestore?utm_source=meta&utm_medium=cpc&utm_campaign=ig_postnatal
```

---

### 3. Googleマップ（ビジネスプロフィール）

**ウェブサイトリンク**
```
https://www.firefitness-okayama.com/?utm_source=googlemap&utm_medium=organic&utm_campaign=gbp
```

---

### 4. チラシ・ポスター（QRコード用）

**メインLP - チラシA**
```
https://www.firefitness-okayama.com/?utm_source=flyer&utm_medium=qrcode&utm_campaign=flyer_a
```

**メインLP - チラシB（ポスティング）**
```
https://www.firefitness-okayama.com/?utm_source=flyer&utm_medium=qrcode&utm_campaign=posting_b
```

**産後LP - 産院チラシ**
```
https://www.firefitness-okayama.com/mamarestore?utm_source=flyer&utm_medium=qrcode&utm_campaign=clinic_postnatal
```

---

### 5. LINE中間ページ

**メインLPから**
```
https://www.firefitness-okayama.com/line-main?from=main
```

**産後LPから**
```
https://www.firefitness-okayama.com/line-mama?from=postnatal
```

**チラシから直接**
```
https://www.firefitness-okayama.com/line-main?from=flyer&utm_source=flyer&utm_medium=qrcode&utm_campaign=line_flyer
```

---

### 6. 店舗別予約ページ（gym-reservation連携）

#### 島田本町店

**メインLPから**
```
https://www.firefitness-okayama.com/shimada-reserve?source=mainlp
```

**Googleマップから**
```
https://www.firefitness-okayama.com/shimada-reserve?source=googlemap
```

**LINEから**
```
https://www.firefitness-okayama.com/shimada-reserve?source=line
```

**チラシから**
```
https://www.firefitness-okayama.com/shimada-reserve?source=flyer&campaign=flyer_shimada_a
```

#### 伊福町店

**メインLPから**
```
https://www.firefitness-okayama.com/ifuku-reserve?source=mainlp
```

**Googleマップから**
```
https://www.firefitness-okayama.com/ifuku-reserve?source=googlemap
```

**LINEから**
```
https://www.firefitness-okayama.com/ifuku-reserve?source=line
```

**チラシから**
```
https://www.firefitness-okayama.com/ifuku-reserve?source=flyer&campaign=flyer_ifuku_a
```

---

### 7. 予約ウィジェット直接埋め込み（iframe用）

**店舗選択可能（メインLP用）**
```
https://gym-reservation-firefitnessyuma-gmailcoms-projects.vercel.app/widget/trial?source=mainlp_widget
```

**島田本町店固定**
```
https://gym-reservation-firefitnessyuma-gmailcoms-projects.vercel.app/widget/trial?location=shimada&lockLocation=true&source=embed
```

**伊福町店固定**
```
https://gym-reservation-firefitnessyuma-gmailcoms-projects.vercel.app/widget/trial?location=ifuku&lockLocation=true&source=embed
```

---

## QRコード作成方法

1. [QRコードジェネレーター](https://www.qrcode-monkey.com/)にアクセス
2. 上記URLを貼り付け
3. QRコードをダウンロード
4. チラシ・ポスターに配置

---

## GA4での確認方法

1. [GA4](https://analytics.google.com/) にログイン
2. **レポート → 集客 → トラフィック獲得** を開く
3. 「セッションのデフォルトチャネルグループ」で流入元を確認
4. 「セッションのソース/メディア」でより詳細に確認

---

## Looker Studioダッシュボード

GA4と連携したダッシュボードで以下を可視化：
- 流入元別セッション数
- LINE登録ボタンクリック数
- 予約ボタンクリック数
- ページ別直帰率
- デバイス別アクセス

---

## 注意事項

1. **URLは必ず小文字で統一**
2. **日本語は使わない**（文字化け防止）
3. **スペースは使わない**（_アンダースコアを使用）
4. **チラシごとにキャンペーン名を変える**（効果測定のため）
