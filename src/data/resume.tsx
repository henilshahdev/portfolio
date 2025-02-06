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
		"At the beginning of 2023, I transitioned from my role as a Software Engineer (Frontend Focused) at a startup, where I had the opportunity to work on innovative projects. Since then, I've embraced a new challenge as a Web Development Instructor, teaching and mentoring over 40 aspiring students across Canada. My background includes a Bachelor's degree in Computer Science with a major in Information Technology. I am passionate about exploring new tools and technologies, often diving in just for fun—even if it means encountering a few unexpected bugs along the way. During weekends, I love working on side projects that keep my skills sharp and my creativity flowing.",
	work: [
		{
			company: "Cornerstone International Community College of Canada",
			href: "https://ciccc.ca",
			badges: [],
			location: "Vancouver, BC. Canada",
			title: "Web Development Instructor",
			logoUrl: "/ciccc_logo.png",
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
			logoUrl: "/aidant_logo.png",
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
			logoUrl: "/douglas_logo.png",
			start: "2019",
			end: "2021",
		},
		{
			school: "University of Mumbai",
			href: "https://www.douglascollege.ca/",
			degree: "Bachelor's in Science with Information Technology",
			logoUrl: "/mu_logo.png",
			start: "2015",
			end: "2018",
		},
	],
	skills: [
		{ id: "1", name: "TypeScript", icon: Icons.typescript },
		{ id: "2", name: "JavaScript", icon: Icons.javascript },
		{ id: "3", name: "Dart", icon: Icons.dart },
		{ id: "4", name: "Python", icon: Icons.python },
		{ id: "5", name: "Flask", icon: Icons.flask },
		{ id: "6", name: "Ruby", icon: Icons.ruby },
		{ id: "7", name: "React.js", icon: Icons.react },
		{ id: "8", name: "Next.js", icon: Icons.nextjs },
		{ id: "9", name: "Astro", icon: Icons.astro },
		{ id: "10", name: "Node.js", icon: Icons.nodejs },
		{ id: "11", name: "Zod", icon: Icons.zod },
		{ id: "12", name: "Express.js", icon: Icons.express },
		{ id: "13", name: "Hono.js", icon: Icons.hono },
		{ id: "14", name: "GraphQL", icon: Icons.graphql },
		{ id: "15", name: "Rails", icon: Icons.rails },
		{ id: "16", name: "Jest", icon: Icons.jest },
		{ id: "17", name: "Postgres", icon: Icons.postgres },
		{ id: "18", name: "MongoDB", icon: Icons.mongodb },
		{ id: "19", name: "Supabase", icon: Icons.supabase },
		{ id: "20", name: "Firebase", icon: Icons.firebase },
		{ id: "21", name: "GitHub", icon: Icons.github },
		{ id: "22", name: "Docker", icon: Icons.docker },
		{ id: "23", name: "Webpack", icon: Icons.webpack },
		{ id: "24", name: "AWS Lambda", icon: Icons.awsLambda },
	],
	projects: [
		{
			title: "Wigggle",
			href: "https://wigggle.vercel.app/",
			dates: "Oct 2024 - Present",
			active: true,
			description: "Open Source Widget Library for the Web.",
			technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
			links: [
				{
					type: "Website",
					href: "https://wigggle.vercel.app/",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/henilshahdev/wigggle",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/wigggle.png",
		},
		{
			title: "My Portfolio",
			href: "https://henilshah.vercel.app/",
			dates: "Jan 2024 - Feb 2024",
			active: true,
			description: "Designed and Developed this portfolio with 💖.",
			technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI", "Magic UI"],
			links: [
				{
					type: "Website",
					href: "https://henilshah.vercel.app/",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/portfolio.png",
		},
		{
			title: "Chitra: Database Diagram Maker",
			href: "https://chitraa.netlify.app",
			dates: "May 2024 - Present",
			active: true,
			description: "An intuitive entity relationship diagram visualizer.",
			technologies: ["React.js", "Typescript", "ReactFlow", "TailwindCSS", "Shadcn UI"],
			links: [
				{
					type: "Website",
					href: "https://chitraa.netlify.app",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/henilshahdev/chitra",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/chitra.png",
		},
		{
			title: "Valorant Champions 2024 Fantasy League",
			href: "https://vct24.vercel.app",
			dates: "July 2023 - Present",
			active: true,
			description: "An online fantasy game for the Esports Tournament of Valorant for the 2024 Season.",
			technologies: ["Next.js", "Typescript", "Drizzle", "PostgreSQL", "TailwindCSS", "Shadcn UI"],
			links: [
				{
					type: "Website",
					href: "https://vct24.vercel.app",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/valorant.png",
		},
		{
			title: "Indian Premier League 2024 Fantasy League",
			href: "https://iplfl24.vercel.app/",
			dates: "Feb 2023 - Mar 2023",
			active: true,
			description:
				"An online fantasy game for the game of Cricket especially the Indian Premier League for the 2024 Season.",
			technologies: ["Next.js", "Typescript", "Mongoose", "MongoDB", "TailwindCSS", "Shadcn UI"],
			links: [
				{
					type: "Website",
					href: "https://iplfl24.vercel.app/",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/ipl.png",
		},
	],
} as const;
