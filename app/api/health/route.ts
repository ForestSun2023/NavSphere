import { NextResponse } from 'next/server';

export async function GET() {
  // 兼容地获取 uptime（优先使用 process.uptime，如果不可用则退回到 performance.now）
  const uptimeSeconds =
    typeof process !== 'undefined' && typeof (process as any).uptime === 'function'
      ? (process as any).uptime()
      : typeof globalThis !== 'undefined' && typeof (globalThis as any).performance !== 'undefined'
      ? Math.floor((globalThis as any).performance.now() / 1000)
      : 0;

  return NextResponse.json({ ok: true, uptime: uptimeSeconds });
}
