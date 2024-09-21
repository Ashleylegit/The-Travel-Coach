import Link from 'next/link';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/DestionationGuide">
              <a>Destination Guide</a>
            </Link>
          </li>
          <li>
            <Link href="/TravelPlanning">
              <a>Travel Planning</a>
            </Link>
          </li>
          <li>
            <Link href="/CommunityForum">
              <a>Community Forum</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
