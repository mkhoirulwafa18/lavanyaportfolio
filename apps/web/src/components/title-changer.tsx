"use client";

import useDocumentTitle from "@/hooks/useDocumentTitle";

export default function TitleChanger() {
    useDocumentTitle({
        defaultTitle: "Lavanya Yasmeen | Visual Design Expert",
        onBlurTitle: "Wait, come back 😔",
    });

    // This component doesn't render anything
    return null;
}
