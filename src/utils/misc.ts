// "use client";
export function formatAmount(amount: string | number) {
  if (parseFloat(`${amount}`) > 0) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(parseFloat(`${amount}`)) || "";
  } else {
    return "";
  }
}

export function escapeHtml(html: string) {
  // const dom = new JSDOM(`<!DOCTYPE html>${html}`);
  // return dom.window.document.textContent;
  return html.replace(/<[^>]*>/g, "");
}

export function calculateDiscount(price: number | string, regularPrice: number | string) {
  const fprice = parseFloat(`${price}`);
  const fregularPrice = parseFloat(`${regularPrice}`);

  const discount = Math.round(fregularPrice / fprice);
  const saved = Math.round(fregularPrice - fprice);

  return {
    discount,
    saved,
  };
}
