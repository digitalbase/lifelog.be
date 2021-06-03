import dynamic from "next/dynamic";

const Box = dynamic(() => import("./Box"), { ssr: true });

export default Box;
