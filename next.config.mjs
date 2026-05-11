/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		optimizeCss: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "x73yjxo4qx7cwsgw.public.blob.vercel-storage.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
