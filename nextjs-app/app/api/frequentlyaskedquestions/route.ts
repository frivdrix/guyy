import { NextResponse } from 'next/server';
import { faqsData } from '@/data/staticData';

export async function GET() {
  return NextResponse.json({
    items: faqsData,
    totalCount: faqsData.length
  });
}
