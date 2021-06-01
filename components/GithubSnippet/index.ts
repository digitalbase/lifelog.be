import dynamic from "next/dynamic";

const GithubSnippet = dynamic(() => import("./GithubSnippet"));

export default GithubSnippet;
