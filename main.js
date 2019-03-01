(function() {
  "use strict";
  /**
   * 課題1: Twitterのタイムラインのような配列を作る
   *   - 変数名はtweetsで配列とする
   *   - tweetsの中には複数のオブジェクトがある
   *     - 1個1個のオブジェクトはツイートを表す
   *     - 全部で2個のツイートオブジェクトを作る
   *   - ツイートオブジェクトは以下の情報を持つ
   *     - username : ツイートしたユーザー名(文字列。ユーザー名は自由につけて良い。)
   *     - text : ツイート内容(文字列。ツイート内容は自由に作って良い。)
   *     - replies : ツイートに対する返信が格納された(配列)
   *       - repliesに格納されている1個1個のデータもツイートオブジェクト
   *       - 2個のツイートはそれぞれ2個の返信ツイートを持つ
   *       - 返信ツイートは以下の情報を持つ
   *         - username : 返信ツイートしたユーザー名(文字列。ユーザー名は自由につけて良い)
   *         - text : ツイート内容(文字列。ツイート内容は自由に作って良い。)
   */
  let tweets = [
    {
      username: "fuyumi",
      text: "firstツイート！",
      replies: [
        { username: "totto", text: "hensin1" },
        { username: "totto", text: "hensin2" }
      ]
    },
    {
      username: "mayumi",
      text: "secondツイート！",
      replies: [
        { username: "choco", text: "hensin3" },
        { username: "choto", text: "hensin4" }
      ]
    }
  ];

  /**
   * 課題2: 課題1で作ったtweetsの内容を全て表示する
   *   - forEachを使ってtweetsの以下の内容を1つずつconsole.logで出力する
   *     - username
   *     - text
   *     - replies
   *       - repliesの内容もforEachを使って全て表示する
   *
   */
  tweets.forEach(tweet => {
    console.log(tweet.username);
    console.log(tweet.text);
    // 配列の中のオブジェクトの取得
    console.log(tweet.replies[0].username);
    console.log(tweet.replies[0].text);
    console.log(tweet.replies[1].username);
    console.log(tweet.replies[1].text);
  });
})();
