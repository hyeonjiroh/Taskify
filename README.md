# Taskify

코드잇 스프린트 13기 Part 3 과정에서 5팀이 진행한 중급 프로젝트 **Taskify** 레포지토리입니다.

## 🚀 배포 주소
https://taskify-three-pearl.vercel.app

## 📝 프로젝트 개요
**Taskify**는 일정을 공유하며 관리할 수 있는 서비스입니다.
### 네비게이션 바
#### 로그인 전
- 로고 버튼 클릭 시 랜딩 페이지로 이동
- 우측의 로그인, 회원가입 클릭 시 각각 로그인 페이지, 회원가입 페이지로 이동

#### 로그인 후
- 우측의 유저 프로필 클릭 시 내 정보와 로그아웃 드롭다운
- 내 정보 클릭 시 계정 관리 페이지로 이동
- 로그아웃 클릭 시 액세스 토큰 삭제 후 랜딩 페이지로 이동
**대시보드 상세 페이지**
- 해당 대시보드를 생성한 사람에게만 '관리' 버튼 표시
- '관리' 버튼 클릭 시 해당 대시보드 수정 페이지로 이동
- '초대하기' 버튼 클릭 시 초대하기 모달 표시
- 우측에 해당 대시보드의 멤버 표시

### 사이드 바
- 로그인 후 페이지들에서만 표시
- 상단의 로고 클릭 시 나의 대시보드 페이지로 이동
- '+' 버튼 클릭 시 대시보드 생성 모달 표시
- 대시보드 목록들 중 내가 만든 대시보드는 대시보드 이름 뒤에는 👑로 표시

### 랜딩 페이지(`/`)
- Taskify의 초기 시작 페이지

### 로그인 페이지(`/login`)
- 유효한 이메일과 비밀번호 입력 시 '로그인' 버튼 활성화
- 활성화된 '로그인' 버튼 클릭 시 액세스 토큰을 발급받고 나의 대시보드 페이지로 이동

### 회원가입 페이지(`/signup`)
- 회원가입 폼이 유효한 값으로 모두 채워지고, 약관 동의 체크 시 '가입하기' 버튼 활성화
- 활성화된 '가입하기' 버튼 클릭 시 로그인 페이지로 이동

### 나의 대시보드 페이지(`/mydashboard`)
#### 내 대시보드 목록
- '새로운 대시보드' 버튼 클릭 시 대시보드 생성 모달 표시
- 내가 만든 대시보드는 대시보드 이름 뒤에는 👑로 표시
- 원하는 대시보드 클릭 시 해당 대시보드 상세 페이지로 이동

#### 초대받은 대시보드
- 원하는 키워드로 초대받은 대시보드 검색 가능
- 초대 수락 시 해당 대시보드 상세 페이지로 이동
- 초대 거절 시 초대받은 대시보드 목록에서 해당 대시보드 삭제

### 대시보드 상세 페이지(`/dashboard/{dashboardid}`)
#### 컬럼
- '새로운 컬럼 추가하기' 버튼 클릭 시 컬럼 생성 모달 표시
- 각 컬럼의 톱니바퀴 모양 버튼 클릭 시 컬럼 수정 모달 표시

#### 할 일 카드
- 각 컬럼 상단의 '+' 버튼 클릭 시 할 일 생성 모달 표시
- 각 할 일 카드 클릭 시 해당 할 일 카드 상세 모달 표시
- 할 일 카드 상세 모달에서는 해당 할 일 카드에 댓글 등록, 수정, 삭제 가능
- 할 일 카드 상세 모달의 우측 상단 메뉴 버튼 클릭 시 할 일 카드 수정, 삭제 가능
- 할 일 카드 수정 시 할 일 수정 모달 표시

### 대시보드 수정 페이지(`/dashboard/{dashboardid}/edit`)
#### 대시보드 수정
- 대시보드의 이름 및 색상 수정 후 '변경' 버튼 클릭 시 해당 대시보드 상세 페이지로 이동

#### 구성원
- 해당 대시보드의 멤버 목록 확인 및 삭제 가능

#### 초대 내역
- 해당 대시보드에 초대한 유저 이메일 목록 확인 및 취소 가능
- 우측 상단의 '초대하기' 버튼 클릭 시 초대하기 모달 표시

#### 대시보드 삭제
- 대시보드 삭제 버튼 클릭 시 대시보드 삭제 후 나의 대시보드 페이지로 이동

### 계정 관리 페이지(/mypage)
- 사용자의 프로필 이미지와 닉네임 변경 가능
- 사용자의 이메일 변경 불가
- 현재 비밀번호와 다른 비밀번호로 비밀번호 변경 가능

## ⏳ 개발 기간
2025.03.18 ~ 2025.04.02

