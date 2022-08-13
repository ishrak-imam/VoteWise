import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from '@ui/library';
import {SafeView} from '@ui/components/SafeView';
import {Padder} from '@ui/components/Padder';

type Props = {
  children: React.ReactNode;
};

export class ErrorBoundary extends React.Component<Props, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    // You can also log the error to an error reporting service
    console.error('ERROR CAUGHT: ');
    console.error(error);
    console.error(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <SafeView>
          <View style={styles.container}>
            <Text>Something went wrong!</Text>
            <Padder />
            <Button onPress={() => this.setState({hasError: false})}>
              Try again
            </Button>
          </View>
        </SafeView>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
