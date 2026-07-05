import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * 서버 전용 Supabase 클라이언트 (Service Role).
 *
 * 서버 사이드(Route Handler, Server Action 등)에서만 사용합니다.
 * Service Role 키는 절대 클라이언트로 노출하지 마세요.
 * Phase 3에서 실제 프로젝트에 연결됩니다.
 */
export function getSupabaseServerClient(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error(
      "Supabase 서버 환경 변수가 설정되지 않았습니다. .env.example 을 참고해 " +
        "NEXT_PUBLIC_SUPABASE_URL 과 SUPABASE_SERVICE_ROLE_KEY 를 설정하세요."
    );
  }

  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
