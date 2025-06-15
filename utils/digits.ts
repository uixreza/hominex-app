// Functionalities
export function addCommasToNumber(input: string): string {
  // Remove any non-digit characters
  const digits = input.replace(/\D/g, "");
  // Add commas every 3 digits from the right
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
