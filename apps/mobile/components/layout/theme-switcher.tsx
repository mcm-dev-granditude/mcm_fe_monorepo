import React, {useState} from "react";
import {Modal, Pressable, Text, TouchableOpacity, View} from "react-native";
import {Moon, Sun} from "lucide-react-native";
import {useTheme} from "@/providers/theme-provider";
import {useThemeColor} from "@/hooks/use-theme-color";

// The theme switcher component
export function ThemeSwitcher() {
  const [modalVisible, setModalVisible] = useState( false );
  const {theme, setTheme, isDarkMode} = useTheme();

  const primaryColor = useThemeColor( "primary" );

  return (
    <View>
      {/* Button trigger */ }
      <TouchableOpacity
        onPress={ () => setModalVisible( true ) }
        className="p-2 rounded-full bg-secondary/50 dark:bg-secondary/50"
      >
        <View className="relative w-6 h-6 items-center justify-center">
          {/* Sun icon - visible in light mode */ }
          <Sun
            size={ 24 }
            color={ primaryColor }
            style={ {
              opacity: isDarkMode ? 0 : 1,
              position: "absolute"
            } }
          />

          {/* Moon icon - visible in dark mode */ }
          <Moon
            size={ 24 }
            color={ primaryColor }
            style={ {
              opacity: isDarkMode ? 1 : 0,
              position: "absolute"
            } }
          />
        </View>
      </TouchableOpacity>

      {/* Theme selection modal */ }
      <Modal
        animationType="fade"
        transparent={ true }
        visible={ modalVisible }
        onRequestClose={ () => setModalVisible( false ) }
      >
        <Pressable
          className="flex-1 justify-end items-end bg-black/30"
          onPress={ () => setModalVisible( false ) }
        >
          <View
            className="bg-card dark:bg-card m-4 p-1 rounded-md shadow-lg w-40"
          >
            {/* Light theme option */ }
            <Pressable
              onPress={ () => {
                setTheme( "light" );
                setModalVisible( false );
              } }
              className={ `p-3 rounded-sm ${ theme === "light" ? "bg-primary/10" : "" }` }
            >
              <Text className="text-foreground dark:text-foreground">Light</Text>
            </Pressable>

            {/* Dark theme option */ }
            <Pressable
              onPress={ () => {
                setTheme( "dark" );
                setModalVisible( false );
              } }
              className={ `p-3 rounded-sm ${ theme === "dark" ? "bg-primary/10" : "" }` }
            >
              <Text className="text-foreground dark:text-foreground">Dark</Text>
            </Pressable>

            {/* System theme option */ }
            <Pressable
              onPress={ () => {
                setTheme( "system" );
                setModalVisible( false );
              } }
              className={ `p-3 rounded-sm ${ theme === "system" ? "bg-primary/10" : "" }` }
            >
              <Text className="text-foreground dark:text-foreground">System</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}