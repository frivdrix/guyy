import { NextResponse } from 'next/server';
import { testimonialsData } from '@/data/staticData';

export async function GET() {
  return NextResponse.json({
    items: testimonialsData,
    totalCount: testimonialsData.length
  });
}
