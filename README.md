# 🌓 Dream Note


## 👀 소개글
> `Dream Note`는 꿈일기를 기록할 수 있는 웹사이트입니다.📓
​
<br/>


## 🚖 서비스 링크
https://dreamnote-9f9f2.web.app

<br/>


## 🔗 블로그
개발 기록: https://tinyurl.com/ylvw7xjd

<br/>


## ⚙️ 기술 스택
### ✔️Frond-end
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
​
<br/>


## 🔮 기능 소개
### 1. 꿈 일기 기록/조회/수정/삭제(CRUD)
<img src="https://github.com/Yoonyesol/Dream_note/assets/51500821/9a36b4b3-3b60-42af-9e4c-3400b21e9f06"  width="400px"/><br/>

- 메인화면에서는 일기를 월별로 조회할 수 있습니다.
- 특정 날짜의 일기를 기록하고 수정 및 삭제할 수 있습니다. 


### 2. 일기 장르 태그 지정
<img src="https://github.com/Yoonyesol/Dream_note/assets/51500821/81fa75f1-1649-4557-acb4-79a27f625aab"  width="400px"/><br/>

- 일기의 장르를 설정할 수 있습니다. 기본 장르는 `일상`으로 선택되어 있습니다.
- 일기 작성 페이지에서 장르의 추가와 삭제가 가능합니다. 


### 3. 일기 검색
<img src="https://github.com/Yoonyesol/Dream_note/assets/51500821/36456e8c-2cc4-476e-8685-b98141845ceb"  width="400px"/><br/>
일기의 제목/본문 내용을 검색하여 원하는 일기를 조회해 볼 수 있습니다.


### 4. 이미지 업로드
<img src="https://github.com/Yoonyesol/Dream_note/assets/51500821/5486be1b-4fa7-41ad-898a-5e95da9cbead"  width="600px"/><br/>
일기에 이미지(썸네일)을 추가할 수 있습니다.


### 5. 일기를 로컬에 저장
<img src="https://github.com/Yoonyesol/Dream_note/assets/51500821/9f8e437e-a327-4a0a-8833-6f2bea69d2e0"  width="800px"/><br/>
브라우저를 닫아도 일기 데이터가 사라지지 않습니다. (단, 브라우저 캐시 및 로컬데이터 삭제 시 일기 데이터가 손실됩니다.)


### 6. 반응형 웹 디자인
<img src="https://github.com/Yoonyesol/Dream_note/assets/51500821/53c2d064-89bb-459a-9cd9-a880c673c43b"  width="700px"/><br/>
모바일, 태블릿, PC에 유연하게 대응할 수 있는 반응형 디자인을 적용하였습니다.


<br/>



## 🙋‍♀️ 배운 점
- React를 사용한 CRUD 기능 구현에 익숙해질 수 있었습니다.
- Context API를 사용하여 데이터 상태를 관리하는 과정을 학습한 뒤 프로젝트에 적용하였습니다.
- FileReader 객체를 이용해 이미지 업로드를 진행하였습니다.
- Local Storage에 데이터를 저장, 수정, 삭제 및 조회하는 방법을 익혔습니다.

<br/>


## 🚩 개선점
* 실제 어플리케이션을 사용해 본 뒤, 다양한 기기에서 동기화가 가능한 서버 구축의 필요성을 느낌 👉 Firebase를 이용한 서버 구축 진행 중
* 이미지 파일 크기가 클 경우 일기가 저장되지 않는 버그 수정 필요
