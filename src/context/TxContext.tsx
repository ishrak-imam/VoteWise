import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Text,
  useTheme,
  BottomSheet,
  BottomSheetView,
  BottomSheetBackdrop,
} from '@ui/library';
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
          <BottomSheetView>
            <View style={styles.centeredContainer}>
              <Text>Awesome 🔥</Text>
            </View>
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
    backgroundColor: 'transparent',
  },
  centeredContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  handleStyle: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
