export function formatAmount(amount: string | number) {
  if (parseFloat(`${amount}`) > 0) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(parseFloat(`${amount}`)) || "";
  } else {
    return "";
  }
}
