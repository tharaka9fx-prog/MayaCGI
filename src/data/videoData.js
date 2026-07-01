const createVideo = (title, videoId) => ({
  title,
  thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
  url: `https://youtu.be/${videoId}`,
});

const videoData = {
  podcast: [
    createVideo("Podcast 1", "r_k06oAcGMQ"),
    createVideo("Podcast 2", "ZfokiGfM4Wk"),
    createVideo("Podcast 3", "rTLRntH2KYQ"),
    createVideo("Podcast 4", "3qTRLIbA1-0"),
  ],

  shorts: [
    createVideo("YouTube Shorts 1", "hndUh1Rz3UI"),
    createVideo("YouTube Shorts 2", "wkD3kBK-tFw"),
    createVideo("YouTube Shorts 3", "J7eQf-QRt1Q"),
    createVideo("YouTube Shorts 4", "yphkNys8CeY"),
    createVideo("YouTube Shorts 5", "8WPZ5DYhqwY"),
    createVideo("YouTube Shorts 6", "d7bceQ8A35Q"),
  ],

  // weddingHighlight: [
  //   No new videos provided
  // ],

  eventHighlight: [
    createVideo("Event Highlight 1", "yI-9Aebr0zM"),
    createVideo("Event Highlight 2", "frjrwpfL3i8"),
    createVideo("Event Highlight 3", "hPuFGuv746Q"),
  ],

  // testimonial: [
  //   No new videos provided
  // ],

  realEstate: [
    createVideo("Real Estate Video 1", "uoqQlyKLmA8"),
  ],

  youtubeTalkingHead: [
    createVideo("Talking Head 1", "_0OOBCVO4Rg"),
    createVideo("Talking Head 2", "3f0lOe65ZBU"),
    createVideo("Talking Head 3", "jgvJuzoRLkw"),
  ],

  // speakerPromo: [
  //   No new videos provided
  // ],

  // weddingVideos: [
  //   No new videos provided
  // ],

  educational: [
    createVideo("Educational Video 1", "Y-LaV38ru4E"),
    createVideo("Educational Video 2", "jgvJuzoRLkw"),
    createVideo("Educational Video 3", "3f0lOe65ZBU"),
    createVideo("Educational Video 4", "ABiMZyvWfp8"),
  ],

  generalEditing: [
    createVideo("General Editing 1", "Y-LaV38ru4E"),
    createVideo("General Editing 2", "ABiMZyvWfp8"),
    createVideo("General Editing 3", "xjwi-v63fLE"),
    createVideo("General Editing 4", "_0OOBCVO4Rg"),
    createVideo("General Editing 5", "FMF5uzVZgWs"),
  ],
};

export default videoData;