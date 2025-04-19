import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, children, className, ...props }) => {
  const baseClasses = 'transition-colors duration-200';
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <a href={href} className={combinedClasses} {...props}>
      {children}
    </a>
  );
};