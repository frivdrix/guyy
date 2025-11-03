import { NextResponse } from 'next/server';
import { partnerLogosData } from '@/data/staticData';

export async function GET() {
  return NextResponse.json({
    items: partnerLogosData,
    totalCount: partnerLogosData.length
  });
}
