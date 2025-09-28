export async function loadMarkdown(path: string): Promise<string> {
  try {
    const response = await fetch(path);
    const text = await response.text();
    return text;
  } catch (error) {
    console.error('Erro ao carregar markdown:', error);
    return '';
  }
}