export interface Meta {
    title: string | null;
    description: string | null;
    snippet?: Record<string, any>;
    twitterCardType?: string | null;
    shareImage?: string | Record<string, any>;
    canonicalUrl?: string;
}
