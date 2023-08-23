// Notice from where NextResponse is imported:
import { NextResponse } from 'next/server';
import ArtworkData from '@/public/data.json';

export async function GET() {
  return NextResponse.json(ArtworkData);
}
