import * as React from 'react';
import styles from './Content.scss';

export function Content() {
  return (
      <div className={styles.mainElement}>
        <div className={styles.card}><span>1</span></div>
        <div className={styles.card}><span>2</span></div>
        <div className={styles.card}><span>3</span></div>
      </div>
  );
};