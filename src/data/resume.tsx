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
	work: [
		{
			company: "Cornerstone International Community College of Canada",
			href: "https://ciccc.ca",
			badges: [],
			location: "Vancouver, BC. Canada",
			title: "Web Development Instructor",
			logoUrl: "https://ciccc.ca/wp-content/themes/cornerstone-template/assets/images/logo.svg",
			start: "Aug 2023",
			end: "Present",
			description: [
				"Delivering interactive and comprehensive lectures on Web Development by covering core programming principles contributing to career development of over 40 students.",
				"Teaching crucial Full Stack Development skills (OOP, Big O Notations, DBMS, Node.js, React.js/Next.js) by constantly updating the course materials with latest updates empowering students with latest knowledge base.",
			],
		},
		{
			company: "AiDANT Intelligent Technology Inc.",
			href: "https://aidant.ai",
			badges: [],
			location: "Vancouver, BC. Canada",
			title: "Software Engineer",
			logoUrl:
				"https://yt3.googleusercontent.com/JBUbqyB5lzz2Qpf1VBDGez-5nYUEzdmFCWLOPlNa2923NoxGHJOuxny4AT7z4y2wfPOwWnY5JcM=s160-c-k-c0x00ffffff-no-rj",
			start: "Aug 2021",
			end: "Mar 2023",
			description: [
				"Optimized the server by 78% by downsizing the payload sent for each push notification for a Flutter App resulting in faster speed from 32 to 7 seconds on average.",
				"Enhanced user engagement by 40% by designing a user-friendly web application by using React.js, Bootstrap and Apache Web Server.",
				"Reduced post-release defects and bugs by adhering to code review sessions and following best practices for development and documentation resulting in a 60% impact.",
			],
		},
	],
	education: [
		{
			school: "Douglas College",
			href: "https://www.douglascollege.ca/",
			degree: "Post Bacc Diploma in Computing and Information Systems",
			logoUrl: "https://www.douglascollege.ca/themes/douglas/img/douglas-logo-reversed.svg",
			start: "2019",
			end: "2021",
		},
		{
			school: "University of Mumbai",
			href: "https://www.douglascollege.ca/",
			degree: "Bachelor's in Science with Information Technology",
			logoUrl: "https://www.douglascollege.ca/themes/douglas/img/douglas-logo-reversed.svg",
			start: "2015",
			end: "2018",
		},
	],
	skills: [
		{ id: "1", name: "React", icon: Icons.react },
		{ id: "2", name: "Next", icon: Icons.nextjs },
		{ id: "3", name: "Astro", icon: Icons.astro },
		{ id: "4", name: "TypeScript", icon: Icons.typescript },
		{ id: "5", name: "Zod", icon: Icons.zod },
		{ id: "6", name: "Node.js", icon: Icons.nodejs },
		{ id: "7", name: "Express.js", icon: Icons.express },
		{ id: "8", name: "Hono.js", icon: Icons.hono },
		{ id: "9", name: "Dart", icon: Icons.dart },
		{ id: "10", name: "Python", icon: Icons.python },
		{ id: "11", name: "Flask", icon: Icons.flask },
		{ id: "12", name: "Postgres", icon: Icons.postgres },
		{ id: "13", name: "MongoDB", icon: Icons.mongodb },
		{ id: "14", name: "Supabase", icon: Icons.supabase },
		{ id: "15", name: "Docker", icon: Icons.docker },
		{ id: "16", name: "AWS Lambda", icon: Icons.awsLambda },
		{ id: "17", name: "GitHub", icon: Icons.github },
	],
} as const;
