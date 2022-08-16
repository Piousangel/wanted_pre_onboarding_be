# 원티드 온보딩!

Sequelize의 작동원리

1. Express start
2. Express 내부의 Sequelize가 models/index.js 실행.  => index.js가 먼저 실행되는 이유를 여기서 알았습니다!
3. models/index.js에서 models폴더 내부 entity정보를 읽어 Sequelize에 담는다.
   - sequelize.sync(); => 접근한 DB스키마에 테이블 생성 및 테이블 관계 형성
4. Express에서 Sequeelize를 통해 db에 접근하여 Create, Read, Update, Delete 진행

-----

기술 스택 : node.js express postgresql sequelize

-----

<img width="1363" alt="스크린샷 2022-08-16 오전 10 21 58" src="https://user-images.githubusercontent.com/55525574/184778853-ac75364a-ce68-49b2-9df7-11e63ac8f458.png">

<img width="1304" alt="스크린샷 2022-08-16 오전 11 12 28" src="https://user-images.githubusercontent.com/55525574/184783767-fe14c50d-c683-4c1b-bce9-04b62d91f9d8.png">

[POSTMAN] findALL 검색결과확인
![스크린샷 2022-08-16 오전 11 14 26](https://user-images.githubusercontent.com/55525574/184783987-5e211dbd-f655-4e84-9a5e-f9af3a0decce.png)

[POSTMAN] sampleId1 update 이후 변경사항 확인 

![스크린샷 2022-08-16 오전 11 29 38](https://user-images.githubusercontent.com/55525574/184785564-c9766557-3a3e-4b95-9785-a15dc9ea21ed.png)

[POSTMAN] GET 방식의 쿼리스트링 데이터로 검색 결과 확인

![스크린샷 2022-08-16 오후 3 38 21](https://user-images.githubusercontent.com/55525574/184813780-2fb5ee7b-87bc-4622-9417-f40521d72c2e.png)
