import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
	title: string;
	href?: string;
	description: string;
	dates: string;
	tags: readonly string[];
	link?: string;
	image?: string;
	links?: readonly {
		icon: React.ReactNode;
		type: string;
		href: string;
	}[];
	className?: string;
}

export function ProjectCard({ title, href, description, dates, tags, link, image, links, className }: Props) {
	return (
		<Card
			className={
				"flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
			}
		>
			<Link href={href || "#"} className={cn("block cursor-pointer", className)}>
				{image && (
					<Image
						src={image}
						alt={title}
						width={480}
						height={270}
						className="h-60 w-full overflow-hidden object-cover object-top"
					/>
				)}
			</Link>
			<CardHeader className="py-2 px-4">
				<div className="space-y-1">
					<CardTitle className="mt-1 text-lg">{title}</CardTitle>
					<time className="font-sans text-sm">{dates}</time>
					<div className="hidden font-sans text-sm underline print:visible">
						{link?.replace("https://", "").replace("www.", "").replace("/", "")}
					</div>
					<Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
						{description}
					</Markdown>
				</div>
			</CardHeader>
			<CardContent className="mt-auto flex flex-col pb-2 px-4">
				{tags && tags.length > 0 && (
					<div className="mt-2 flex flex-wrap gap-1">
						{tags?.map((tag) => (
							<Badge className="px-1 text-xs" variant="secondary" key={tag}>
								{tag}
							</Badge>
						))}
					</div>
				)}
			</CardContent>
			<CardFooter className="px-4 pb-4">
				{links && links.length > 0 && (
					<div className="w-full grid grid-cols-2 gap-3 items-center">
						{links?.map((link, idx) => (
							<Link href={link?.href} key={idx} target="_blank">
								<Badge key={idx} className="flex gap-2 p-2 text-xs">
									{link.icon}
									{link.type}
								</Badge>
							</Link>
						))}
					</div>
				)}
			</CardFooter>
		</Card>
	);
}
