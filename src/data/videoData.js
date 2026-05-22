const createVideo = (title, videoId) => ({
  title,
  thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
  url: `https://youtu.be/${videoId}`,
});

const videoData = {
  podcast: [
    createVideo("Podcast 1", "kDYMizH73cc"),
    createVideo("Podcast 2", "xOl7HTXuLvk"),
    createVideo("Podcast 3", "K-Q4r37XgVw"),
    createVideo("Podcast 4", "SwQhKFMxmDY"),
  ],

  shorts: [
    createVideo("YouTube Shorts 1", "x66jV24dsBs"),
    createVideo("YouTube Shorts 2", "aYCjAqQ8Xt4"),
    createVideo("YouTube Shorts 3", "_vp5-xMllwY"),
    createVideo("YouTube Shorts 4", "Fxbs75KDxO4"),
  ],

  weddingHighlight: [
    createVideo("Wedding Highlight 1", "3wDnIk5tuwY"),
    createVideo("Wedding Highlight 2", "mrobdVDb8B4"),
    createVideo("Wedding Highlight 3", "X_ib393Sq8E"),
    createVideo("Wedding Highlight 4", "WnCV08DG7u4"),
  ],

  eventHighlight: [
    createVideo("Event Highlight 1", "FpszfOmdwJo"),
    createVideo("Event Highlight 2", "gQOi4mvdaW0"),
    createVideo("Event Highlight 3", "Wz3CgeSmGX8"),
    createVideo("Event Highlight 4", "MpX-Gx091a8"),
  ],

  testimonial: [
    createVideo("Testimonial 1", "Uf4JAss1vEo"),
    createVideo("Testimonial 2", "tOwjEOt1zYU"),
    createVideo("Testimonial 3", "8LSt8_11wbQ"),
    createVideo("Testimonial 4", "lCB4DeOestg"),
  ],

  realEstate: [
    createVideo("Real Estate Video 1", "y9j-BL5ocW8"),
    createVideo("Real Estate Video 2", "vwgcKspm868"),
    createVideo("Real Estate Video 3", "3H6Evu2hPpE"),
    createVideo("Real Estate Video 4", "-xVW8qjZLPs"),
  ],

  youtubeTalkingHead: [
    createVideo("Talking Head 1", "lyLEBnUTqJI"),
    createVideo("Talking Head 2", "ZOWeLxkO3v8"),
    createVideo("Talking Head 3", "JhmyNySOx7s"),
    createVideo("Talking Head 4", "pvHLbuwMvAw"),
  ],

  speakerPromo: [
    createVideo("Speaker Promo 1", "YoPzN6_GXM8"),
    createVideo("Speaker Promo 2", "bcPKB4RbRuc"),
  ],

  weddingVideos: [
    createVideo("Wedding Video 1", "VLkAMQhx7GY"),
    createVideo("Wedding Video 2", "gaKiJE2C8Tk"),
    createVideo("Wedding Video 3", "1ADhe5hbNd8"),
    createVideo("Wedding Video 4", "aVXNx9oMRPI"),
  ],

  educational: [
    createVideo("Educational Video 1", "jMhhaAQK1NQ"),
    createVideo("Educational Video 2", "UBOdxLw-Ebg"),
    createVideo("Educational Video 3", "n2OFMpk2H-o"),
    createVideo("Educational Video 4", "LXYjFsuVOoc"),
  ],

  generalEditing: [
    createVideo("General Editing 1", "RhY5Zke4vmM"),
    createVideo("General Editing 2", "05f8sG4OhZs"),
    createVideo("General Editing 3", "-FnrCZJw6TE"),
    createVideo("General Editing 4", "ftwISgKr2dA"),
  ],
};

export default videoData;