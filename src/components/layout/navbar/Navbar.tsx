import LogoButton from "@/components/common/logo-button/LogoButton";

type NavType = "home" | "user" | "dashboard";

export default function Navbar({ variant }: { variant: NavType }) {
  return (
    <div>
      <div>
        <LogoButton variant="white" />
      </div>
      <div>R</div>
    </div>
  );
}
