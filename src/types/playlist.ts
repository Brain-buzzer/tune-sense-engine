export type Mood = "Happy" | "Sad" | "Romantic" | "Energetic" | "Relaxed";
export type Activity = "Studying" | "Partying" | "Working Out" | "Driving" | "Sleeping" | "Relaxing";
export type TimeOfDay = "Morning" | "Afternoon" | "Evening" | "Night";
export type Genre = "Afrobeat" | "Pop" | "RnB" | "Gospel" | "Hip-hop" | "Jazz";

export interface UserPreferences {
  mood: Mood | null;
  activity: Activity | null;
  timeOfDay: TimeOfDay | null;
  genre: Genre | null;
}

export interface Song {
  title: string;
  artist: string;
}

export interface Playlist {
  name: string;
  description: string;
  songs: Song[];
  coverImage: string;
}
