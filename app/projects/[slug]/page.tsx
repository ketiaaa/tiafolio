import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import { ViewTracker } from "./view-tracker";
import "./mdx.css";

type Props = {
	params: {
		slug: string;
	};
};

export async function generateStaticParams() {
	return allProjects.map((project) => ({
		slug: project.slug,
	}));
}

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const project = allProjects.find((project) => project.slug === slug);

	if (!project) {
		notFound();
	}

	return (
		<div className="bg-zinc-50 min-h-screen">
			<ViewTracker slug={slug} />
			<Header project={project} />
			<article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
				<Mdx code={project.body.code} />
			</article>
		</div>
	);
}
