import { Icons } from "@/components/shared/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
	description:
		"Developer during the Days, Debugger in the Nights. I love building things and helping people. Shamelessly active on Twitter.",
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
	summary:
		"At the beginning of 2023, I was laid off from a startup as a Software Engineer (Frontend Focussed). Since then I have been working as a Web Development Instructor teaching 40+ aspiring students in Canada. In the past, I pursued a Bachelor's degree in Computer Science with Information Technology as my major. I generally end up creating more bugs for myself right when I jump to new tools and technologies JUST FOR FUN. I do love creating side projects during the weekends.",
} as const;
