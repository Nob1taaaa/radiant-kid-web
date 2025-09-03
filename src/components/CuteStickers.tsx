type Sticker = { emoji: string; top?: string; bottom?: string; left?: string; right?: string; delay?: string };

interface CuteStickersProps {
  stickers: Sticker[];
}

const CuteStickers = ({ stickers }: CuteStickersProps) => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-visible select-none">
      {stickers.map((s, i) => (
        <span
          key={i}
          className="absolute text-2xl md:text-3xl animate-bounce-gentle"
          style={{
            top: s.top,
            bottom: s.bottom,
            left: s.left,
            right: s.right,
            animationDelay: s.delay,
            filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.12))',
          }}
        >
          {s.emoji}
        </span>
      ))}
    </div>
  );
};

export default CuteStickers;
