"use client";
import { useEffect } from "react";

const WORKER_URL = "https://views-api.ketia.workers.dev";

export function ViewTracker({ slug }: { slug: string }) {
	useEffect(() => {
		fetch(`${WORKER_URL}?slug=${slug}`, { method: "POST" }).catch(() => {});
	}, [slug]);

	return null;
}
