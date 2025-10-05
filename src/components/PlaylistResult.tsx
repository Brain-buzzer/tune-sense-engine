import { motion } from "framer-motion";
import { Playlist } from "@/types/playlist";
import { getCoverImageUrl } from "@/lib/expertSystem";
import { Music, Play } from "lucide-react";
import { Button } from "./ui/button";

interface PlaylistResultProps {
  playlist: Playlist;
  onReset: () => void;
}

export const PlaylistResult = ({ playlist, onReset }: PlaylistResultProps) => {
  const coverUrl = getCoverImageUrl(playlist.coverImage);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="glass-card rounded-3xl overflow-hidden glow-primary">
        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative h-64 w-full overflow-hidden"
        >
          <img
            src={coverUrl}
            alt={playlist.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="absolute top-4 right-4 w-16 h-16 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center glow-primary"
          >
            <Play className="w-8 h-8 text-primary fill-primary" />
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="p-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold mb-3 gradient-text"
          >
            {playlist.name}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground mb-6"
          >
            {playlist.description}
          </motion.p>

          {/* Songs List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-3 mb-6"
          >
            <h3 className="text-lg font-semibold flex items-center gap-2 text-secondary">
              <Music className="w-5 h-5" />
              Featured Tracks
            </h3>
            {playlist.songs.map((song, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{song.title}</p>
                  <p className="text-sm text-muted-foreground">{song.artist}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Button
              onClick={onReset}
              className="w-full bg-gradient-to-r from-primary via-accent to-secondary text-white font-semibold py-6 rounded-xl hover:opacity-90 transition-opacity glow-primary"
            >
              Generate Another Playlist
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
