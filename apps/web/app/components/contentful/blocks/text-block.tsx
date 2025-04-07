import { TextBlock } from "@repo/config/contentful";

export interface TextBlockComponentProps {
  block: TextBlock;
}

export default function TextBlockComponent({block}: TextBlockComponentProps) {
  const {title, preamble, text, centerText, optionalBackgroundImage} = block;

  let backgroundStyle = {};
  const backgroundImageUrl = optionalBackgroundImage?.url;

  if (backgroundImageUrl) {
    backgroundStyle = {
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${backgroundImageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    };
  }

  const textAlignClass = centerText ? "text-center" : "text-left";

  const renderText = () => {
    if (!text) return null;

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
            {title}
          </h2>
        )}

        {preamble && (
          <div className={`text-lg font-medium mb-6 ${textAlignClass}`}>
            {preamble}
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