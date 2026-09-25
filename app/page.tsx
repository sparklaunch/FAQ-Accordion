import Image from "next/image";
import desktopBackground from "./assets/images/desktop-background.svg";
import mobileBackground from "./assets/images/mobile-background.svg";
import star from "./assets/images/star.svg";
import FAQ from "./components/FAQ";
import data from "./data.json";
import styles from "./Home.module.css";

export default function Home() {
	return (
		<>
			<Image
				src={desktopBackground}
				alt=""
				className={styles.desktopBackground}
			/>
			<Image
				src={mobileBackground}
				alt=""
				className={styles.mobileBackground}
			/>
			<main className={styles.main}>
				<section className={styles.card}>
					<header className={styles.header}>
						<Image src={star} alt="" />
						<h1 className={styles.headerTitle}>FAQs</h1>
					</header>
					<ul className={styles.faqList}>
						{data.map((faq) => (
							<li key={faq.id}>
								<FAQ faq={faq} />
							</li>
						))}
					</ul>
				</section>
			</main>
		</>
	);
}
