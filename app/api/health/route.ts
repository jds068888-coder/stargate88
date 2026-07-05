import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * 헬스체크 엔드포인트.
 * 앱 구동 여부와 Supabase 환경 변수 구성 상태를 반환합니다.
 * (키 값 자체는 노출하지 않습니다.)
 */
export function GET() {
  const supabaseConfigured =
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  return NextResponse.json({
    status: "ok",
    service: "stargate88",
    supabase: supabaseConfigured ? "configured" : "not_configured",
  });
}
