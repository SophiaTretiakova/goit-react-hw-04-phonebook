import React, { ReactNode } from 'react';

export const Section: React.FC<{ title?: string; children: ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};
