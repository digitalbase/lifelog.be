import {FunctionComponent} from "react";
import {format} from 'date-fns';

interface Props {
    stories: { };
}

function publishedDate(published_at) {
    return format(
        new Date(published_at as string),
        'dd/MM/yyyy',
    );
}

function getLink(slug) {
    return `/${slug}`;
}

const OtherArticlesInSerie: FunctionComponent<Props> = ({ stories }) => {
    // @ts-ignore
    const storyCollection = stories.stories;

    return (
        <div className="container mx-auto max-w-2xl">
            <h3 className="text-2xl pb-6">Other articles in the series</h3>
            <ul className="">
                {storyCollection.map((story, uuid) => (
                    <li key={story.uuid}>
                        <div className="pb-2">
                            <div className="flex ">
                                <div className="mt-3 text-sm text-gray-500 min-w-20 w-20">
                                    <a href={getLink(story.slug)}>
                                        <time dateTime={story.published_at}>{publishedDate(story.published_at)}</time>
                                    </a>
                                </div>
                                <div className="flex-1 pl-3 text-sm whitespace-nowrap text-gray-500 flex-grow pt-2">
                                    <a href={getLink(story.slug)} className="font-medium text-gray-900 text-lg">
                                        {story.title}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default OtherArticlesInSerie;
