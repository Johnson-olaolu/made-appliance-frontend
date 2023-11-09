export function formatAmount(amount: string | number) {
  if (parseFloat(`${amount}`) > 0) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(parseFloat(`${amount}`)) || "";
  } else {
    return "";
  }
}

export function escapeHtml(html: string) {
  var text = document?.createTextNode(html);
  var p = document.createElement("p");
  p.appendChild(text);
  return p.innerHTML;
}
