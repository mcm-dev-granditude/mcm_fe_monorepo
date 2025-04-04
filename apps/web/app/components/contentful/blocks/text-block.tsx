import { ContentfulBlockProps, getAssetUrl, TypeTextBlockSkeleton } from "@repo/config/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

export default function TextBlock({blockData}: ContentfulBlockProps<TypeTextBlockSkeleton>) {
  const {title, preamble, text, centerText, optionalBackgroundImage} = blockData.fields;

  // Background styling
  let backgroundStyle = {};
  const backgroundImageUrl = getAssetUrl(optionalBackgroundImage);

  console.log(backgroundImageUrl);

  if (backgroundImageUrl) {
    backgroundStyle = {
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${backgroundImageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    };
  }

  const textAlignClass = centerText ? "text-center" : "text-left";

  // Handle different potential formats of text
  const renderText = () => {
    if (!text) return null;

    if (typeof text === "object" && text.nodeType) {
      return documentToReactComponents(text as unknown as Document);
    }

    if (typeof text === "string") {
      return text.split("\n\n").map((paragraph, index) => (
        <p
          key={index}
          className="mb-4 last:mb-0"
        >
          {paragraph.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < paragraph.split("\n").length - 1 && <br />}
            </span>
          ))}
        </p>
      ));
    }

    return null;
  };

  return (
    <section
      className="w-full px-4 py-8 md:py-12"
      style={backgroundStyle}
      data-testid="text-block"
    >
      <div className="max-w-4xl mx-auto text-foreground">
        {title && (
          <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${textAlignClass}`}>
            {typeof title === "string" ? title : ""}
          </h2>
        )}

        {preamble && (
          <div className={`text-lg font-medium mb-6 ${textAlignClass}`}>
            {typeof preamble === "string" ? preamble : ""}
          </div>
        )}

        {text && (
          <div className={`prose max-w-none ${textAlignClass}`}>
            {renderText()}
          </div>
        )}
      </div>
    </section>
  );
}