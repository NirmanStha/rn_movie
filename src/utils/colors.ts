// Movie App Color Schemes

export const movieColors = {
  // Light Theme
  light: {
    // Backgrounds
    primary: "bg-white",
    secondary: "bg-gray-50",
    accent: "bg-blue-50",
    card: "bg-white",

    // Text Colors
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-600",
    textMuted: "text-gray-400",
    textAccent: "text-blue-600",

    // Movie-specific colors
    rating: "text-yellow-500",
    genre: "text-purple-600",
    year: "text-gray-500",

    // Interactive elements
    button: "bg-blue-600",
    buttonText: "text-white",
    link: "text-blue-600",

    // Borders & Dividers
    border: "border-gray-200",
    divider: "bg-gray-200",
  },

  // Dark Theme
  dark: {
    // Backgrounds
    primary: "bg-gray-900",
    secondary: "bg-gray-800",
    accent: "bg-gray-700",
    card: "bg-gray-800",

    // Text Colors
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    textMuted: "text-gray-500",
    textAccent: "text-blue-400",

    // Movie-specific colors
    rating: "text-yellow-400",
    genre: "text-purple-400",
    year: "text-gray-400",

    // Interactive elements
    button: "bg-blue-500",
    buttonText: "text-white",
    link: "text-blue-400",

    // Borders & Dividers
    border: "border-gray-700",
    divider: "bg-gray-700",
  },

  // Cinema-themed colors
  cinema: {
    // Classic cinema colors
    filmReel: "bg-amber-900",
    vintage: "bg-sepia",
    curtain: "bg-red-800",
    screen: "bg-gray-100",

    // Modern streaming colors
    netflix: "bg-red-600",
    prime: "bg-blue-700",
    disney: "bg-blue-800",
    hulu: "bg-green-500",

    // Genre colors
    action: "bg-red-600",
    comedy: "bg-yellow-500",
    drama: "bg-purple-600",
    horror: "bg-black",
    scifi: "bg-blue-500",
    romance: "bg-pink-500",
    thriller: "bg-gray-700",
    documentary: "bg-green-600",
  },
};

// Utility function to get theme colors
export const getThemeColors = (isDark: boolean = false) => {
  return isDark ? movieColors.dark : movieColors.light;
};

// Movie rating colors
export const getRatingColor = (rating: number) => {
  if (rating >= 8) return "text-green-500";
  if (rating >= 6) return "text-yellow-500";
  if (rating >= 4) return "text-orange-500";
  return "text-red-500";
};

// Genre-based background colors
export const getGenreColor = (genre: string) => {
  const genreMap: { [key: string]: string } = {
    action: movieColors.cinema.action,
    comedy: movieColors.cinema.comedy,
    drama: movieColors.cinema.drama,
    horror: movieColors.cinema.horror,
    "sci-fi": movieColors.cinema.scifi,
    romance: movieColors.cinema.romance,
    thriller: movieColors.cinema.thriller,
    documentary: movieColors.cinema.documentary,
  };

  return genreMap[genre.toLowerCase()] || "bg-gray-500";
};
