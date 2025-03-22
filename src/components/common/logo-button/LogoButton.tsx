import Link from "next/link";
import Image from "next/image";
import SmallLogo from "../../../../public/logo/logo_small.svg";
import LargeLogo from "../../../../public/logo/logo_large.svg";

export default function LogoButton({
  variant,
  isMobile,
}: {
  variant: "white" | "purple";
  isMobile: boolean;
}) {
  const isHome = variant === "white";

  return (
    <Link href={isHome ? "/" : "/mydashboard"}>
      <Image
        src={isMobile ? SmallLogo : LargeLogo}
        width={isMobile ? 24 : 110}
        height={isMobile ? 30 : 34}
        className={isHome ? "invert brightness-0" : ""}
        alt=""
      />
    </Link>
  );
}
