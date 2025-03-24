import {PropsWithChildren, useState} from "react";
import {TouchableOpacity, View} from "react-native";
import {cn} from "@repo/ui";
import {ThemedText} from "@/components/themed-text";
import {ThemedIcon} from "@/components/themed-icon";
import {ChevronRight} from "lucide-react-native";

type CollapsibleProps = PropsWithChildren<{
  title: string;
  className?: string;
}>

export function Collapsible( {children, title, className}: CollapsibleProps ) {
  const [isOpen, setIsOpen] = useState( false );

  return (
    <View className="p-4 rounded-lg border border-border dark:border-border ">
      <TouchableOpacity
        className="flex-row items-center gap-1.5"
        onPress={ () => setIsOpen( ( value ) => !value ) }
        activeOpacity={ 0.8 }
      >
        <ThemedIcon
          icon={ChevronRight}
          style={ {transform: [{rotate: isOpen ? "90deg" : "0deg"}]} }
        />

        <ThemedText
          variant="body"
          className="font-semibold text-red-500"
        >
          { title }
        </ThemedText>
      </TouchableOpacity>

      { isOpen && (
        <View className={ cn( "mt-1.5 ml-6", className ) }>
          { children }
        </View>
      ) }
    </View>
  );
}