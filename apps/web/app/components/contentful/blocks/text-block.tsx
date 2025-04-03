import { ContentfulBlockProps, getAssetUrl, TypeTextBlockSkeleton } from "@repo/config/contentful";

export default function TextBlock({blockData}: ContentfulBlockProps<TypeTextBlockSkeleton>) {
  const {title, preamble, text, centerText, optionalBackgroundImage} = blockData.fields;

  // Set background style if provided
  let backgroundStyle = {};
  const backgroundImageUrl = getAssetUrl(optionalBackgroundImage);

  if (backgroundImageUrl) {
    backgroundStyle = {
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${backgroundImageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    };
  }

  // Set text alignment class based on centerText prop
  const textAlignClass = centerText ? "text-center" : "text-left";

  // Safety check for text content
  const textContent = typeof text === "string" ? text : "";
  const titleContent = typeof title === "string" ? title : "";
  const preambleContent = typeof preamble === "string" ? preamble : "";

  return (
    <div
      className="max-w-4xl mx-auto px-4 py-8 md:py-12"
      style={backgroundStyle}
    >
      {title && (
        <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${textAlignClass}`}>
          {titleContent}
        </h2>
      )}

      {preamble && (
        <div className={`text-lg font-medium mb-6 ${textAlignClass}`}>
          {preambleContent}
        </div>
      )}

      {text && (
        <div className={`prose max-w-none ${textAlignClass}`}>
          {textContent.split("\n\n").map((paragraph, index) => (
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
          ))}
        </div>
      )}
    </div>
  );
}