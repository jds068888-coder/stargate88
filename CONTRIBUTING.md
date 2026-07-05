# Contributing to stargate88

별의문(stargate88) 저장소에 기여해 주셔서 감사합니다. 아래 가이드를 따라 주세요.

## 브랜치 전략

- `main` — 기본(보호) 브랜치. 직접 푸시하지 않습니다.
- 작업은 항상 별도 브랜치에서 진행하고 Pull Request로 병합합니다.
- 브랜치 이름 예시:
  - `feat/<기능-이름>` — 새 기능
  - `fix/<버그-이름>` — 버그 수정
  - `chore/<작업-이름>` — 설정·문서 등 부수 작업

## 커밋 메시지

[Conventional Commits](https://www.conventionalcommits.org/) 형식을 권장합니다.

```
<type>: <설명>

feat: 지도 검색 컴포넌트 추가
fix: Supabase 세션 만료 처리 수정
docs: README 아키텍처 다이어그램 갱신
chore: ESLint 설정 추가
```

주요 type: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `ci`

## Pull Request

1. 최신 `main` 기준으로 브랜치를 최신화합니다.
2. PR 템플릿에 맞춰 변경 요약·내용을 작성합니다.
3. 관련 이슈가 있으면 `Closes #번호` 로 연결합니다.
4. 리뷰 승인 후 병합합니다.

## 이슈

버그 리포트·기능 제안은 저장소의 이슈 템플릿을 사용해 등록해 주세요.

## 코드 스타일

프로젝트 스캐폴딩 이후 ESLint·Prettier 설정이 추가됩니다. 설정이 도입되면
커밋 전 `lint`/`format` 통과를 확인해 주세요.
