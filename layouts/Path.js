import nextConfig from "@/next.config.mjs";

const Path = (realPath) => {
    const bp = () => {
        // alert(realPath);
        return "/" + nextConfig.basePath? nextConfig.basePath + "/" : ""
    };
    return (
      bp() + realPath
    );
};
export default Path;