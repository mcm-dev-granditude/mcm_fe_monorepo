import { CardBlock as CardBlockType, CardListBlock } from "@repo/config/contentful";
import CardBlockComponent from "./card-block";

export interface CardListBlockComponentProps {
  block: CardListBlock;
}

export default function CardListBlockComponent({block}: CardListBlockComponentProps) {
  const cards = block.cardListCollection?.items || [];

  return (
    <section
      className="w-full py-16 bg-background"
      data-testid="card-list-block"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-[90%] max-w-[1000px] mx-auto">
        {cards.length > 0 &&
          cards.map((card) => {
            if (card && card.__typename === "CardBlock") {
              return (
                <CardBlockComponent
                  block={card as CardBlockType}
                  key={card._id || card.sys?.id || `card-${Math.random()}`}
                />
              );
            }
            return null;
          })
        }
      </div>
    </section>
  );
}