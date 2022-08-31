import {useEffect} from 'react';
import messaging, {FirebaseMessagingTypes} from '@react-native-firebase/messaging';

function notificationHandler(message: FirebaseMessagingTypes.RemoteMessage | null) {
  // Implement deep linking...
  console.log('FCM Message: ', message);
}

export async function notificationHandlerBackground(message: FirebaseMessagingTypes.RemoteMessage | null) {
  // Task to perform when the app is in background...
  console.log('FCM Message in background: ', message);
}

export function useRegisterFCMListeners() {
  useEffect(() => {
    messaging()
      .getToken()
      .then(token => {
        console.log('FCM Token: ', token);
      });

    const unsubscribeNotification = messaging().onNotificationOpenedApp(notificationHandler);
    const unsubscribeMessage = messaging().onMessage(notificationHandler);

    return () => {
      unsubscribeNotification();
      unsubscribeMessage();
    };
  }, []);
}
