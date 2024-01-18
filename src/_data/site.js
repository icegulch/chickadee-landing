const getBuildInfo = () => {
  const now = new Date();
  const timeZone = 'UTC';
  const buildTime = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone,
  }).format(now);
  return {
    time: {
      raw: now.toISOString(),
      formatted: `${buildTime} ${timeZone}`,
    }
  };
};

module.exports = {
  title: "Chickadee Financial",
  tagline: "Intelligent Bookkeeping in Black and White",
  description: "",
  env: process.env.ELEVENTY_ENV,
  domain: process.env.ELEVENTY_ENV === "production" ? "https://chickadee.fm" : "http://localhost:8080",
  og_img: "",
  last_updated: getBuildInfo().time.formatted,
  copyright: getBuildInfo().time.raw.slice(0, 4),
};