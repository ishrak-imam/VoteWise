import React from 'react';
import {StyleSheet, View, Linking} from 'react-native';
import {
  Camera,
  useCameraDevices,
  useFrameProcessor,
} from 'react-native-vision-camera';
import {BarcodeFormat, scanBarcodes, Barcode} from 'vision-camera-code-scanner';
import {runOnJS} from 'react-native-reanimated';
import {useCameraPermission} from '@hooks/useCameraPermission';
import {Text, Button, ActivityIndicator} from '@ui/library';
import {Padder} from '@ui/components/Padder';

type Props = {
  onScan: (data: string) => void;
};

export function QRScanner({onScan}: Props) {
  const {hasPermission, isAppActive} = useCameraPermission();
  const devices = useCameraDevices();
  const device = devices.back;

  const openAppSetting = async () => {
    await Linking.openSettings();
  };

  const processScannedResults = React.useCallback(
    (QRcodes: Barcode[]) => {
      QRcodes.forEach(code => {
        if (code.displayValue) {
          onScan(code.displayValue);
        }
      });
    },
    [onScan],
  );

  const frameProcessor = useFrameProcessor(frame => {
    'worklet';
    const QRcodes = scanBarcodes(frame, [BarcodeFormat.QR_CODE], {
      checkInverted: true,
    });
    runOnJS(processScannedResults)(QRcodes);
  }, []);

  if (!device) {
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!hasPermission) {
    return (
      <View style={styles.centeredContainer}>
        <Text variant="titleSmall">{'Need camera permission'}</Text>
        <Padder />
        <Button onPress={openAppSetting}>Open Settings</Button>
      </View>
    );
  }

  return (
    <View style={styles.centeredContainer}>
      <Camera
        style={styles.cameraView}
        device={device}
        isActive={isAppActive}
        frameProcessor={frameProcessor}
        frameProcessorFps={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  cameraView: {
    height: '70%',
    width: '80%',
  },
});
