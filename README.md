# 원티드 온보딩!

Sequelize의 작동원리

1. Express start
2. Express 내부의 Sequelize가 models/index.js 실행.  => index.js가 먼저 실행되는 이유를 여기서 알았습니다!
3. models/index.js에서 models폴더 내부 entity정보를 읽어 Sequelize에 담는다.
   - sequelize.sync(); => 접근한 DB스키마에 테이블 생성 및 테이블 관계 형성
4. Express에서 Sequeelize를 통해 db에 접근하여 Create, Read, Update, Delete 및 Search, Syn진행

-----

기술 스택 : node.js express postgresql sequelize

-----
api 명세 
- company
   - /api/company/noticeCreate    :arrow_right: 공고 생성
   - /api/company/noticeUpdate    :arrow_right: 공고 수정
   - /api/company/noticeDelete    :arrow_right: 공고 삭제
   - /api/company/findAll   :arrow_right: 모든 공고 목록 조회
   - /api/company/some/url? :arrow_right: 쿼리스트링 -> 특정단어로 조회
- user
   - /api/user/apply        :arrow_right: 지원서 넣기
   
-----

### /api/company/noticeCreate   :arrow_right: 공고 생성


<img width="259" alt="스크린샷 2022-08-20 오후 4 53 57" src="https://user-images.githubusercontent.com/55525574/185735115-a838a5bc-9bd2-4ee0-a3b5-655368065d7f.png">

<img width="1006" alt="스크린샷 2022-08-20 오후 4 52 53" src="https://user-images.githubusercontent.com/55525574/185735077-a86ca2cb-1c67-457f-a8ea-852658a0fb83.png">

-----

### /api/company/noticeUpdate :arrow_right: 공고 수정

<img width="1257" alt="스크린샷 2022-08-20 오후 4 56 16" src="https://user-images.githubusercontent.com/55525574/185735200-f588bc47-5a03-4e59-bd29-f47bd09cdeec.png">
<img width="996" alt="스크린샷 2022-08-20 오후 5 02 18" src="https://user-images.githubusercontent.com/55525574/185735396-4bb06a22-6f5a-4afa-be33-9085435231b4.png">
<img width="1317" alt="스크린샷 2022-08-20 오후 5 02 45" src="https://user-images.githubusercontent.com/55525574/185735424-f8833cae-b479-4f01-9350-19e069977178.png">

-----

### /api/company/noticeDelete :arrow_right: 공고 삭제

<img width="1317" alt="스크린샷 2022-08-20 오후 5 02 45" src="https://user-images.githubusercontent.com/55525574/185735424-f8833cae-b479-4f01-9350-19e069977178.png">
<img width="1002" alt="스크린샷 2022-08-20 오후 5 07 09" src="https://user-images.githubusercontent.com/55525574/185735585-67cd88dc-5671-4bd0-bc5e-b6eb21be7d1c.png">ㄴ
<img width="938" alt="스크린샷 2022-08-20 오후 5 07 40" src="https://user-images.githubusercontent.com/55525574/185735605-fb61813c-52bb-40dd-95e1-9fe3818fa8da.png">

-----

### /api/company/findAll   :arrow_right: 모든 공고 목록 조회

<img width="1471" alt="스크린샷 2022-08-20 오후 5 10 46" src="https://user-images.githubusercontent.com/55525574/185735726-0d3a9695-d04b-4f66-a7ad-a2537822a7e9.png">
<img width="1089" alt="스크린샷 2022-08-20 오후 5 16 28" src="https://user-images.githubusercontent.com/55525574/185735932-915d2a04-8568-4179-ae30-72f60d45b017.png">

-----

### /api/company/some/url? :arrow_right: 쿼리스트링 -> 특정단어로 조회

<img width="985" alt="스크린샷 2022-08-21 오후 12 01 21" src="https://user-images.githubusercontent.com/55525574/185773446-1da1c544-0d54-4ff4-999f-500d05b80cb7.png">

-----
### /api/user/apply ➡️ 지원서 넣기

<img width="964" alt="스크린샷 2022-08-21 오후 12 04 43" src="https://user-images.githubusercontent.com/55525574/185773527-dfd3ba45-0834-456b-b17e-212bc0b7aaf1.png">

<img width="967" alt="스크린샷 2022-08-21 오후 12 05 09" src="https://user-images.githubusercontent.com/55525574/185773537-6230abe8-bf37-4e3b-9780-9bf6e8a54a1d.png">

