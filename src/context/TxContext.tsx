import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Text,
  useTheme,
  BottomSheet,
  BottomSheetView,
  BottomSheetBackdrop,
} from '@ui/library';
import {Layout} from '@ui/components/Layout';
import type {BottomSheetBackdropProps} from '@ui/library';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

type Props = {
  children: React.ReactNode;
};

type TxContext = {
  startTx: () => void;
};

const TxContext = React.createContext<TxContext>({
  startTx: () => {
    return;
  },
});

const Backdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop
    {...props}
    pressBehavior="close"
    disappearsOnIndex={-1}
    appearsOnIndex={0}
  />
);

export function TxProvider({children}: Props) {
  const {colors} = useTheme();
  const sheetRef = React.useRef<BottomSheet>(null);
  const snapPoints = React.useMemo(() => ['50%'], []);

  const openBottomSheet = React.useCallback(() => {
    sheetRef.current?.expand();
  }, []);

  const startTx = React.useCallback(() => {
    openBottomSheet();
  }, [openBottomSheet]);

  return (
    <TxContext.Provider value={{startTx}}>
      <GestureHandlerRootView style={styles.container}>
        {children}
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose
          index={-1}
          handleStyle={[
            styles.handleStyle,
            {backgroundColor: colors.background},
          ]}
          handleIndicatorStyle={{backgroundColor: colors.primary}}
          backdropComponent={Backdrop}>
          <BottomSheetView style={styles.container}>
            <Layout>
              <View style={styles.centeredContainer}>
                <Text>Awesome 🔥</Text>
              </View>
            </Layout>
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </TxContext.Provider>
  );
}

export function useStartTx() {
  const context = React.useContext(TxContext);

  if (!context) {
    throw new Error('useTx must be used within a TxProvider');
  }

  return context;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  handleStyle: {
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
