// Notice from where NextResponse is imported:
import { NextResponse } from 'next/server';
import ArtworkData from '@/public/data.json';

export async function GET(req) {
  let id = req.url.slice(req.url.lastIndexOf('/') + 1);

  // Checks if id is over or under
  id = Math.min(Math.max(id, 1), 15);

  return NextResponse.json(ArtworkData[id - 1]);
}
