import { useState } from 'react';
import { GitFork } from 'lucide-react';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from '@/components/ui/resizable-navbar';
import { OpenVesselLogo } from '@/components/icons/OpenVesselLogo';

const NAV_ITEMS = [
  { name: 'Mission', link: '/#mission' },
  { name: 'Products', link: '/#products' },
  { name: 'Anchorr', link: '/anchorr' },
];

const GITHUB_ORG_URL = 'https://github.com/openVESSL';

function Logo() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <a href="/" onClick={handleClick} className="relative z-20 flex items-center gap-2.5">
      <OpenVesselLogo className="size-6 text-foreground" aria-hidden="true" />
      <span className="font-heading text-base font-semibold tracking-tight text-foreground">
        openVESSL
      </span>
    </a>
  );
}

function GitHubButton({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href={GITHUB_ORG_URL}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      className="relative z-20 flex items-center gap-1.5 rounded-sm border border-border bg-transparent px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/40 hover:bg-secondary hover:text-foreground"
    >
      <GitFork className="size-3.5" aria-hidden="true" />
      GitHub
    </a>
  );
}

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop nav */}
      <NavBody>
        <Logo />
        <NavItems items={NAV_ITEMS} />
        <div className="relative z-20 flex items-center gap-2">
          <GitHubButton />
        </div>
      </NavBody>

      {/* Mobile nav */}
      <MobileNav>
        <MobileNavHeader>
          <Logo />
          <MobileNavToggle
            isOpen={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={() => setMobileOpen(false)}
              className="w-full rounded-sm border border-transparent px-2 py-2.5 font-mono text-sm uppercase tracking-wide text-foreground hover:border-border hover:bg-secondary"
            >
              {item.name}
            </a>
          ))}
          <GitHubButton onClick={() => setMobileOpen(false)} />
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
