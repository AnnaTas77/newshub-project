import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent } from "react";

const Logo: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      // If on the home page, prevent the default link behavior
      event.preventDefault();
      // Scroll to the top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link href="/" onClick={handleLogoClick}>
      <Image
        src="/newshub_logo_best.png"
        width={100}
        height={100}
        alt="logo"
      ></Image>
    </Link>
  );
};

export default Logo;
