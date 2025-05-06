interface Video {
  src: string;
  alt: string;
}

/**
 * Получает конфигурацию видео для указанного языка
 */
export async function getVideoConfig(lang: string): Promise<Video[]> {
  // В будущем можно добавить разные видео для разных языков
  const videos: Video[] = [
    { src: "/videos/video1.mp4", alt: "Clip 1" },
    { src: "/videos/video2.mp4", alt: "Clip 2" },
    { src: "/videos/video3.mp4", alt: "Clip 3" },
    { src: "/videos/video4.mp4", alt: "Clip 4" },
    { src: "/videos/video5.mov", alt: "Clip 5" },
    { src: "/videos/video6.mov", alt: "Clip 6" },
  ];

  return videos;
}