## 👩🏻‍💻 팀원 소개
<table>
  <tr>
    <td align="center"><b>김경민</b></td>
    <td align="center"><b>노현지</b></td>
    <td align="center"><b>이아름</b></td>
    <td align="center"><b>이재혁</b></td>
    <td align="center"><b>임지혜</b></td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/codeit-kkm">
        <img width="200px" src="https://github.com/codeit-kkm.png"/>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/hyeonjiroh">
        <img width="200px" src="https://github.com/hyeonjiroh.png"/>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ARON-Y">
        <img width="200px" src="https://github.com/ARON-Y.png"/>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/LEEHAEHYUK">
        <img width="200px" src="https://github.com/LEEHAEHYUK.png"/>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/jihye5081">
        <img width="200px" src="https://github.com/jihye5081.png"/>
      </a>
    </td>
  </tr>
</table>

## 🤝 역할 분담
### 김경민
- 나의 대시보드 페이지 - 내 대시보드 목록
- 대시보드 생성 모달
- 컬러 팔레트 버튼 리스트(공통)

### 노현지
- 상단 네비게이션 바
- 사이드 바
- 나의 대시보드 페이지 - 초대받은 대시보드
- 대시보드 상세 페이지
- 대시보드 수정 페이지 - 대시보드 수정, 초대 내역, 대시보드 삭제
- 컬럼 추가 모달
- 컬럼 수정 모달
- 할 일 카드 상세 모달
- 초대하기 모달
- 로고 버튼(공통)
- 태그 & 태그 Input(공통)
- 모달(공통)
- alert(공통)

### 이아름
- 로그인 페이지
- 회원가입 페이지
- 계정 관리 페이지
- Input(공통)
- 버튼(공통)
- 이미지 파일 추가 버튼(공통)

### 이재혁
- 대시보드 수정 페이지 - 구성원 목록
- 페이지네이션 버튼(공통)
- 유저 아이콘(공통)

### 임지혜
- 랜딩페이지
- 할 일 카드 수정 모달
- 할 일 카드 생성 모달
- Textarea(공통)
- Date Input(공통)

## 💻 기술 스택

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

### Linters

![js](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![js](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

### Development

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)


### communication

![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)

### Deployment

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## 🗂️ 폴더 구조

```
📂 public
├── 📂 icon
├── 📂 logo
└── 📂 page-modal

📂 src
├── 📂 app
│   ├── 📂 (after-login)
│   │   ├── 📂 dashboard
│   │   │   └── 📂 [dashboardid]
│   │   │       ├── 📂 _components
│   │   │       └── 📂 edit
│   │   ├── 📂 mydashboard
│   │   │   └── 📂 _components
│   │   └── 📂 mypage
│   │       └── 📂 _components
│   └── 📂 (before-login)
│       ├── 📂 (with-navbar)
│       └── 📂 (without-navbar)
│           ├── 📂 login
│           └── 📂 signup

├── 📂 components
│   ├── 📂 commont
│   │   ├── 📂 alert
│   │   ├── 📂 button
│   │   ├── 📂 color-palette
│   │   ├── 📂 input
│   │   ├── 📂 logo-button
│   │   ├── 📂 modal
│   │   ├── 📂 pagination-button
│   │   ├── 📂 tag
│   │   ├── 📂 textarea
│   │   └── 📂 user-icon
│   ├── 📂 layout
│   │   ├── 📂 navbar
│   │   └── 📂 sidebar
│   └── 📂 modal
│       ├── 📂 add-column
│       ├── 📂 create-dashboard
│       ├── 📂 create-task
│       ├── 📂 edit-task
│       ├── 📂 edit-column
│       ├── 📂 invite
│       └── 📂 task-detail

├── 📂 lib
│   ├── 📂 apis
│   ├── 📂 constants
│   ├── 📂 hooks
│   ├── 📂 store
│   ├── 📂 utils
│   └── 📄 types.ts
```

## ✅ 컨벤션

### 타입

- **feat** : 새로운 기능 추가
- **fix** : 버그 수정
- **docs** : 문서 내용 변경
- **style** : 코드 스타일 변경(코드 포메팅, 코드 변경이 없는 경우)
- **design** : 사용자 UI 디자인 변경(CSS 등)
- **refactor** : 코드 리팩토링
- **test** : 테스트 코드 작성
- **build** : 빌드 파일 수정
- **ci** : CI 설정 파일 수정
- **perf** : 성능 개선
- **chore** : 빌드 수정, 패키지 매니저 설정, 운영 코드 변경이 없는 경우
- **rename** : 파일명 혹은 폴더명을 수정한 경우
- **remove** : 파일 삭제만 한 경우

### 커밋 메세지

```
타입: 요약
```

### 브랜치명

```
타입/#이슈번호/내용
```

### 이슈 제목

```
[타입] 내용
```

### PR 제목

```
타입: #이슈번호/내용
```
