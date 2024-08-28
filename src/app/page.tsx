import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Markdown from "react-markdown";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { ResumeCard } from "@/components/shared/resume-card";

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
								className="max-w-[600px] md:text-xl mt-6"
								delay={BLUR_FADE_DELAY}
								text={DATA.description}
							/>
						</div>
						<BlurFade delay={BLUR_FADE_DELAY}>
							<Avatar className="size-36 border">
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
		</main>
	);
};

export default App;
