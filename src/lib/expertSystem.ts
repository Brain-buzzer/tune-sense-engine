import { UserPreferences, Playlist, Mood, Activity, TimeOfDay, Genre } from "@/types/playlist";

interface Rule {
  conditions: Partial<UserPreferences>;
  playlist: Playlist;
  priority: number;
}

// Comprehensive rule base for playlist recommendations
const rules: Rule[] = [
  {
    conditions: { mood: "Happy", activity: "Partying" },
    playlist: {
      name: "Upbeat Afrobeat Party Mix",
      description: "High-energy Afrobeat tracks to keep the party alive all night long!",
      songs: [
        { title: "Calm Down", artist: "Rema & Selena Gomez" },
        { title: "Last Last", artist: "Burna Boy" },
        { title: "Bloody Samaritan", artist: "Ayra Starr" },
        { title: "Peru", artist: "Fireboy DML" },
        { title: "Buga", artist: "Kizz Daniel" },
      ],
      coverImage: "party-afrobeat",
    },
    priority: 10,
  },
  {
    conditions: { mood: "Sad", timeOfDay: "Night" },
    playlist: {
      name: "Slow RnB & Soul",
      description: "Emotional RnB ballads perfect for late night reflection and healing.",
      songs: [
        { title: "Un-thinkable (I'm Ready)", artist: "Alicia Keys" },
        { title: "Say You Won't Let Go", artist: "James Arthur" },
        { title: "When I Was Your Man", artist: "Bruno Mars" },
        { title: "Redemption", artist: "Burna Boy" },
        { title: "Location", artist: "Khalid" },
      ],
      coverImage: "sad-rnb",
    },
    priority: 9,
  },
  {
    conditions: { activity: "Studying" },
    playlist: {
      name: "Lo-Fi Concentration Beats",
      description: "Chill instrumental beats to boost focus and productivity during study sessions.",
      songs: [
        { title: "Tokyo Lofi", artist: "Kupla" },
        { title: "Coffee", artist: "Bearcubs" },
        { title: "Rain", artist: "SwuM" },
        { title: "Study Music", artist: "Lofi Girl" },
        { title: "Homework", artist: "Dion Timmer" },
      ],
      coverImage: "study-lofi",
    },
    priority: 10,
  },
  {
    conditions: { mood: "Energetic", activity: "Working Out" },
    playlist: {
      name: "Power Workout Jams",
      description: "Explosive Hip-hop and Pop bangers to fuel your intense workout sessions!",
      songs: [
        { title: "HUMBLE.", artist: "Kendrick Lamar" },
        { title: "Stronger", artist: "Kanye West" },
        { title: "Till I Collapse", artist: "Eminem" },
        { title: "Ye", artist: "Burna Boy" },
        { title: "SICKO MODE", artist: "Travis Scott" },
      ],
      coverImage: "workout-power",
    },
    priority: 10,
  },
  {
    conditions: { mood: "Relaxed", timeOfDay: "Evening" },
    playlist: {
      name: "Chill Vibes Collection",
      description: "Smooth mellow tracks perfect for unwinding after a long day.",
      songs: [
        { title: "Electric Feel", artist: "MGMT" },
        { title: "The Less I Know The Better", artist: "Tame Impala" },
        { title: "Sober", artist: "Childish Gambino" },
        { title: "Sunday Best", artist: "Surfaces" },
        { title: "Good Days", artist: "SZA" },
      ],
      coverImage: "chill-evening",
    },
    priority: 8,
  },
  {
    conditions: { mood: "Romantic", genre: "Afrobeat" },
    playlist: {
      name: "Afro Love Songs",
      description: "Sweet romantic Afrobeat melodies perfect for special moments with your loved one.",
      songs: [
        { title: "Essence", artist: "Wizkid ft. Tems" },
        { title: "Love Nwantiti", artist: "CKay" },
        { title: "Dior", artist: "Pop Smoke" },
        { title: "Soco", artist: "Wizkid" },
        { title: "Fall", artist: "Davido" },
      ],
      coverImage: "romantic-afro",
    },
    priority: 9,
  },
  {
    conditions: { mood: "Happy", genre: "Gospel" },
    playlist: {
      name: "Praise & Dance Vibes",
      description: "Uplifting gospel anthems that make you want to dance and celebrate!",
      songs: [
        { title: "Goodness of God", artist: "Bethel Music" },
        { title: "Way Maker", artist: "Sinach" },
        { title: "Okaka", artist: "Mercy Chinwo" },
        { title: "Excess Love", artist: "Mercy Chinwo" },
        { title: "Great God", artist: "Tope Alabi" },
      ],
      coverImage: "gospel-praise",
    },
    priority: 9,
  },
  {
    conditions: { activity: "Driving", timeOfDay: "Morning" },
    playlist: {
      name: "Morning Commute Mix",
      description: "Energizing Pop and Hip-hop tracks to kickstart your morning drive!",
      songs: [
        { title: "Blinding Lights", artist: "The Weeknd" },
        { title: "Levitating", artist: "Dua Lipa" },
        { title: "Good 4 U", artist: "Olivia Rodrigo" },
        { title: "Peaches", artist: "Justin Bieber" },
        { title: "Stay", artist: "The Kid LAROI & Justin Bieber" },
      ],
      coverImage: "morning-drive",
    },
    priority: 8,
  },
  {
    conditions: { timeOfDay: "Night", activity: "Relaxing" },
    playlist: {
      name: "Soft Jazz Nights",
      description: "Smooth jazz melodies perfect for late-night relaxation and contemplation.",
      songs: [
        { title: "Take Five", artist: "Dave Brubeck" },
        { title: "Autumn Leaves", artist: "Bill Evans" },
        { title: "So What", artist: "Miles Davis" },
        { title: "My Favorite Things", artist: "John Coltrane" },
        { title: "Round Midnight", artist: "Thelonious Monk" },
      ],
      coverImage: "jazz-night",
    },
    priority: 9,
  },
  {
    conditions: { activity: "Sleeping" },
    playlist: {
      name: "Calm Piano Sleep Tunes",
      description: "Gentle piano compositions to help you drift into peaceful sleep.",
      songs: [
        { title: "Clair de Lune", artist: "Claude Debussy" },
        { title: "Gymnopédie No. 1", artist: "Erik Satie" },
        { title: "Nocturne in E-flat Major", artist: "Frédéric Chopin" },
        { title: "River Flows in You", artist: "Yiruma" },
        { title: "Comptine d'un autre été", artist: "Yann Tiersen" },
      ],
      coverImage: "sleep-piano",
    },
    priority: 10,
  },
  {
    conditions: { mood: "Energetic", genre: "Hip-hop" },
    playlist: {
      name: "Hip-Hop Energy Boost",
      description: "Hard-hitting Hip-hop bangers to amplify your energy levels!",
      songs: [
        { title: "Money Trees", artist: "Kendrick Lamar" },
        { title: "Ni**as in Paris", artist: "Jay-Z & Kanye West" },
        { title: "Mo Bamba", artist: "Sheck Wes" },
        { title: "Magnolia", artist: "Playboi Carti" },
        { title: "Going Bad", artist: "Meek Mill ft. Drake" },
      ],
      coverImage: "hiphop-energy",
    },
    priority: 8,
  },
  {
    conditions: { mood: "Romantic", timeOfDay: "Evening" },
    playlist: {
      name: "Romantic Evening Melodies",
      description: "Soulful romantic tracks perfect for intimate evening moments.",
      songs: [
        { title: "Adore You", artist: "Harry Styles" },
        { title: "Perfect", artist: "Ed Sheeran" },
        { title: "All of Me", artist: "John Legend" },
        { title: "Thinking Out Loud", artist: "Ed Sheeran" },
        { title: "Love on Top", artist: "Beyoncé" },
      ],
      coverImage: "romantic-evening",
    },
    priority: 9,
  },
  {
    conditions: { genre: "Pop", timeOfDay: "Afternoon" },
    playlist: {
      name: "Afternoon Pop Hits",
      description: "Catchy Pop favorites to brighten up your afternoon!",
      songs: [
        { title: "As It Was", artist: "Harry Styles" },
        { title: "Anti-Hero", artist: "Taylor Swift" },
        { title: "Flowers", artist: "Miley Cyrus" },
        { title: "Kill Bill", artist: "SZA" },
        { title: "Vampire", artist: "Olivia Rodrigo" },
      ],
      coverImage: "pop-afternoon",
    },
    priority: 7,
  },
  {
    conditions: { mood: "Relaxed", genre: "Jazz" },
    playlist: {
      name: "Smooth Jazz Lounge",
      description: "Sophisticated jazz selections for ultimate relaxation and elegance.",
      songs: [
        { title: "Blue in Green", artist: "Miles Davis" },
        { title: "Summertime", artist: "Ella Fitzgerald" },
        { title: "Fly Me to the Moon", artist: "Frank Sinatra" },
        { title: "Girl from Ipanema", artist: "Stan Getz" },
        { title: "Misty", artist: "Erroll Garner" },
      ],
      coverImage: "jazz-lounge",
    },
    priority: 8,
  },
  {
    conditions: { activity: "Partying", genre: "Afrobeat" },
    playlist: {
      name: "Afrobeats Party Anthems",
      description: "Explosive Afrobeat hits guaranteed to get everyone on the dance floor!",
      songs: [
        { title: "Ye", artist: "Burna Boy" },
        { title: "Jerusalema", artist: "Master KG ft. Nomcebo" },
        { title: "Kokoma", artist: "Zlatan" },
        { title: "Drogba (Joanna)", artist: "Afro B" },
        { title: "Jowo", artist: "Davido" },
      ],
      coverImage: "afrobeat-party",
    },
    priority: 10,
  },
];

