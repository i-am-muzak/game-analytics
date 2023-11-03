export interface Video {
  poster: string | null;
  source: string;
}

export interface VideoPlayer {
  show: boolean;
  video: Video | null;
}
