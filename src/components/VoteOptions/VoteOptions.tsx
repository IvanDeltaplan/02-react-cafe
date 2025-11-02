import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes";

// 🔹 Оголошуємо інтерфейс пропсів
export interface VoteOptionsProps {
  onVote: (type: VoteType) => void; // функція для голосування
  onReset: () => void;              // функція для скидання
  canReset: boolean;                // чи показувати кнопку Reset
}

// 🔹 Компонент з типізацією пропсів
export default function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote("good")}>Good</button>
      <button className={css.button} onClick={() => onVote("neutral")}>Neutral</button>
      <button className={css.button} onClick={() => onVote("bad")}>Bad</button>

      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
