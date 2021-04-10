import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/members">
        <a>Members</a>
      </Link>
    </div>
  );
};
