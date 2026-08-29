import styles from './Home.module.css';

export default function Home() {
	return (
		<section id="home" className={styles.section}>
			<p className={`text-label-caps ${styles.tagline}`}>Design &amp; Engineering</p>
			<h1 className={`text-display-xl ${styles.heading}`}>
				Hi, I'm Chachu.
				<br />
				I build things for the web.
			</h1>
			<p className={`text-body-lead ${styles.intro}`}>
				A short intro paragraph lives here — a line or two about who you are and what you
				do. Replace this placeholder with your own words once the design is final.
			</p>
		</section>
	);
}