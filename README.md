# http-dump
dump http request header and body for debugging

## セットアップ手順
```bash
git clone https://github.com/iwanaga/http-dump.git
node index.js
```

## 制約
- port 3000 を listen
- サーバ側から TCP の切断を行わない (chunked のデバッグをするため)

## 動作
### リクエスト
```bash
curl http://localhost:3000/ -d '{"hoge": "fuga"}'
```

### 出力
```
POST /
host: localhost:3000
user-agent: curl/7.43.0
accept: */*
content-length: 16
content-type: application/x-www-form-urlencoded
{"hoge": "fuga"}
(connection closed)
```
