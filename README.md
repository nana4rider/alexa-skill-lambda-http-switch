# alexa-skill-lambda-http-switch
Alexa Smart Home Skill HTTP Switch

## 概要
RESTful APIと接続し、
Alexaの[スイッチデバイス](https://developer.amazon.com/ja-JP/docs/alexa/device-apis/alexa-powercontroller.html)として認識させるプログラムです。

## DynamoDB
テーブル名`alexa_home_switch_devices`で下記データを作成
```json
{
  "id": {
    "S": "デバイスID(任意)"
  },
  "apiUrl": {
    "S": "jema-smartlockのRESTful APIのURL"
  },
  "apiKey": {
    "S": "jema-smartlockのRESTful APIのAPIキー"
  },
  "name": {
    "S": "デバイス名(任意)"
  },
  "category": {
    "S": "カテゴリ(SWITCH|LIGHT)"
  }
}
```
