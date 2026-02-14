# Lotto MVP

`blueprint.md` 요구사항 기반의 로또 번호 추천 MVP입니다.

## 기술 스택

- Vite
- React + TypeScript
- 정적 배포(Cloudflare Pages)

## 실행 방법

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

빌드 산출물은 `dist` 디렉터리에 생성됩니다.

## 핵심 동작

- 첫 화면에서 시작 버튼 클릭
- 매 라운드마다 질문 3개 랜덤 선택
- 규칙: 콘크리트 2개 + 상징 1개
- 질문 3개 답변 후 결과 생성
- 메인 번호 6개(1~45, 중복 없음) + 보조 번호 2개
- 결과 문구와 퍼센트 표기
- 복사 버튼으로 번호 문자열 클립보드 복사
- 다시하기로 새 질문 세트 재시작

## 시드/번호 생성 로직

1. 답변을 `Q3:0|Q11:2|S2:3|YYYYMMDD` 형태 seed 문자열로 생성
2. Web Crypto API의 SHA-256 해시 사용
3. 바이트를 순회하며 `(byte % 45) + 1`로 번호 추출
4. 중복 제거 후 메인 6개 + 보조 2개 확보
5. 메인 번호 오름차순 정렬

퍼센트는 seed 기반 수치로 `1.0% ~ 3.0%` 범위를 소수점 1자리로 표시합니다.

## Cloudflare Pages 설정

- Build command: `npm run build`
- Build output directory: `dist`

## 주의

- 본 서비스는 재미용이며 실제 당첨 확률과 무관합니다.
- 1차 MVP 범위에서 이미지 저장 기능은 제외되어 있습니다.
