# メインLP画像フォルダ

このフォルダには、FIREFITNESSメインLPで使用する画像を配置してください。

## 必要な画像一覧

### ヒーローセクション
- `hero-bg.jpg` - ヒーロー背景画像（現在は外部URL使用）

### ビフォーアフターセクション
- `ba1.png` - 54歳女性のビフォーアフター
- `ba2.png` - 33歳女性のビフォーアフター
- `ba3.png` - 45歳男性のビフォーアフター

### 選ばれる理由セクション
- `feature1.png` - 完全個室の画像
- `feature2.png` - 価格設定の画像
- `feature3.png` - アクセスの画像
- `feature4.png` - 食事指導の画像

### 体験予約の流れセクション
- `flow1.png` - 予約イメージ
- `flow2.png` - カウンセリング
- `flow3.png` - 体験トレーニング
- `flow4.png` - 入会

### トレーナー紹介セクション
- `trainer1.png` - 岡田雄磨
- `trainer2.png` - 山本舞香
- `trainer3.png` - 板倉龍聖

### 店舗情報セクション
- `location1.png` - 島田本町店
- `location2.png` - 伊福町店

### CTAセクション
- `cta-bg.jpg` - CTA背景画像（現在は外部URL使用）

## 画像を配置したら

各コンポーネントファイルで外部URLをローカルパスに変更してください。

例：
```tsx
// Before
src="https://www.firefitness-okayama.com/wp-content/uploads/..."

// After
src="/images/main/feature1.png"
```

## 画像の推奨サイズ

- ヒーロー背景: 1920x1080px以上
- ビフォーアフター: 800x600px
- 特徴画像: 600x400px
- フロー画像: 400x400px
- トレーナー: 600x800px
- 店舗: 800x600px
