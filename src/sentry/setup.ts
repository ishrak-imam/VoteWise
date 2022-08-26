import * as Sentry from '@sentry/react-native';

const SENTRY_DSN = 'https://ccc71a1f02154c4dbd535f7c14c92536@o1362749.ingest.sentry.io/6676976';

const isDev = __DEV__;

Sentry.init({
  dsn: SENTRY_DSN,
  tracesSampleRate: 1.0,
  enabled: !isDev,
});

export default Sentry;
