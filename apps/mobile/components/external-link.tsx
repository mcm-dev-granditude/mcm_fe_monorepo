import {Link} from "expo-router";
import {openBrowserAsync} from "expo-web-browser";
import {type ComponentProps} from "react";
import {Platform} from "react-native";

type LinkProps = ComponentProps<typeof Link>;
type ExternalLinkProps = Omit<LinkProps, "href"> & {
  href: string;
};

export function ExternalLink( {href, ...rest}: ExternalLinkProps ) {
  return (
    <Link
      target="_blank"
      { ...rest }
      href={ href as LinkProps["href"] }
      onPress={ async ( event ) => {
        if ( Platform.OS !== "web" ) {
          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          // Open the link in an in-app browser.
          await openBrowserAsync( href );
        }
      } }
    />
  );
}