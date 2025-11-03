import { NextResponse } from 'next/server';
import { caseStudiesData } from '@/data/staticData';

export async function GET() {
  return NextResponse.json({
    items: caseStudiesData,
    totalCount: caseStudiesData.length
  });
}
