import React, { createContext, ReactNode, useCallback, useContext, useRef, useState } from "react";
import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import { View } from "react-native";
import { useThemeColor } from "@/hooks/use-theme-color";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface BottomSheetState {
  id: string;
  content: ReactNode;
  snapPoints?: string[];
}

interface BottomSheetContextType {
  openSheet: (id: string, content: ReactNode, snapPoints?: string[]) => void;
  closeSheet: () => void;
}

const BottomSheetContext = createContext<BottomSheetContextType | undefined>(undefined);

export function BottomSheetProvider({children}: {children: ReactNode}) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [activeSheet, setActiveSheet] = useState<BottomSheetState | null>(null);
  const backgroundColor = useThemeColor("background");
  const mutedForegroundColor = useThemeColor("mutedForeground");

  const openSheet = useCallback((
    id: string,
    content: ReactNode,
    snapPoints: string[] = ["25%", "50%"]
  ) => {
    setActiveSheet({id, content, snapPoints});
    bottomSheetRef.current?.expand();
  }, []);

  const closeSheet = useCallback(() => {
    bottomSheetRef.current?.close();
    // Delay resetting content to avoid flicker
    setTimeout(() => setActiveSheet(null), 300);
  }, []);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  return (
    <BottomSheetContext.Provider value={{openSheet, closeSheet}}>
      {children}
      <GestureHandlerRootView style={{flex: 0}}>
        {activeSheet && (
          <BottomSheet
            ref={bottomSheetRef}
            snapPoints={activeSheet.snapPoints || ["25%", "50%"]}
            backdropComponent={renderBackdrop}
            handleIndicatorStyle={{backgroundColor: mutedForegroundColor}}
            backgroundStyle={{backgroundColor}}
            enablePanDownToClose
          >
            <View className="p-4">
              {activeSheet.content}
            </View>
          </BottomSheet>
        )}
      </GestureHandlerRootView>
    </BottomSheetContext.Provider>
  );
}

export function useBottomSheet() {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error("useBottomSheet must be used within a BottomSheetProvider");
  }
  return context;
}