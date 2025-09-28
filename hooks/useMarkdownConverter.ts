import { useEffect, useState } from 'react';

declare const showdown: any;

export function useMarkdownConverter() {
  const [converter, setConverter] = useState<any>(null);

  useEffect(() => {
    if (typeof showdown !== 'undefined') {
      const sdConverter = new showdown.Converter({
        simplifiedAutoLink: true,
        strikethrough: true,
        tables: true,
      });
      setConverter(sdConverter);
    }
  }, []);

  return converter;
}