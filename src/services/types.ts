export interface IProduct {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  type: string;
  status: string;
  featured: boolean;
  catalog_visibility: string;
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  date_on_sale_from: null;
  date_on_sale_from_gmt: null;
  date_on_sale_to: null;
  date_on_sale_to_gmt: null;
  on_sale: true;
  purchasable: true;
  total_sales: 3;
  virtual: false;
  downloadable: false;
  downloads: [];
  download_limit: -1;
  download_expiry: -1;
  external_url: "";
  button_text: "";
  tax_status: "taxable";
  tax_class: "";
  manage_stock: false;
  stock_quantity: null;
  backorders: "no";
  backorders_allowed: false;
  backordered: false;
  low_stock_amount: null;
  sold_individually: false;
  weight: "";
  dimensions: { length: ""; width: ""; height: "" };
  shipping_required: true;
  shipping_taxable: true;
  shipping_class: "";
  shipping_class_id: 0;
  reviews_allowed: false;
  average_rating: "0.00";
  rating_count: 0;
  upsell_ids: [];
  cross_sell_ids: [];
  parent_id: 0;
  purchase_note: "";
  categories: ICategory[];
  tags: [];
  images: IImage[];
  attributes: [];
  default_attributes: [];
  variations: [];
  grouped_products: [];
  menu_order: 0;
  price_html: '<del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>299.00</bdi></span></del> <ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>235.00</bdi></span></ins>';
  related_ids: [];
  meta_data: IMetaData[];
  stock_status: "instock";
  has_options: false;
  post_password: "";
}

export interface ICategory {
  id: number;
  name: string;
  slug: string;
}

export interface IMetaData {
  id: number;
  key: string;
  value: string;
}

export interface IImage {
  id: number;
  date_created: Date;
  date_created_gmt: Date;
  date_modified: Date;
  date_modified_gmt: Date;
  src: string;
  name: string;
  alt: string;
}

export interface IFreeOption {
  option_title: string;
  option_subtitle: string;
}
