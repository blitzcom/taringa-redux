import style from './style.module.css';

import Card from 'src/common/card';
import Paper from 'src/common/card/paper';

function Placeholder() {
  return (
    <Card>
      <Paper>
        <div className={style.card}>
          <div className={style.background} />

          <div className={style.about}>
            <div className={style.thumbnail} />
          </div>
        </div>
      </Paper>
    </Card>
  );
}

export default Placeholder;
