import styles from './Sidebar.module.css';

const navItems = [
	{ label: 'Home', href: '#home' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Case Studies', href: '#case-studies' },
	{ label: 'Contact', href: '#contact' },
];

export default function Sidebar({ active = 'Home' }) {
	return (
		<aside className={styles.sidebar}>
			<a href="/" className={`${styles.brand} text-menu-item`}>
				Chachu
			</a>
			<nav className={styles.nav}>
				<ul>
					{navItems.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className={`${styles.navLink} text-menu-item ${
									item.label === active ? styles.active : ''
								}`}
							>
								{item.label === active && (
									<span className={styles.navArrow} aria-hidden="true">
										▶
									</span>
								)}
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
}