import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button} from '@ui/library';
import {SafeView} from '@ui/components/SafeView';
import {Padder} from '@ui/components/Padder';
import {useIsOnboardingSeen} from '@hooks/useIsOnboardingSeen';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackNavigation} from '@navigation/types';
import {StackActions} from '@react-navigation/native';
import * as routeKeys from '@navigation/routeKeys';

type Props = {
  navigation: NativeStackNavigationProp<AppStackNavigation, 'Onboarding'>;
};

export function OnboardingScreen({navigation}: Props) {
  const {setIsOnboardingSeen} = useIsOnboardingSeen();

  const startApp = React.useCallback(() => {
    setIsOnboardingSeen(true);
    navigation.dispatch(StackActions.replace(routeKeys.bottomTabNavigator));
  }, [navigation, setIsOnboardingSeen]);

  return (
    <SafeView>
      <View style={styles.container}>
        <Text>Onboarding screen</Text>
        <Padder />
        <Button onPress={startApp}>Skip</Button>
      </View>
    </SafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
