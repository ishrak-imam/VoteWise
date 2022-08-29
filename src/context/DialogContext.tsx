import React from 'react';
import {Portal, Dialog, Text, Button} from '@ui/library';

type Dialog = {
  visible: boolean;
  title?: string;
  content: string;
  onCancelPress?: () => void;
  onOkPress?: () => void;
};

type DialogPayload = Omit<Dialog, 'visible'>;

type DialogContext = {
  showDialog: (_: DialogPayload) => void;
};

const DialogContext = React.createContext<DialogContext>({
  showDialog: () => undefined,
});

type Props = {
  children: React.ReactNode;
};

export function DialogProvider({children}: Props) {
  const [dialog, setDialog] = React.useState<Dialog>({
    visible: false,
    content: '',
  });

  const showDialog = React.useCallback((_dialog: DialogPayload) => {
    setDialog({
      visible: true,
      ..._dialog,
    });
  }, []);

  const resetDialog = React.useCallback(() => {
    setDialog({
      visible: false,
      title: undefined,
      content: '',
      onCancelPress: undefined,
      onOkPress: undefined,
    });
  }, []);

  const hideDialogOnDismiss = React.useCallback(() => {
    resetDialog();
  }, [resetDialog]);

  const hideDialogOnCancel = React.useCallback(() => {
    if (dialog.onCancelPress) {
      dialog.onCancelPress();
    }
    resetDialog();
  }, [dialog, resetDialog]);

  const hideDialogOnOk = React.useCallback(() => {
    if (dialog.onOkPress) {
      dialog.onOkPress();
    }
    resetDialog();
  }, [dialog, resetDialog]);

  return (
    <DialogContext.Provider value={{showDialog}}>
      {children}
      <Portal>
        <Dialog visible={dialog.visible} onDismiss={hideDialogOnDismiss}>
          {dialog.title ? <Dialog.Title>{dialog.title}</Dialog.Title> : null}
          <Dialog.Content>
            <Text variant="bodyMedium">{dialog.content}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialogOnCancel}>Cancel</Button>
            <Button onPress={hideDialogOnOk}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </DialogContext.Provider>
  );
}

export function useDialog() {
  const context = React.useContext(DialogContext);

  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }

  return context;
}
