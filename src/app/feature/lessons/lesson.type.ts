export type LessonType = {
  id?: string;
  title: string;
  slug: string;
  availableAt: Date;
  lessonType: 'live' | 'class';
};

export type VideoLesson = {
  videoId: string;
  title: string;
  description: string;
  teacher: {
    name: string;
    bio: string;
    avatarURL: string;
  };
};
