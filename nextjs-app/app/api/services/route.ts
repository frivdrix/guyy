import { NextResponse } from 'next/server';
import { servicesData } from '@/data/staticData';

export async function GET() {
  return NextResponse.json({
    items: servicesData,
    totalCount: servicesData.length
  });
}
