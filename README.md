# echart-editor

基于Vue3的EChart 图表在线编辑器，支持静态数据在线编辑

后期支持：
1. API
2. SQL
3. Excel导入

## 预览

![图表](https://private-user-images.githubusercontent.com/14350577/429416432-4e9fc390-5752-4c50-9651-8436bfd3d979.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM1ODY0OTQsIm5iZiI6MTc0MzU4NjE5NCwicGF0aCI6Ii8xNDM1MDU3Ny80Mjk0MTY0MzItNGU5ZmMzOTAtNTc1Mi00YzUwLTk2NTEtODQzNmJmZDNkOTc5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDAyVDA5Mjk1NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTI3NzFiOTNhMjBhNGEwNWExMGQ1N2U4ZTUwMzc4YjNlZWRlMmEwZDI0OTk4OTcxOTdmZTdjMDRjMjIxMDU2NWEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.hw4DoX6LfSJs6lqkzsFOFZqyhBPM1sbSr-pHjJsAFxE)

![图表](https://private-user-images.githubusercontent.com/14350577/429415000-b196c20f-3a70-42b5-8307-deed5b11aba1.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM1ODY0OTQsIm5iZiI6MTc0MzU4NjE5NCwicGF0aCI6Ii8xNDM1MDU3Ny80Mjk0MTUwMDAtYjE5NmMyMGYtM2E3MC00MmI1LTgzMDctZGVlZDViMTFhYmExLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDAyVDA5Mjk1NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTgyZGE5Yjg0MzNlNzc0YzVhYTJmNGVlYjg4NjEyNTQzNmQyZjk0NzQ0NGVkNTgwYWZmNDYzYmZiYTQ4ZTE5N2YmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.QBSj09T0Ksvy0Ae4WOqmquvmk8yL3qlpx1ti6bREiPU)


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
