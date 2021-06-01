import React, {
    FunctionComponent,
    MouseEventHandler,
    useEffect,
    useState,
} from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { Link, Text, Spinner, useColorMode } from "@chakra-ui/react";
import getGithubFileDetailsByUrl from "./lib/getGithubFileDetailsByUrl";
import copyTextToClipboard from "./lib/copyTextToClipboard";

import js from "react-syntax-highlighter/src/languages/hljs/javascript";
import ts from "react-syntax-highlighter/src/languages/hljs/typescript";
import yaml from "react-syntax-highlighter/src/languages/hljs/yaml";
import css from "react-syntax-highlighter/src/languages/hljs/css";
import scss from "react-syntax-highlighter/src/languages/hljs/scss";
import bash from "react-syntax-highlighter/src/languages/hljs/bash";
import xml from "react-syntax-highlighter/src/languages/hljs/xml";

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("typescript", ts);
SyntaxHighlighter.registerLanguage("yaml", yaml);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("xml", xml);
SyntaxHighlighter.registerLanguage("sh", bash);

const getLanguageByFileExtension = (extension: string) =>
    ({
        js: "javascript",
        jsx: "javascript",
        ts: "typescript",
        tsx: "typescript",
        yml: "yaml",
    }[extension] || extension);

import styles from "./GithubSnippet.module.scss";

interface Props {
    src: string;
    showLineNumbers?: boolean;
    showFileMeta?: boolean;
}

const GithubSnippet: FunctionComponent<Props> = ({
    src,
    showLineNumbers = true,
    showFileMeta = true,
}) => {
    const [canCopy, setCanCopy] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>(null);
    const [fileContents, setFileContents] = useState<string>(null);
    const { colorMode } = useColorMode();
    const { fileExtension, filename, rawFileURL } =
        getGithubFileDetailsByUrl(src);

    useEffect(() => {
        setCanCopy(Boolean(window.navigator?.clipboard));
    }, []);

    useEffect(() => {
        setIsLoading(true);
        setFileContents(undefined);
        setError(null);
        fetch(rawFileURL)
            .then((response) => {
                setIsLoading(false);
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error(
                        `${response.status} ${response.statusText}`
                    );
                }
            })
            .then(setFileContents)
            .catch((error: Error) => setError(error.message));
    }, [rawFileURL]);

    const copyToClipboard: MouseEventHandler = (event) => {
        event.preventDefault();
        copyTextToClipboard(fileContents);
    };

    const themeClassName =
        colorMode === "light" ? styles.github : styles.githubDark;

    if (!fileContents) {
        return null;
    }

    return (
        <div className={[styles.wrapper, themeClassName].join(' ')}>
            {isLoading && <Spinner className={styles.spinner} />}

            {error && <Text color="red.300">{error}</Text>}

            {fileContents && (
                <SyntaxHighlighter
                    showLineNumbers={showLineNumbers}
                    useInlineStyles={false}
                    language={getLanguageByFileExtension(fileExtension)}
                >
                    {fileContents}
                </SyntaxHighlighter>
            )}

            {showFileMeta && (
                <div className={styles.meta}>
                    <Link className={styles.action} target="__blank" href={src}>
                        {filename}
                    </Link>
                    <div>
                        {canCopy && fileContents && (
                            <Link
                                className={styles.action}
                                onClick={copyToClipboard}
                            >
                                Copy
                            </Link>
                        )}
                        <Link
                            className={styles.action}
                            target="__blank"
                            href={src}
                        >
                            View raw
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GithubSnippet;
