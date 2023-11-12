import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Link from '@docusaurus/Link';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary transparent-back', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline} 💻 </p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
  <div>
    <div id="homepage-top" className={clsx('custom-back')}>
      <Layout
        title={`Hello, I'm Nuno!`}
        description="This is my personal website. Welcome!">
        <HomepageHeader />
        <main>
          <HomepageFeatures />
          <Link
            className="button margin-top-set margin-bottom-set div-center-bottom-screen-fixed"
              to="#hi-there">
                <img src="img/arrows-down-48.png" className="img-top-static" height="30" width="50"/>
                <img src="img/arrows-down-noback.gif" className="img-top" height="30" width="50"/>
          </Link>
        </main>
      </Layout>
    </div>

    <div id="hi-there" className="div-centered-no-overlap">
      <div className={clsx('col--4') + " margin-top-set text-align-center"}>
        <h1 className="hero__title title-centered">Hi there!</h1>
        <div className="text-hi-there">
          <p>👋 I'm Nuno and I'm happy to have you here!</p>
          <p>I grew up in a small Portuguese valley 🌄 Currently I live in Porto 🇵🇹</p>
          <p>I'm a Biomedical Engineer 🧬 turned Software Engineer 💻 and I'm working remotely for LetsGetChecked, an Irish company 🇮🇪</p>
          <p>Oh, and this is the cutest cat ever, Aurora!</p>
        </div>
        <div className="aurora-sleep-hi-there">
          <img src="img/aurora-sleep-noback.png" className="aurora-sleep-img" />
        </div>
        <div className="margin-top-set div-center-bottom-screen-fixed-no-overload">
          <Link
            className="button"
            to="#homepage-top">
              <img src="img/arrows-up-48.png" className="img-top-static" height="30" width="50"/>
              <img src="img/arrows-up-noback.gif" className="img-top" height="30" width="50"/>
          </Link>
          <Link
            className="button"
            to="#work-and-studies">
              <img src="img/arrows-down-48.png" className="img-top-static" height="30" width="50"/>
              <img src="img/arrows-down-noback.gif" className="img-top" height="30" width="50"/>
          </Link>
        </div>
      </div>
    </div>

    <div id="work-and-studies" className="div-centered-no-overlap margin-top-set">
      <div className={clsx('col--4') + " margin-top-set"}>
        <h1 className="hero__title title-centered">Work & studies</h1>
        <VerticalTimeline lineColor={ '#4885A7' }>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0,0,0,0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            date="Aug 2021 - present"
            iconClassName="cv-timeline-work-item"
          >
            <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">LetsGetChecked | Remote</h4>
            <p>Web applications in the cloud to order diagnostic kits, share medical results, manage healthcare appointments and others</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0,0,0,0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            date="Sep 2020 - Mar 2021"
            iconClassName="cv-timeline-study-item"
          >
            <h3 className="vertical-timeline-element-title">Postgraduate degree in Data Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Atlântica University | Rumos IT Training & Consulting Services</h4>
            <p>Focus on Machine Learning, Data Analysis, Processing and Collection, Statistics, Management of Projects and Teams</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0,0,0,0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            date="Jun 2020 - Jul 2021"
            iconClassName="cv-timeline-work-item"
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">CEIIA - Centre of Engineering and Product Development | Porto, Portugal</h4>
            <p>Web data products in the cloud, for mobility (vessel location and car sharing) and healthcare (mechanical ventilator)</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0,0,0,0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            date="Jan 2020 - May 2020"
            iconClassName="cv-timeline-work-item"
          >
            <h3 className="vertical-timeline-element-title">Junior Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Farfetch - FF ID, Architecture | Porto, Portugal</h4>
            <p>Features for the Farfetch Authentication and Authorization mechanisms (Identity Server and others)</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0,0,0,0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            date="Oct 2018 - Dec 2019"
            iconClassName="cv-timeline-study-item"
          >
            <h3 className="vertical-timeline-element-title">English Language for Business course</h3>
            <h4 className="vertical-timeline-element-subtitle">ebankIT Omnichannel Innovation | 30 + 30 hours course</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0,0,0,0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            date="Mar 2018 - Dec 2019"
            iconClassName="cv-timeline-work-item"
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">ebankIT Omnichannel Innovation | Porto, Portugal</h4>
            <p>Core back-end services and full-stack features for ebankIT omnichannel web banking suite</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0,0,0,0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            date="Jul 2017"
            iconClassName="cv-timeline-study-item"
          >
            <h3 className="vertical-timeline-element-title">Exam 70-532: Developing Microsoft Azure Solutions</h3>
            <h4 className="vertical-timeline-element-subtitle">Microsoft Certification (Microsoft Certified Professional program)</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0,0,0,0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            date="Jul 2017"
            iconClassName="cv-timeline-study-item"
          >
            <h3 className="vertical-timeline-element-title">Sequence Developers Course</h3>
            <h4 className="vertical-timeline-element-subtitle">PNMsoft | 5 day course in Watford, UK</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0,0,0,0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            date="Jan 2017 - Feb 2018"
            iconClassName="cv-timeline-work-item"
          >
            <h3 className="vertical-timeline-element-title">IT Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">Leadership Business Consulting | Lisbon, Portugal</h4>
            <p>Full-stack web projects for the telecommunications, real estate and energy sectors</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0,0,0,0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            date="Feb 2016 - Feb 2017"
            iconClassName="cv-timeline-work-item"
          >
            <h3 className="vertical-timeline-element-title">MSc Thesis Internship</h3>
            <h4 className="vertical-timeline-element-subtitle">Centre for Informatics and Systems of the University of Coimbra | Coimbra, Portugal</h4>
            <p>Development of an algorithmic software to predict neurally mediated syncope based on PPG signals, with published scientific papers</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0,0,0,0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            date="Oct 2015 - Feb 2016"
            iconClassName="cv-timeline-work-item"
          >
            <h3 className="vertical-timeline-element-title">Volunteering Internship</h3>
            <h4 className="vertical-timeline-element-subtitle">Centre for Informatics and Systems of the University of Coimbra | Coimbra, Portugal</h4>
            <p>Study concerning the statistical comparison between HRV and PRV features with different health conditions, with a published scientific paper</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0,0,0,0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            date="Sep 2015"
            iconClassName="cv-timeline-study-item"
          >
            <h3 className="vertical-timeline-element-title">Machine Learning, by Andrew Ng</h3>
            <h4 className="vertical-timeline-element-subtitle">Stanford University | Coursera, Inc. | 11-week online course</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0,0,0,0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            date="Jul 2015 - Sep 2015"
            iconClassName="cv-timeline-work-item"
          >
            <h3 className="vertical-timeline-element-title">Summer Internship</h3>
            <h4 className="vertical-timeline-element-subtitle">Wizdee - Natural Language Business Intelligence | Coimbra, Portugal</h4>
            <p>Operation of machine learning and data analysis algorithms in the domains of customer relationship analysis and econometrics</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0,0,0,0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            date="Sep 2011 - Feb 2017"
            iconClassName="cv-timeline-study-item"
          >
            <h3 className="vertical-timeline-element-title">Biomedical Engineering, Integrated MSc</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Coimbra</h4>
            <p>MSc with specialization in Bioinformatics and Clinical Informatics. Main areas: Software Development, Data Science, Machine Learning, Signal Processing and Simulation</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0,0,0,0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            date="2005 - 2011"
            iconClassName="cv-timeline-study-item"
          >
            <h3 className="vertical-timeline-element-title">English language certificates</h3>
            <h4 className="vertical-timeline-element-subtitle">Cambridge English Language Assessment, University of Cambridge</h4>
            <p>Certificate of Advanced English (CAE), First Certificate in English (FCE), Preliminary English Test (PET)</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <div className="margin-top-set div-center-bottom-screen-fixed-no-overload">
          <Link
            className="button"
            to="#hi-there">
              <img src="img/arrows-up-48.png" className="img-top-static" height="30" width="50"/>
              <img src="img/arrows-up-noback.gif" className="img-top" height="30" width="50"/>
          </Link>
          <Link
            className="button"
            to="#external-links">
              <img src="img/arrows-down-48.png" className="img-top-static" height="30" width="50"/>
              <img src="img/arrows-down-noback.gif" className="img-top" height="30" width="50"/>
          </Link>
        </div>
      </div>
    </div>

    <div id="external-links" className="div-centered-no-overlap margin-top-set">
      <div className={clsx('col--4') + " margin-top-set"}>
        <h1 className="hero__title title-centered">External links</h1>
        <section className={styles.features}>
          <div className="container margin-top-set">
            <div className="row .custom-big-clear">
              <div className="div-centered">
                <div className={clsx('col--4')}>
                  <div className={styles.buttons + " display-grid"}>
                    <Link
                      className="button button--secondary button--lg margin-small"
                      to="https://linkedin.com/in/nunohpinheiro">
                      LinkedIn&nbsp;<img src="img/linkedin-icon-color.png" height="25" width="25"/>
                    </Link>
                    <Link
                      className="button button--secondary button--lg margin-small"
                      to="https://github.com/nunohpinheiro">
                      GitHub&nbsp;<img src="img/github-icon-color.png" height="25" width="25"/>
                    </Link>
                    <Link
                      className="button button--secondary button--lg margin-small"
                      to="https://stackoverflow.com/users/5220455/nunohpinheiro">
                      Stack Overflow&nbsp;<img src="img/stack-overflow-icon-color.png" height="25" width="25"/>
                    </Link>
                    <Link
                      className="button button--secondary button--lg margin-small"
                      to="https://nuget.org/profiles/nunohpinheiro">
                      NuGet Gallery&nbsp;<img src="img/nuget-icon-color.png" height="25" width="25"/>
                    </Link>
                    <Link
                      className="button button--secondary button--lg margin-small"
                      to="https://scholar.google.com/citations?user=oUjyq6oAAAAJ">
                      Google Scholar&nbsp;<img src="img/google-scholar-icon-color.png" height="25" width="25"/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Link
          className="button margin-top-set div-centered"
            to="#work-and-studies">
              <img src="img/arrows-up-48.png" className="img-top-static" height="30" width="50"/>
              <img src="img/arrows-up-noback.gif" className="img-top" height="30" width="50"/>
        </Link>
      </div>
    </div>
  </div>
  );
}
