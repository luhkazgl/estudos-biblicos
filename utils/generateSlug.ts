export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD') // remove acentos
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-') // espaços viram hífens
    .replace(/[^\w\-]+/g, '') // remove caracteres especiais
    .replace(/\-\-+/g, '-') // múltiplos hífens viram um só
    .trim();
}