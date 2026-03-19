import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children, ...props }: ComponentPropsWithoutRef<'a'>) => {
      if (href?.startsWith('/') || href?.startsWith('#')) {
        return (
          <Link href={href} {...props}>
            {children}
          </Link>
        );
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    },
    img: ({ src, alt, ...props }) => (
      <Image
        className="rounded-md"
        src={src ?? ''}
        alt={alt ?? ''}
        width={800}
        height={450}
        {...props}
      />
    ),
    ...components,
  };
}
