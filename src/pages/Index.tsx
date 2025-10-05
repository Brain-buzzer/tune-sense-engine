import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smile,
  Frown,
  Heart,
  Zap,
  Wind,
  BookOpen,
  Music2,
  Dumbbell,
  Car,
  Moon as MoonIcon,
  Coffee,
  Sun,
  Sunset,
  Stars,
} from "lucide-react";
import { SelectionCard } from "@/components/SelectionCard";
import { PlaylistResult } from "@/components/PlaylistResult";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { UserPreferences, Mood, Activity, TimeOfDay, Genre } from "@/types/playlist";
import { getPlaylistRecommendation } from "@/lib/expertSystem";
import heroBackground from "@/assets/hero-background.jpg";

const moods: { value: Mood; icon: any; label: string }[] = [
  { value: "Happy", icon: Smile, label: "Happy" },
  { value: "Sad", icon: Frown, label: "Sad" },
  { value: "Romantic", icon: Heart, label: "Romantic" },
  { value: "Energetic", icon: Zap, label: "Energetic" },
  { value: "Relaxed", icon: Wind, label: "Relaxed" },
];

const activities: { value: Activity; icon: any; label: string }[] = [
  { value: "Studying", icon: BookOpen, label: "Studying" },
  { value: "Partying", icon: Music2, label: "Partying" },
  { value: "Working Out", icon: Dumbbell, label: "Working Out" },
  { value: "Driving", icon: Car, label: "Driving" },
  { value: "Sleeping", icon: MoonIcon, label: "Sleeping" },
  { value: "Relaxing", icon: Coffee, label: "Relaxing" },
];

const timesOfDay: { value: TimeOfDay; icon: any; label: string }[] = [
  { value: "Morning", icon: Sun, label: "Morning" },
  { value: "Afternoon", icon: Sunset, label: "Afternoon" },
  { value: "Evening", icon: Sunset, label: "Evening" },
  { value: "Night", icon: Stars, label: "Night" },
];

const genres: { value: Genre; label: string }[] = [
  { value: "Afrobeat", label: "Afrobeat" },
  { value: "Pop", label: "Pop" },
  { value: "RnB", label: "RnB" },
  { value: "Gospel", label: "Gospel" },
  { value: "Hip-hop", label: "Hip-hop" },
  { value: "Jazz", label: "Jazz" },
];

const Index = () => {
  const [preferences, setPreferences] = useState<UserPreferences>({
    mood: null,
    activity: null,
    timeOfDay: null,
    genre: null,
  });
  const [recommendation, setRecommendation] = useState<any>(null);
  const [showIntro, setShowIntro] = useState(true);

  const updatePreference = <K extends keyof UserPreferences>(
    key: K,
    value: UserPreferences[K]
  ) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: prev[key] === value ? null : value,
    }));
  };

  const generatePlaylist = () => {
    const result = getPlaylistRecommendation(preferences);
    if (result) {
      setRecommendation(result);
    }
  };

  const resetSelection = () => {
    setPreferences({
      mood: null,
      activity: null,
      timeOfDay: null,
      genre: null,
    });
    setRecommendation(null);
  };

  const canGenerate =
    preferences.mood || preferences.activity || preferences.timeOfDay || preferences.genre;

  if (showIntro) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <AnimatedBackground />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-4"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="mb-8"
          >
            <Music2 className="w-24 h-24 mx-auto mb-6 text-primary animate-float" />
            <h1 className="text-6xl md:text-7xl font-bold gradient-text mb-4 tracking-tight">
              VibeTune
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Your Music Mood Expert
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-foreground/80 mb-8 max-w-md mx-auto"
          >
            Get personalized playlist recommendations powered by intelligent
            rule-based algorithms
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button
              onClick={() => setShowIntro(false)}
              size="lg"
              className="bg-gradient-to-r from-primary via-accent to-secondary text-white font-semibold px-12 py-6 text-lg rounded-full hover:opacity-90 transition-opacity glow-primary animate-pulse-glow"
            >
              Start Your Journey
            </Button>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Hero Background */}
      <div className="absolute inset-0 opacity-20">
        <img src={heroBackground} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2 flex items-center justify-center gap-3">
            <Music2 className="w-10 h-10" />
            VibeTune
          </h1>
          <p className="text-muted-foreground">
            Tell us your vibe, we'll find your sound
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!recommendation ? (
            <motion.div
              key="selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-6xl mx-auto space-y-12"
            >
              {/* Mood Selection */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-2xl font-semibold mb-6 text-primary">
                  How are you feeling?
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {moods.map((mood) => (
                    <SelectionCard
                      key={mood.value}
                      icon={mood.icon}
                      label={mood.label}
                      isSelected={preferences.mood === mood.value}
                      onClick={() => updatePreference("mood", mood.value)}
                    />
                  ))}
                </div>
              </motion.section>

              {/* Activity Selection */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold mb-6 text-secondary">
                  What are you doing?
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {activities.map((activity) => (
                    <SelectionCard
                      key={activity.value}
                      icon={activity.icon}
                      label={activity.label}
                      isSelected={preferences.activity === activity.value}
                      onClick={() => updatePreference("activity", activity.value)}
                    />
                  ))}
                </div>
              </motion.section>

              {/* Time of Day Selection */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl font-semibold mb-6 text-accent">
                  What time is it?
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {timesOfDay.map((time) => (
                    <SelectionCard
                      key={time.value}
                      icon={time.icon}
                      label={time.label}
                      isSelected={preferences.timeOfDay === time.value}
                      onClick={() => updatePreference("timeOfDay", time.value)}
                    />
                  ))}
                </div>
              </motion.section>

              {/* Genre Selection */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-semibold mb-6 text-primary">
                  Preferred Genre?
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {genres.map((genre) => (
                    <motion.button
                      key={genre.value}
                      onClick={() => updatePreference("genre", genre.value)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`glass-card p-4 rounded-xl text-center transition-all ${
                        preferences.genre === genre.value
                          ? "border-2 border-primary glow-primary bg-primary/10 text-primary font-semibold"
                          : "border border-border hover:border-primary/50 text-foreground"
                      }`}
                    >
                      {genre.label}
                    </motion.button>
                  ))}
                </div>
              </motion.section>

              {/* Generate Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center gap-4"
              >
                <Button
                  onClick={generatePlaylist}
                  disabled={!canGenerate}
                  size="lg"
                  className="bg-gradient-to-r from-primary via-accent to-secondary text-white font-semibold px-16 py-6 text-lg rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed glow-primary"
                >
                  Generate My Playlist
                </Button>
                {canGenerate && (
                  <Button
                    onClick={resetSelection}
                    variant="outline"
                    size="lg"
                    className="px-8 py-6 rounded-full"
                  >
                    Reset
                  </Button>
                )}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <PlaylistResult playlist={recommendation} onReset={resetSelection} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
