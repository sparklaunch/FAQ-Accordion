import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans();

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ko" className={workSans.className}>
			<body>{children}</body>
		</html>
	);
}
