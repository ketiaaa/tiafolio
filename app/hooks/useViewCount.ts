"use client";
import { useEffect, useState } from "react";

const WORKER_URL = "https://views-api.ketia.workers.dev";

export function useViewCount(slug: string) {
	const [views, setViews] = useState<number | null>(null);

	useEffect(() => {
		// Increment view count
		fetch(`${WORKER_URL}?slug=${slug}`, { method: "POST" })
			.then((res) => res.json())
			.then((data: { views: number }) => setViews(data.views))
			.catch(() => {
				// Fallback: just get current count
				fetch(`${WORKER_URL}?slug=${slug}`)
					.then((res) => res.json())
					.then((data: { views: number }) => setViews(data.views))
					.catch(() => setViews(0));
			});
	}, [slug]);

	return views;
}
