import React from 'react';
import { CodeBracketIcon, CursorArrowRippleIcon, GlobeAltIcon } from '@heroicons/react/24/solid';

export default function LinksPanel() {
  const links = [
    { name: 'Open VS Code Web', icon: <CodeBracketIcon className="h-5 w-5 inline mr-2" />, url: 'https://vscode.dev' },
    { name: 'Open GitHub Codespaces', icon: <GlobeAltIcon className="h-5 w-5 inline mr-2" />, url: 'https://github.com/codespaces' },
    { name: 'Open Cursor IDE', icon: <CursorArrowRippleIcon className="h-5 w-5 inline mr-2" />, url: 'https://cursor.sh' },
  ];
  return (
    <div className="space-y-2">
      {links.map((link, i) => (
        <button key={i} onClick={() => window.open(link.url, '_blank')} className="w-full text-left">
          {link.icon}{link.name}
        </button>
      ))}
    </div>
  );
}