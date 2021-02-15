import React, {FunctionComponent} from 'react';
import {useColorMode} from "@chakra-ui/react";

interface Props {
    src: string;
    showBorder?: boolean;
    showLineNumbers?: boolean;
    showFileMeta?: boolean;
}

const GithubSnippet: FunctionComponent<Props> = ({ src, showBorder = true, showLineNumbers = true, showFileMeta = true}) => {
    const { colorMode } = useColorMode();
    const scriptUrl = new URL('https://emgithub.com/embed.js');

    scriptUrl.searchParams.append('target', src);
    //scriptUrl.searchParams.append('style', colorMode === 'light' ? 'github' : 'darcula');
    scriptUrl.searchParams.append('style', 'github');
    scriptUrl.searchParams.append('showBorder', showBorder ? 'on' : 'off');
    scriptUrl.searchParams.append('showLineNumbers', showLineNumbers ? 'on' : 'off');
    scriptUrl.searchParams.append('showFileMeta', showFileMeta ? 'on' : 'off');

    return (
        <div dangerouslySetInnerHTML={{__html: `<div><script src="${scriptUrl.toString()}"></script></div></>`}}></div>
    );
}

export default GithubSnippet;
