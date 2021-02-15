import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "./theme";
import { ColorModeScript } from "@chakra-ui/react";

class MyDocument extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument