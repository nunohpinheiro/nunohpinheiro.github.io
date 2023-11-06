import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row .custom-big-clear">
          <div className="div-centered">
            <div className={clsx('col--4')}>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg margin-small"
                  to="#hi-there">
                  Get to know me&nbsp;
                  	<img src="img/person-48.png" className="img-top-static" height="30" width="30"/>
                    <img src="img/person-noback.gif" className="img-top" height="30" width="30"/>
                </Link>
                <Link
                  className="button button--secondary button--lg margin-small"
                  to="#work-and-studies">
                  Work & studies&nbsp;
                    <img src="img/library-40.png" className="img-top-static" height="30" width="30"/>
                    <img src="img/library-noback.gif" className="img-top" height="30" width="30"/>
                </Link>
                <Link
                  className="button button--secondary button--lg margin-small"
                  to="#external-links">
                  Check the links&nbsp;
                    <img src="img/links-48.png" className="img-top-static" height="30" width="30"/>
                    <img src="img/links-noback.gif" className="img-top" height="30" width="30"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
