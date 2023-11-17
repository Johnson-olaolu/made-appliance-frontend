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

export interface IOffer {
  offer: string;
  product: IProduct;
}
export interface ICategory {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  display: string;
  image: IImage;
  menu_order: number;
  count: number;
}

export interface IAcfUrl {
  title: string;
  url: string;
  target: string;
}

export interface IMedia {
  id: 15089;
  date: "2023-10-21T12:51:43";
  date_gmt: "2023-10-21T17:51:43";
  guid: { rendered: "https://madeappliance.com/wp-content/uploads/2023/10/image-14.png" };
  modified: "2023-10-21T12:51:43";
  modified_gmt: "2023-10-21T17:51:43";
  slug: "image-14-2";
  status: "inherit";
  type: "attachment";
  link: "https://madeappliance.com/made-appliance-outlet/image-14-2/";
  title: { rendered: "image 14" };
  author: 1;
  comment_status: "open";
  ping_status: "closed";
  template: "";
  meta: [];
  acf: [];
  description: {
    rendered: '<p class="attachment"><a href=\'https://madeappliance.com/wp-content/uploads/2023/10/image-14.png\'><img loading="lazy" width="251" height="288" src="https://madeappliance.com/wp-content/uploads/2023/10/image-14.png" class="attachment-medium size-medium" alt="" decoding="async" title=""></a></p>\n';
  };
  caption: { rendered: "" };
  alt_text: "";
  media_type: "image";
  mime_type: "image/png";
  media_details: {
    width: 251;
    height: 288;
    file: "2023/10/image-14.png";
    filesize: 71310;
    sizes: {
      thumbnail: {
        file: "image-14-150x150.png";
        width: 150;
        height: 150;
        filesize: 27476;
        mime_type: "image/png";
        source_url: "https://madeappliance.com/wp-content/uploads/2023/10/image-14-150x150.png";
      };
      woocommerce_gallery_thumbnail: {
        file: "image-14-100x100.png";
        width: 100;
        height: 100;
        filesize: 14220;
        mime_type: "image/png";
        source_url: "https://madeappliance.com/wp-content/uploads/2023/10/image-14-100x100.png";
      };
      full: {
        file: "image-14.png";
        width: 251;
        height: 288;
        mime_type: "image/png";
        source_url: "https://madeappliance.com/wp-content/uploads/2023/10/image-14.png";
      };
    };
    image_meta: {
      aperture: "0";
      credit: "";
      camera: "";
      caption: "";
      created_timestamp: "0";
      copyright: "";
      focal_length: "0";
      iso: "0";
      shutter_speed: "0";
      title: "";
      orientation: "0";
      keywords: [];
    };
  };
  post: 268;
  source_url: "https://madeappliance.com/wp-content/uploads/2023/10/image-14.png";
}

export interface ITax {
  id: 72;
  country: "US";
  state: "AL";
  postcode: "35041";
  city: "Cardiff";
  postcodes: ["35014", "35036", "35041"];
  cities: ["Alpine", "Brookside", "Cardiff"];
  rate: "4.0000";
  name: "State Tax";
  priority: 0;
  compound: false;
  shipping: false;
  order: 1;
  class: "standard";
}

export interface IQuery {
  categories?: string[];
  tags?: string[];
}
