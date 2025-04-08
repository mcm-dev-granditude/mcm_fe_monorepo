import Link from "next/link";
import { CardLinkBlock } from "@repo/config/contentful";

export interface CardLinkBlockComponentProps {
  block: CardLinkBlock;
}

export default function CardLinkBlockComponent({block}: CardLinkBlockComponentProps) {
  const {backgroundImage, label, link} = block;

  const imageStyle = backgroundImage?.url
    ? {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImage.url})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center"
    }
    : {};

  return (
    <>
      {backgroundImage?.url && label && link?.slug && (
        <div
          className="flex items-center flex-col relative my-8 w-full lg:pr-6 lg:w-1/3"
          data-testid="card-link-block"
        >
          <Link
            href={link.slug}
            className="w-full block"
          >
            <div
              className="relative w-full h-[400px] bg-no-repeat bg-cover bg-center flex flex-col justify-center z-10"
              style={imageStyle}
            >
              <div className="absolute inset-0 bg-background bg-opacity-30 hover:bg-opacity-50 transition-opacity duration-300"></div>

              <h3 className="relative w-[90%] mx-auto my-0 text-xl leading-tight tracking-tight text-white font-bold text-center z-20">
                {label}
              </h3>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}