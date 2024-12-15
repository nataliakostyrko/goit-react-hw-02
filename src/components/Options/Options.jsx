import css from "./Options.module.css";

const Options = ({ updateFeedback, reset, totalFeedback }) => {
  return (
    <div className={css.container}>
      <button onClick={() => updateFeedback("good")} className={css.button}>
        Good
      </button>
      <button onClick={() => updateFeedback("neutral")} className={css.button}>
        Neutral
      </button>
      <button onClick={() => updateFeedback("bad")} className={css.button}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={reset} className={css.button}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;



