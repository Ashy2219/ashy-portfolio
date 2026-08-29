import styles from './Section.module.css';

export default function Section({ id, title, children }) {
	return (
		<section id={id} className={styles.section}>
			<h2 className={`${styles.title} text-display-xl`}>{title}</h2>
			{children}
		</section>
	);
}