import CardBlockComponent from "@/components/blocks/card-item-block";
import { CardListBlock } from "@repo/content";


export interface CardListBlockComponentProps {
  block: CardListBlock;
}

export default function CardListBlockComponent({block}: CardListBlockComponentProps) {
  const cards = block.items;

  return (
    <section
      className="w-full py-16 bg-background"
      data-testid="card-list-block"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mx-auto ">
        {
          cards.map((card) => {
            return (
              <CardBlockComponent
                block={card}
                key={card.id}
              />
            );
          })
        }
      </div>
    </section>
  );
}