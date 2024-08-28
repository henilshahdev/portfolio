import { Icons } from "@/components/shared/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		{ href: "/blog", icon: NotebookIcon, label: "Blog" },
	],
	contact: {
		email: "henil.601@gmail.com",
		tel: "++17787510309",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/henilshahdev",
				icon: Icons.github,
				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/henilshahdev/",
				icon: Icons.linkedin,
				navbar: true,
			},
			X: {
				name: "X",
				url: "https://twitter.com/henil106",
				icon: Icons.x,
				navbar: true,
			},
			Email: {
				name: "Send Email",
				url: "mailto:henil.601@gmail.com",
				icon: Icons.email,
				navbar: true,
			},
		},
	},
} as const;
