import { useState, createContext, useMemo } from 'react';

// Types
import { StyleContextTypes } from '../types/index';

export const StyleContext = createContext<StyleContextTypes>({
  color: 'red',
  setColor: () => null,
  font: 'font-sans',
  setFont: () => null,
});

export function StyleProvider({ children }: { children: JSX.Element }) {
  const [color, setColor] = useState<string>('red');

  const [font, setFont] = useState<string>('font-sans');

  const value: StyleContextTypes = useMemo(
    () => ({ color, setColor, font, setFont }),
    [color, font]
  );

  return (
    <StyleContext.Provider value={value}>{children}</StyleContext.Provider>
  );
}
