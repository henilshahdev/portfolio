import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Markdown from "react-markdown";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { ResumeCard } from "@/components/shared/resume-card";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectCard } from "@/components/shared/project-card";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

const App = () => {
	return (
		<main className="flex flex-col min-h-[100dvh] space-y-10">
			<section id="hero">
				<div className="mx-auto w-full space-y-8">
					<div className="gap-2 flex justify-between">
						<div className="flex-col flex flex-1 space-y-1.5">
							<BlurFadeText
								delay={BLUR_FADE_DELAY}
								className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
								yOffset={8}
								text={`👋 Hi, I'm Henil Shah`}
							/>
							<BlurFadeText
								className="max-w-[350px] sm:max-w-[500px] lg:max-w-[600px] md:text-xl"
								delay={BLUR_FADE_DELAY}
								text={DATA.description}
							/>
						</div>
						<BlurFade delay={BLUR_FADE_DELAY}>
							<Avatar className="size-16 sm:size-24 md:size-28 lg:size-28 xl:size-32 border">
								<AvatarImage alt="Henil Shah" src="https://github.com/henilshahdev.png" />
								<AvatarFallback>HS</AvatarFallback>
							</Avatar>
						</BlurFade>
					</div>
				</div>
			</section>
			<section id="about">
				<BlurFade delay={BLUR_FADE_DELAY * 3}>
					<h2 className="text-xl font-bold">About</h2>
				</BlurFade>
				<BlurFade className="mt-3" delay={BLUR_FADE_DELAY * 4}>
					<Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
						{DATA.summary}
					</Markdown>
				</BlurFade>
			</section>
			<section id="work">
				<div className="flex min-h-0 flex-col gap-y-3">
					<BlurFade delay={BLUR_FADE_DELAY * 5}>
						<h2 className="text-xl font-bold">Work Experience</h2>
					</BlurFade>
					{DATA.work.map((work, id) => (
						<BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
							<ResumeCard
								key={work.company}
								logoUrl={work.logoUrl}
								altText={work.company}
								title={work.title}
								subtitle={work.company}
								href={work.href}
								badges={work.badges}
								period={`${work.start} - ${work.end ?? "Present"}`}
								description={work.description}
							/>
						</BlurFade>
					))}
				</div>
			</section>
			<section id="education">
				<div className="flex min-h-0 flex-col gap-y-3">
					<BlurFade delay={BLUR_FADE_DELAY * 7}>
						<h2 className="text-xl font-bold">Education</h2>
					</BlurFade>
					{DATA.education.map((education, id) => (
						<BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
							<ResumeCard
								key={education.school}
								href={education.href}
								logoUrl={education.logoUrl}
								altText={education.school}
								title={education.school}
								subtitle={education.degree}
								period={`${education.start} - ${education.end}`}
							/>
						</BlurFade>
					))}
				</div>
			</section>
			<section id="skills">
				<div className="flex min-h-0 flex-col gap-y-3">
					<BlurFade delay={BLUR_FADE_DELAY * 9}>
						<h2 className="text-xl font-bold">Skills</h2>
					</BlurFade>
					<div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 items-start">
						{DATA.skills.map((skill) => (
							<BlurFade key={skill.id} delay={BLUR_FADE_DELAY * 10 + parseInt(skill.id) * 0.05}>
								<Card className="w-max mx-auto">
									<CardHeader>
										<CardTitle className="w-max flex flex-col gap-3 text-sm font-normal tracking-wide">
											<skill.icon className="size-8 mx-auto" />
											<span>{skill.name}</span>
										</CardTitle>
									</CardHeader>
								</Card>
							</BlurFade>
						))}
					</div>
				</div>
			</section>
			<section id="projects">
				<div className="space-y-12 w-full py-12">
					<BlurFade delay={BLUR_FADE_DELAY * 11}>
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
									My Projects
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Check out my latest work
								</h2>
								<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									I&apos;ve worked on a variety of projects, from simple websites to complex web
									applications. Here are a few of my favorites.
								</p>
							</div>
						</div>
					</BlurFade>
					<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-5xl mx-auto">
						{DATA.projects.map((project, id) => (
							<BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
								<ProjectCard
									href={project.href}
									key={project.title}
									title={project.title}
									description={project.description}
									dates={project.dates}
									tags={project.technologies}
									image={project.image}
									links={project.links}
								/>
							</BlurFade>
						))}
					</div>
				</div>
			</section>
			<section id="contact">
				<div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
					<BlurFade delay={BLUR_FADE_DELAY * 16}>
						<div className="space-y-3">
							<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
								Contact
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
							<p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Want to chat? Just shoot me a dm{" "}
								<Link href={DATA.contact.social.X.url} className="text-blue-500 hover:underline">
									with a direct question on twitter
								</Link>{" "}
								and I&apos;ll respond whenever I can. I will ignore all soliciting.
							</p>
						</div>
					</BlurFade>
				</div>
			</section>
		</main>
	);
};

export default App;
