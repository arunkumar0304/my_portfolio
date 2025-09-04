"use client";

import dynamic from "next/dynamic";
import { defaultSEO } from "@/seo.config";

const DefaultSeo = dynamic(() => import("next-seo").then(m => m.DefaultSeo), {
  ssr: false,
});

export function AppDefaultSeo() {
  return <DefaultSeo {...defaultSEO} />;
}


