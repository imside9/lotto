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

- Framework preset: `Vite`
- Build command: `npm run build` (Cloudflare Pages 대시보드에서 설정)
- Build output directory: `dist`
- Root directory: 저장소 루트
- `wrangler.toml`의 `pages_build_output_dir`는 출력 경로만 지정하며, Pages에서는 `build` 블록을 지원하지 않습니다.

## 배포 오류 트러블슈팅

- 오류: `Failed to load module script ... MIME type of "application/octet-stream"`
  - Cloudflare Pages의 Build output directory가 `dist`인지 확인
  - 배포된 `index.html`이 `/src/main.tsx`가 아닌 `/assets/*.js`를 참조하는지 확인
  - `dist/_headers`가 배포에 포함되어 JS/CSS MIME이 설정되는지 확인
- 오류: `Output directory "dist" not found`
  - Cloudflare Pages 대시보드 Build command에 `npm run build`가 설정되어 있는지 확인
  - 설치/빌드 로그에 `vite build` 실행이 실제로 표시되는지 확인
- 오류: `net::ERR_BLOCKED_BY_CLIENT`
  - 브라우저 광고 차단/보안 확장 프로그램을 끄고 재시도
  - 시크릿 모드 또는 다른 브라우저에서 동일 URL 재확인

## 주의

- 본 서비스는 재미용이며 실제 당첨 확률과 무관합니다.
- 1차 MVP 범위에서 이미지 저장 기능은 제외되어 있습니다.
