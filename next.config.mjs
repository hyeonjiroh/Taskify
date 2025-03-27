/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //로컬 이미지 테스트 하기 위해 localhost를 넣었습니다.
    domains: ["sprint-fe-project.s3.ap-northeast-2.amazonaws.com", "localhost"],
  },
};

export default nextConfig;
