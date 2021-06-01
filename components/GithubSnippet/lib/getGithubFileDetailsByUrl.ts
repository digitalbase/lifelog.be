// extracted from https://emgithub.com/embed.js

interface GithubDetails {
    branch: string;
    filename: string;
    fileExtension: string;
    repository: string;
    rawFileURL: string;
    user: string;
}

const getGithubFileDetailsByUrl = (fileUrl: string): GithubDetails => {
    const url = new URL(fileUrl);
    const pathSplit = url.pathname.split("/");
    const user = pathSplit[1];
    const repository = pathSplit[2];
    const branch = pathSplit[4];
    const file = pathSplit.slice(5, pathSplit.length).join("/");
    const filename = pathSplit.slice(-1)[0];
    const fileExtension =
        file.split(".").length > 1
            ? file.split(".")[file.split(".").length - 1]
            : "txt";
    const rawFileURL = `https://raw.githubusercontent.com/${user}/${repository}/${branch}/${file}`;
    return { branch, filename, fileExtension, repository, rawFileURL, user };
};

export default getGithubFileDetailsByUrl;
