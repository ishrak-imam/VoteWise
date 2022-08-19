import * as Sentry from '@sentry/react-native';

const SENTRY_DSN =
  'https://4574a547884e4a259a08a15e21872f98@o1365918.ingest.sentry.io/6662578';

const isDev = __DEV__;

Sentry.init({
  dsn: SENTRY_DSN,
  tracesSampleRate: 1.0,
  enabled: !isDev,
});

export default Sentry;