// Forward chaining inference engine
export function getPlaylistRecommendation(preferences: UserPreferences): Playlist | null {
  let bestMatch: { rule: Rule; score: number } | null = null;

  for (const rule of rules) {
    let matchScore = 0;
    let conditionCount = 0;

    // Check each condition
    for (const [key, value] of Object.entries(rule.conditions)) {
      conditionCount++;
      if (preferences[key as keyof UserPreferences] === value) {
        matchScore++;
      }
    }

    // Calculate match percentage and factor in priority
    if (matchScore > 0) {
      const matchPercentage = matchScore / conditionCount;
      const totalScore = matchPercentage * rule.priority;

      if (!bestMatch || totalScore > bestMatch.score) {
        bestMatch = { rule, score: totalScore };
      }
    }
  }

  return bestMatch ? bestMatch.rule.playlist : null;
}

// Generate cover image placeholder based on playlist type
export function getCoverImageUrl(imageKey: string): string {
  const imageMap: Record<string, string> = {
    "party-afrobeat": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop",
    "sad-rnb": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop",
    "study-lofi": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&h=500&fit=crop",
    "workout-power": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=500&fit=crop",
    "chill-evening": "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&h=500&fit=crop",
    "romantic-afro": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&h=500&fit=crop",
    "gospel-praise": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    "morning-drive": "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=500&fit=crop",
    "jazz-night": "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=500&h=500&fit=crop",
    "sleep-piano": "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=500&h=500&fit=crop",
    "hiphop-energy": "https://images.unsplash.com/photo-1571609518119-e0c5e4c82e9e?w=500&h=500&fit=crop",
    "romantic-evening": "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=500&h=500&fit=crop",
    "pop-afternoon": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop",
    "jazz-lounge": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=500&h=500&fit=crop",
    "afrobeat-party": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=500&fit=crop",
  };

  return imageMap[imageKey] || "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop";
}
