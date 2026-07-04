<div align="center">

# 🌌 stargate88

**주식회사 별의문 (Stargate Corp)** 의 프로젝트 저장소

[![Stack](https://img.shields.io/badge/stack-Next.js%20%C2%B7%20Supabase%20%C2%B7%20Python-000000)](#-tech-stack)
[![Status](https://img.shields.io/badge/status-초기%20설정-yellow)](#-project-status)
[![Web](https://img.shields.io/badge/web-stargate11.com-2ea44f)](https://stargate11.com)
[![License](https://img.shields.io/badge/license-Proprietary-lightgrey)](#-license)

AI 소프트웨어로 지도·데이터·자동화를 잇는 별의문의 코드베이스입니다.

</div>

---

## 📑 목차

- [About](#-about)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Project Status](#-project-status)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🏢 About

| | |
|---|---|
| **Organization** | 주식회사 별의문 (Stargate Corp) — AI 소프트웨어 기업 |
| **Web** | [stargate11.com](https://stargate11.com) |
| **Maintainer** | Dongsoo Jung (정동수) |
| **Domain** | GIS · 데이터 파이프라인 · 워크플로우 자동화 · AI/ML |

---

## 🧰 Tech Stack

| 영역 | 기술 |
|---|---|
| **Frontend** | `TypeScript` · `Next.js` |
| **Backend / DB** | `Supabase` (PostgreSQL) |
| **Automation** | `n8n` |
| **Data / AI** | `Python` · `AI/ML` |
| **Geospatial** | `GIS` |

---

## 🗺️ Architecture

> 목표 아키텍처 개요입니다. 실제 구현이 진행되며 갱신됩니다.

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│  Next.js    │────▶│   Supabase   │◀────│   n8n       │
│  (web / UI) │     │ (DB · Auth)  │     │ (automation)│
└─────────────┘     └──────┬───────┘     └─────────────┘
                           │
                    ┌──────▼───────┐
                    │  Python / AI │
                    │  GIS · ML    │
                    └──────────────┘
```

---

## 🚀 Getting Started

> ⚠️ 현재 저장소는 초기 설정 단계로, 실행 가능한 애플리케이션 코드는 아직 포함되어 있지 않습니다.
> 아래는 기본 클론 절차이며, 애플리케이션 스캐폴딩 후 실행/개발 명령이 추가될 예정입니다.

```bash
# 저장소 클론
git clone https://github.com/jds068888-coder/stargate88.git
cd stargate88

# (예정) 의존성 설치 및 개발 서버 실행
# npm install
# npm run dev
```

환경 변수는 추후 `.env.example` 템플릿을 참고해 `.env.local` 로 구성합니다.

---

## 📊 Project Status

| 구성 요소 | 상태 |
|---|---|
| GitHub 저장소 | ✅ 활성 |
| README · 저장소 메타 | ✅ 정비됨 |
| 애플리케이션 스캐폴딩 (Next.js) | ⬜ 예정 |
| Supabase 연동 | ⬜ 예정 (프로젝트 존재, 미연결) |
| Vercel 배포 | ⬜ 예정 |
| CI (lint · build · test) | ⬜ 예정 |

---

## 🧭 Roadmap

- **Phase 1 — 저장소 정비** ✅ 진행 중
  - README·라이선스·이슈/PR 템플릿 등 기본 메타 정비
- **Phase 2 — 프로젝트 스캐폴딩**
  - Next.js + TypeScript 초기화, 디렉터리 구조·린트·포맷 설정
- **Phase 3 — 서비스 연동**
  - Supabase 활성화·연결, Vercel 자동 배포, GitHub Actions CI

---

## 🤝 Contributing

기여 방법과 브랜치·커밋 규칙은 [CONTRIBUTING.md](./CONTRIBUTING.md) 를 참고하세요.

---

## 📄 License

Proprietary — © 주식회사 별의문 (Stargate Corp). All rights reserved.
공개 라이선스 정책이 확정되면 별도의 `LICENSE` 파일로 갱신됩니다.
