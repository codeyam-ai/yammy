export default function toTitleCase(input: string): string {
  if (!input) return '';
  return input
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}