import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row .custom-big-clear">
          <div class="div-centered">
            <div className={clsx('col--4')}>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to="https://linkedin.com/in/nunohpinheiro">
                  Get to know me&nbsp;
                  	<img src="img/linkedin-48.png" class="img-top-static" height="30" width="30"/>
                    <img src="img/linkedin-noback.gif" class="img-top" height="30" width="30"/>
                </Link>
                &nbsp;&nbsp;&nbsp;
                <Link
                  className="button button--secondary button--lg"
                  to="/hi-there/my-personal-links">
                  Check the links&nbsp;
                    <img src="img/links-48.png" class="img-top-static" height="30" width="30"/>
                    <img src="img/links-noback.gif" class="img-top" height="30" width="30"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
