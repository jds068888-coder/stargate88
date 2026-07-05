import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * 브라우저용 Supabase 클라이언트.
 *
 * Phase 3에서 실제 프로젝트에 연결됩니다. 지금은 환경 변수 템플릿
 * (`.env.example`)만 준비된 상태이며, 값이 설정되어야 동작합니다.
 */
let browserClient: SupabaseClient | undefined;

export function getSupabaseBrowserClient(): SupabaseClient {
  if (browserClient) return browserClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "Supabase 환경 변수가 설정되지 않았습니다. .env.example 을 참고해 " +
        "NEXT_PUBLIC_SUPABASE_URL 과 NEXT_PUBLIC_SUPABASE_ANON_KEY 를 설정하세요."
    );
  }

  browserClient = createClient(url, anonKey);
  return browserClient;
}
