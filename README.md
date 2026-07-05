<div align="center">

# 🌌 stargate88

**주식회사 별의문 (Stargate Corp)** 의 프로젝트 저장소

[![Stack](https://img.shields.io/badge/stack-Next.js%20%C2%B7%20Supabase%20%C2%B7%20Python-000000)](#-tech-stack)
[![Status](https://img.shields.io/badge/status-스캐폴딩%20완료-brightgreen)](#-project-status)
[![Web](https://img.shields.io/badge/web-stargate11.com-2ea44f)](https://stargate11.com)
[![License](https://img.shields.io/badge/license-Proprietary-lightgrey)](#-license)

AI 소프트웨어로 지도·데이터·자동화를 잇는 별의문의 코드베이스입니다.

</div>

---

## 📑 목차

- [About](#-about)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Project Status](#-project-status)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🏢 About

|                  |                                                      |
| ---------------- | ---------------------------------------------------- |
| **Organization** | 주식회사 별의문 (Stargate Corp) — AI 소프트웨어 기업 |
| **Web**          | [stargate11.com](https://stargate11.com)             |
| **Maintainer**   | Dongsoo Jung (정동수)                                |
| **Domain**       | GIS · 데이터 파이프라인 · 워크플로우 자동화 · AI/ML  |

---

## 🧰 Tech Stack

| 영역             | 기술                     |
| ---------------- | ------------------------ |
| **Frontend**     | `TypeScript` · `Next.js` |
| **Backend / DB** | `Supabase` (PostgreSQL)  |
| **Automation**   | `n8n`                    |
| **Data / AI**    | `Python` · `AI/ML`       |
| **Geospatial**   | `GIS`                    |

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

## 🗂️ Project Structure

```
stargate88/
├── app/                  # Next.js App Router (페이지·레이아웃)
│   ├── layout.tsx        # 루트 레이아웃 (메타데이터)
│   ├── page.tsx          # 랜딩 페이지
│   └── globals.css       # 전역 스타일
├── lib/
│   └── supabase/         # Supabase 클라이언트 (Phase 3 연결)
│       └── client.ts
├── .github/              # 이슈·PR 템플릿
├── .env.example          # 환경 변수 템플릿
├── next.config.mjs       # Next.js 설정
├── tsconfig.json         # TypeScript 설정
└── package.json
```

---

## 🚀 Getting Started

Next.js(App Router) + TypeScript 기반 웹 앱이 스캐폴딩되어 있습니다.

```bash
# 저장소 클론
git clone https://github.com/jds068888-coder/stargate88.git
cd stargate88

# 의존성 설치
npm install

# 환경 변수 설정 (Supabase 연동 시 필요)
cp .env.example .env.local

# 개발 서버 실행 → http://localhost:3000
npm run dev
```

**주요 스크립트**

| 명령                | 설명                 |
| ------------------- | -------------------- |
| `npm run dev`       | 개발 서버 실행       |
| `npm run build`     | 프로덕션 빌드        |
| `npm run start`     | 프로덕션 서버 실행   |
| `npm run lint`      | ESLint 검사          |
| `npm run typecheck` | TypeScript 타입 검사 |
| `npm run format`    | Prettier 포맷 적용   |

환경 변수는 `.env.example` 템플릿을 참고해 `.env.local` 로 구성합니다.

---

## ☁️ Deployment (Vercel)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jds068888-coder/stargate88)

**최초 1회 설정 (Vercel 대시보드)**

1. [Vercel](https://vercel.com/new) 에서 이 GitHub 저장소를 Import 합니다.
2. Framework Preset: **Next.js** (자동 감지, `vercel.json` 포함).
3. **Environment Variables** 에 아래 값을 등록합니다.

   | 변수                            | 노출 범위  | 값                                                 |
   | ------------------------------- | ---------- | -------------------------------------------------- |
   | `NEXT_PUBLIC_SUPABASE_URL`      | 클라이언트 | `https://inftexpcnfinglwlrvsj.supabase.co`         |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | 클라이언트 | Supabase 대시보드 > Settings > API 의 publishable  |
   | `SUPABASE_SERVICE_ROLE_KEY`     | 서버 전용  | Supabase 대시보드 > Settings > API 의 service_role |

4. Deploy 후, `main` 브랜치에 push하면 프로덕션 자동 배포됩니다.

> 배포 확인: `https://<배포도메인>/api/health` → `{"status":"ok","supabase":"configured"}`

---

## 📊 Project Status

| 구성 요소                       | 상태                                |
| ------------------------------- | ----------------------------------- |
| GitHub 저장소                   | ✅ 활성                             |
| README · 저장소 메타            | ✅ 정비됨                           |
| 애플리케이션 스캐폴딩 (Next.js) | ✅ 완료                             |
| CI (lint · typecheck · build)   | ✅ 완료 (GitHub Actions)            |
| Supabase 연동                   | ✅ 활성화·연결 완료                 |
| Vercel 배포                     | 🟡 설정·가이드 완료, 계정 연결 대기 |

---

## 🧭 Roadmap

- **Phase 1 — 저장소 정비** ✅ 완료
  - README·라이선스·이슈/PR 템플릿 등 기본 메타 정비
- **Phase 2 — 프로젝트 스캐폴딩** ✅ 완료
  - Next.js + TypeScript 초기화, 디렉터리 구조·린트·포맷 설정
- **Phase 3 — 서비스 연동** 🟡 진행 중
  - ✅ GitHub Actions CI (lint · typecheck · format · build)
  - ✅ Supabase 서버/클라이언트 연동 코드 + `/api/health` 헬스체크
  - ✅ Supabase 프로젝트 활성화·실키 연결 (`/api/health` → `configured` 확인)
  - 🟡 Vercel 배포 설정(`vercel.json`)·가이드 완료 — 대시보드 계정 연결만 남음

---

## 🤝 Contributing

기여 방법과 브랜치·커밋 규칙은 [CONTRIBUTING.md](./CONTRIBUTING.md) 를 참고하세요.

---

## 📄 License

Proprietary — © 주식회사 별의문 (Stargate Corp). All rights reserved.
공개 라이선스 정책이 확정되면 별도의 `LICENSE` 파일로 갱신됩니다.
