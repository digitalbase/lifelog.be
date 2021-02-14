/*
    Extracts path params basing on pattern

    Example 1
    Path: '/news/test-news', pattern: '/news/[slug]'
    Result: { slug: 'test-news' }

    Example 2
    Path: '/academy/category/sub-category', pattern: '/academy/[...path]'
    Result: { path: ['category', 'sub-category'] }
*/

const parseNextPathParams = (path: string, pagePattern: string) => {
    const pathParts = path.split('/').filter(Boolean);
    const patternParts = pagePattern.split('/').filter(Boolean);

    if (
        pathParts.length !== patternParts.length &&
        !patternParts[patternParts.length - 1].includes('...')
    ) {
        throw new Error(`Path "${path}" doesn\'t conform to pattern ${pagePattern}`);
    }

    return patternParts.reduce((result, patternPart, index) => {
        const { paramName, dots } =
            patternPart.match(/\[(?<dots>\.{3})?(?<paramName>\w+)\]/)?.groups || {};
        const spread = dots === '...';

        if ((!spread && !pathParts[index]) || (!paramName && patternPart !== pathParts[index])) {
            throw new Error(
                `Path "${path}" doesn\'t conform to pattern ${pagePattern}. ${patternPart} doesn't fit`,
            );
        }

        if (paramName) {
            result[paramName] = spread ? pathParts.slice(index) : pathParts[index];
        }

        return result;
    }, {} as Record<string, string | string[]>);
};

export default parseNextPathParams;
