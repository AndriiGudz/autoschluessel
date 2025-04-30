export interface VideoItem {
  id: string;
  thumbnail: string;
  title: string;
}

export interface VideoSliderProps {
  videos: VideoItem[];
}
