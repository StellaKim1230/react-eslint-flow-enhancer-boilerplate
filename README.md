## react 프로젝트에 eslint, flow 세팅하기.

### 1. 설치 항목

```bash
$ yarn add --dev eslint

$ yarn add --dev eslint-config-airbnb

$ yarn add --dev @babel/preset-flow

$ yarn add --dev @babel/preset-env

$ yarn add --dev @babel/preset-react

$ yarn add --dev eslint-plugin-flowtype

$ yarn add --dev flow-bin

$ node_modules/.bin/flow init 실행 -> .flowconfig 생성
```

### 2. extensions (vscode)

1. ESlint
2. vscode-flow-ide
3. TypeScript and JavaScript Language Features
(optiosn: disabled(workspace))

### 3. lint convention (.eslintrc 참고)

1. single quote instead of double quote
2. not semi
3. comma dangle 필수
4. console 허용

### 4. 사용방법
1. 필요한 패키지 설치한다.
2. .babelrc 파일 생성 후 presets 정의한다. ("@babel/preset-flow" 는 무조건 맨 마지막에 정의)
3. type 체크 할 파일 맨 위에 // @flow 를 선언한다.

### 5. etc
```bash
$ npx flow (terminal에서 flow 체크할 시)
```

[flow cheat sheet](https://www.saltycrane.com/flow-type-cheat-sheet/latest/) 