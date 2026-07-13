export interface TVPiece {
  title: string;
  url: string;
  duration?: string;
  live?: boolean;
  thumbnail?: string;
}

export const tvHero: TVPiece | null = null;

export const tvPieces: TVPiece[] = [];

export const tvReady = tvPieces.length >= 3 && tvHero !== null;
