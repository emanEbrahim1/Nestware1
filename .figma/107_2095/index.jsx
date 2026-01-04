import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.group2}>
      <img src="../image/mjz48xls-ksp5pr7.svg" className={styles.frame2} />
      <div className={styles.container}>
        <div className={styles.frame4}>
          <p className={styles.about}>About</p>
          <p className={styles.about}>Services</p>
          <p className={styles.about}>Vision</p>
          <p className={styles.about}>Process</p>
          <p className={styles.about}>Testimonials</p>
        </div>
        <div className={styles.frame5}>
          <div className={styles.rectangle1}>
            <p className={styles.getInTouch}>Get in Touch</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
