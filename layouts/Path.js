import nextConfig from "@/next.config.mjs";

const Path = (realPath) => {
    const bp = () => {
        return "/" + nextConfig.basePath ? nextConfig.basePath + "/" : "" 
    };
    // alert(bp()+ "+ " + realPath);
    return (
      bp() + realPath
    );
};
export default Path;