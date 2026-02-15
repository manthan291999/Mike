import { NextRequest, NextResponse } from 'next/server';
import { newsletterSchema } from '@/lib/validators';

export async function POST(req: NextRequest) {
  const parsed = newsletterSchema.safeParse(await req.json());
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }
  return NextResponse.json({ success: true });
}
