var searchYouTube = ({key, query, max = 10}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true',
    order: 'relevance' // play around with this
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({response}) => {
      response.JSON.error.errors.forEach((err) => {
        console.error(err);
      });
    });
};

export default searchYouTube;