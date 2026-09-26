import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { Box, BoxProps } from '@mui/material';
import clsx from 'clsx';
import 'src/theme/animations.css';

interface RevealProps extends Omit<BoxProps, 'children'> {
  children: ReactNode;
  /** Stagger delay in ms before the reveal triggers */
  delay?: number;
  /** Direction of the reveal motion */
  direction?: 'up' | 'left' | 'right' | 'zoom';
  /** Fire only the first time the element scrolls into view */
  once?: boolean;
  /** Render as a different element/Box type */
  component?: React.ElementType;
}

/**
 * Scroll-reveal wrapper: fades/slides its children in the first time
 * they enter the viewport (IntersectionObserver based, no deps).
 */
const Reveal: FC<RevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  once = true,
  component = 'div',
  sx,
  className,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Box
      ref={ref}
      component={component}
      className={clsx(
        'reveal',
        direction === 'left' && 'reveal-left',
        direction === 'right' && 'reveal-right',
        direction === 'zoom' && 'reveal-zoom',
        visible && 'reveal-visible',
        className
      )}
      sx={{ transitionDelay: delay ? `${delay}ms` : undefined, ...sx }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Reveal;
