/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    sassOptions: {
        additionalData: `@import "styles/imports.scss";`,
    },
    images: {
        domains: ["raw.githubusercontent.com"],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
};
