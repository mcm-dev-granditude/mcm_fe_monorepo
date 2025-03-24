import React from "react";
import {Pressable, View} from "react-native";
import {Moon, Sun} from "lucide-react-native";
import {useTheme} from "@/providers/theme-provider";
import {useThemeColor} from "@/hooks/use-theme-color";
import {useAnimatedStyle, withTiming} from "react-native-reanimated";
import {useBottomSheet} from "@/providers/bottom-sheet-provider";
import ThemeSwitcherBottomSheet from "@/components/layout/theme-switcher/theme-switcher-bottomsheet";
import {NwAnimatedView} from "@/components/nw-animated-view";
import {NwIcon} from "@/components/nw-icon";

export function ThemeSwitcher() {
  const {isDarkMode} = useTheme();
  const primaryColor = useThemeColor( "primary" );
  const {openSheet} = useBottomSheet();
  const snapPoints = React.useMemo( () => ["25%"], [] );

  // Animation styles for sun/moon icons
  const sunAnimatedStyle = useAnimatedStyle( () => {
    return {
      opacity: withTiming( isDarkMode ? 0 : 1, {duration: 300} ),
      transform: [{scale: withTiming( isDarkMode ? 0.8 : 1, {duration: 300} )}]
    };
  } );

  const moonAnimatedStyle = useAnimatedStyle( () => {
    return {
      opacity: withTiming( isDarkMode ? 1 : 0, {duration: 300} ),
      transform: [{scale: withTiming( isDarkMode ? 1 : 0.8, {duration: 300} )}]
    };
  } );


  return (
    <View>
      {/* Theme toggle button */ }
      <Pressable
        onPress={ () => openSheet( "theme-selector", <ThemeSwitcherBottomSheet />, snapPoints ) }
        className="p-2 rounded-full bg-secondary/20 active:bg-secondary/30"
        accessibilityLabel="Change theme"
        accessibilityHint="Opens theme selection options"
      >
        <View className="w-6 h-6">
          {/* Sun icon with animation */ }
          <NwAnimatedView
            className="absolute"
            style={ sunAnimatedStyle }
          >
            <NwIcon
              icon={ Sun }
              size={ 24 }
              color={ primaryColor }
            />
          </NwAnimatedView>

          {/* Moon icon with animation */ }
          <NwAnimatedView
            className="absolute"
            style={ moonAnimatedStyle }
          >
            <NwIcon
              icon={ Moon }
              size={ 24 }
              color={ primaryColor }
            />
          </NwAnimatedView>
        </View>
      </Pressable>
    </View>
  );
}