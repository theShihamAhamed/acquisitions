import arcjet, { shield, detectBot, slidingWindow } from '@arcjet/node';

const MODE = process.env.NODE_ENV === 'production' ? 'LIVE' : 'DRY_RUN';

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    shield({ mode: MODE }),
    detectBot({
      mode: MODE,
      allow: ['CATEGORY:SEARCH_ENGINE', 'CATEGORY:PREVIEW'],
    }),
    slidingWindow({
      mode: MODE,
      interval: '2s',
      max: 5,
    }),
  ],
});

export default aj;
