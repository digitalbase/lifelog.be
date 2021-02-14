import prezlySDK from '@prezly/sdk';
import Category from '@prezly/sdk/dist/types/Category';

export class Prezly {
    private readonly sdk: prezlySDK;

    public constructor(accessToken: string) {
        this.sdk = new prezlySDK({ accessToken });
    }

    public async getNewsroom(newsRoomId: number) {
        return this.sdk.newsrooms.get(newsRoomId);
    }

    public async getCategories(newsroomId: number): Promise<Category[]> {
        const data = await this.sdk.newsroomCategories.list(newsroomId);

        return Array.isArray(data) ? data : Object.values(data);
    }

    public async getStory(id: number) {
        return this.sdk.stories.get(id);
    }

    public async getStories(options) {
        return this.sdk.stories.list(options);
    }

    public async searchStories(options) {
        return this.sdk.stories.search(options);
    }
}