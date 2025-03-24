import React from "react";
import {Pressable, View} from "react-native";
import {NwText} from "@/components/nw-text";
import {useThemeColor} from "@/hooks/use-theme-color";
import {Moon, Sun} from "lucide-react-native";
import {useTheme} from "@/providers/theme-provider";
import {useBottomSheet} from "@/providers/bottom-sheet-provider";
import {NwIcon} from "@/components/nw-icon";


const ThemeSwitcherBottomSheet = () => {
  const {setTheme, theme} = useTheme();
  const {closeSheet} = useBottomSheet();
  const backgroundColorActive = useThemeColor( "backgroundSurface" );
  const primaryColor = useThemeColor( "primary" );

  const changeTheme = ( newTheme: "light" | "dark" | "system" ) => {
    setTheme( newTheme );
    closeSheet();
  };
  return (
    <View className="flex-1 px-4 pt-2">
      <NwText
        variant="heading"
        className="mb-4 text-center"
      >
        Select Theme
      </NwText>

      <View className="space-y-2">
        {/* Light theme option */ }
        <Pressable
          onPress={ () => changeTheme( "light" ) }
          className={ `p-4 rounded-lg flex-row items-center ${ theme === "light" ? "bg-primary/10" : "" }` }
          style={ {backgroundColor: theme === "light" ? backgroundColorActive : undefined} }
          android_ripple={ {color: useThemeColor( "primary" ) + "20"} }
        >
          <NwIcon
            icon={ Sun }
            size={ 24 }
            color={ primaryColor }
          />
          <NwText className="ml-3">Light</NwText>
        </Pressable>

        {/* Dark theme option */ }
        <Pressable
          onPress={ () => changeTheme( "dark" ) }
          className={ `p-4 rounded-lg flex-row items-center ${ theme === "dark" ? "bg-primary/10" : "" }` }
          style={ {backgroundColor: theme === "dark" ? backgroundColorActive : undefined} }
          android_ripple={ {color: useThemeColor( "primary" ) + "20"} }
        >
          <NwIcon
            icon={ Sun }
            size={ 24 }
            color={ primaryColor }
          />
          <NwText className="ml-3">Dark</NwText>
        </Pressable>

        {/* System theme option */ }
        <Pressable
          onPress={ () => changeTheme( "system" ) }
          className={ `p-4 rounded-lg flex-row items-center ${ theme === "system" ? "bg-primary/10" : "" }` }
          style={ {backgroundColor: theme === "system" ? backgroundColorActive : undefined} }
          android_ripple={ {color: useThemeColor( "primary" ) + "20"} }
        >
          <View className="w-5 h-5 items-center justify-center">
            <NwIcon
              icon={ Sun }
              size={ 20 }
              color={ primaryColor }
              className="absolute opacity-[0.5]"
            />
            <NwIcon
              icon={ Moon }
              size={ 20 }
              color={ primaryColor }
              className="absolute opacity-[0.5]"
            />


          </View>
          <NwText className="ml-3">System</NwText>
        </Pressable>
      </View>
    </View>
  );
};

export default ThemeSwitcherBottomSheet;
