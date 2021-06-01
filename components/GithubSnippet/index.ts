import dynamic from "next/dynamic";

const GithubSnippet = dynamic(() => import("./GithubSnippet"), { ssr: false });

export default GithubSnippet;
