# webpack-crash-course

本リポジトリは、Udemyのプログラミングコース「モジュールバンドラーwebpackを1日で習得！しかもフルスクラッチでインストールからカスタマイズまでの手順を理解する」

で実装したソースコードを管理するためのものです。

## 本セクションで扱うソースコード

「本セクションで扱うソースコード」は以下の`git clone`コマンドで取得することが可能です。

```bash
$ git clone https://github.com/DiveIntoHacking/webpack-crash-course.git
```

以下の表は、各レクチャーの名称とそのレクチャーで作成されたブランチ名との対応を示す表です。

もし、レクチャーの中でうまく動作せず行き詰まったり、あるいは正常に動作はしたものの自分の書いたコードとの比較を行ったりするといった場合には、
各ブランチをcheckoutして参考にしてみてください。
全てレクチャーの収録時のソースコードと全く同じものをcommitしています。

|レクチャー名|ブランチ名|
|---|---|
| いきなり！動かしてwebpackの全体像を把握しよう - webpack適用前 | getting-started-before-webpack |
| いきなり！動かしてwebpackの全体像を把握しよう - webpack適用後 | getting-started-after-webpack |
| webpack-dev-serverを導入して開発環境を整備しよう | webpack-dev-server |
| 開発環境と本番環境の違いについて | - |
| モジュールについて | modules |
| css-loaderとstyle-loaderでスタイルを取り込もう | css-loader-and-style-loader |
| url-loaderで画像を取り込もう、 file-loaderで画像をファイルとして取り込もう | url-loader |
| sass-loaderでSassのコードを取り込もう | sass-loader |
| babel-loaderやhtml-webpack-pluginを利用しReact開発環境を構築しよう | babel-loader-and-react-development |
| mini-css-extract-plugin でスタイルをcssファイルに分離しよう | mini-css-extract-plugin |
| uglifyjs-webpack-plugin でconsole.log関数の自動削除をしよう | uglifyjs-webpack-plugin |
| optimize-css-assets-webpack-plugin でスタイルシートを圧縮しよう | optimize-css-assets-webpack-plugin |
| ソースマップを生成しよう | source-map |
| eslint-loaderでJavaScriptの静的解析をリアルタイムに実行しよう | eslint-loader |

## 注意事項

本コースでは、様々なnpm パッケージをインストールしますが、全て、バージョンを特定してインストールしています。

動画の内容と同じ動作を保証するためには同じバージョンのパッケージをインストールする必要がありますが、動画の中でもバージョンを指定したインストールの方法を指示していますので、その通りに実行してみてください。

例えば、webpackをインストールする場合は、以下の方法を推奨します。


```bash
$ npm install --save-dev webpack@4.29.0
```

以下のようにバージョンを未指定でインストールした場合は、最新のバージョンのパッケージがインストールされることになり、動画の中で紹介している挙動やUIとは異なるものになる可能性がありますので、非推奨です。

もし以下のようにされる場合は自己責任で行なってください。

```bash
$ npm install --save-dev webpack
```

## FAQ

gitやGitHubに慣れていない方から寄せられる質問をまとめています。

### リポジトリの変更などを知る方法はありますか？

こちらのリポジトリのトップページの画面上部にある

starボタンをクリックすると、GitHubのトップページのタイムラインにそのリポジトリを追跡することができますのでやってみてください。

### 自分のアカウントにリポジトリをぶら下げたいのですが。。。

forkすることで可能です。画面右上の`Fork`ボタンをクリックしてください。

### リポジトリを新規にcloneを行い、該当のブランチにcheckoutする方法は？

`git clone`後に、例えば、`modules`というブランチをcheckoutしたい場合を例にすると、以下のようにコマンドを実行することになります。

```bash
$ git clone https://github.com/DiveIntoHacking/webpack-crash-course.git
$ cd webpack-crash-course
$ git checkout -t origin/modules
```

あるいは、下記のコマンドだとbranch名を指定することでワンラインで実行可能です。


```bash
$ git clone --branch modules https://github.com/DiveIntoHacking/webpack-crash-course.git
```

### ブランチ間の差分を知るには？

ブランチ間の差分を知るには以下のコマンドが有効です。

以下は、「いきなり！動かしてwebpackの全体像を把握しよう - webpack適用前」で実装したコードと「いきなり！動かしてwebpackの全体像を把握しよう - webpack適用後」で実装したコードとの差分を出力するコマンドになります。

このように、ブランチ名をdot二つで繋げることでブランチ間の差分を調べることができますので試してみてください。

```bash
$ git diff origin/getting-started-before-webpack..origin/getting-started-after-webpack
```

### プログラムの誤りを見つけてたがその連絡の手段は？

本プログラムはUdemy教育用のものですので、受講生からのリクエストを最優先していますので、Udemyのコースに設置されている公式のQ&Aにてご指摘の内容をご報告頂ければ有り難いです。
(本プログラムはオープンソースプロジェクトではありませんのでGitHubのIssuesでお知らせ頂いても対応出来ない場合がありますのでご了承ください。)

その他、不明な点が有りましたらUdemyのQ&Aにてご質問ください。


## 動画コース一覧

他にも以下のコースをUdemyにて公開中です。


|タイトル|概要|
|---|---|
|[フロントエンドエンジニアのためのReact・Reduxアプリケーション開発入門](https://www.udemy.com/react-application-development/?couponCode=GITHUB-REPO-README)|RESTful APIサーバと連携する実践的なCRUDアプリケーション開発手法を学び、今後のフロントエンドWeb開発の標準になり得るReact・Reduxアプリケーション開発をマスターし、もう一段階上のJavsScriptエンジニアになろう|
|[GraphQL with React入門 - QueryとMutationを学びPaginationの実装にチャレンジ！](https://www.udemy.com/graphql-with-react/?couponCode=GITHUB-README-FOOTER)|GraphQLの言語仕様を学習し、GitHubのGraphQL APIと連携するReactアプリケーションの実装にチャレンジします！React/GraphQL/Apollo等を利用し、近未来を見据えたAPI開発手法を先取りしよう！|
|[モジュールバンドラーwebpackを1日で習得！しかもフルスクラッチでインストールからカスタマイズまでの手順を理解する](https://www.udemy.com/webpack-crash-course/?couponCode=GITHUB-README-FOOTER)|Reactを題材にし各種形式のモジュールをローダー(babel/css/sass/html/eslint)やプラグイン(JS圧縮のカスタム/CSSのファイル分離と圧縮)でバンドルする方法をハンズオンで解説、今回もGitHubにソース完全公開|
|[React Hooks 入門 - HooksとReduxを組み合わせて最新のフロントエンド状態管理手法を習得しよう！](https://www.udemy.com/react-hooks-101/?couponCode=GITHUB-README-FOOTER)|Vue.js Firebase Docker Gatsby などを抑え、なんと受講生の37.2%が次に学びたいと注目度の高い React Hooks 。複雑な状態管理をシンプルに且つ美しく実装するためのフロントエンド開発手法を身につけよう！|






<div align='right'>
Dive into Hacking!
</div>
<div align='right'>
Udemy プログラミング講師
</div>
<div align='right'>

[はむ - プログラミングおじさん](https://www.udemy.com/user/76100880-5658-4a37-be77-5525d39a4726/)

</div>




