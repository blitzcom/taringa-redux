import style from './style.module.css';

function Placeholder() {
  return (
    <div className={style.card}>
      <div className={style.background} />

      <div className={style.about}>
        <div className={style.thumbnail} />
      </div>
    </div>
  );
}

export default Placeholder;
