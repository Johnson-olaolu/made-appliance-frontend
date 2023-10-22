import https from "@/utils/https";
import { getSingleProduct } from "./product.service";
import { getSingleCategory } from "./categories.service";
import { IAcfUrl, ICategory, IImage, IMedia } from "./types";
import { fetchSingleImage } from "./media.service";

const id = process.env.HOMEPAGE_ID;
export const fetchTopCategories = async () => {
  const response = await https.get({ url: `/pages/${id}` });
  const quickInfo = response?.acf.quick_info;
  const categories_ids = response?.acf.top_categories.map((i: any) => i.top_category);
  const top_categories: ICategory[] = [];
  for (const category_id of categories_ids) {
    if (category_id) {
      const data = await getSingleCategory(category_id);
      top_categories.push(data);
    }
  }
  return {
    quickInfo,
    top_categories,
  };
};

export const fetchJumbotron = async () => {
  const response = await https.get({ url: `/pages/${id}` });
  const mainJumbotron: {
    main_jumbotron_title: string;
    main_jumbotron_text: string;
    main_jumbotron_cta: string;
    main_jumbotron_image: IMedia;
    main_jumbotron_url: string;
  } = response?.acf.main_jumbotron;
  mainJumbotron.main_jumbotron_image = await fetchSingleImage(mainJumbotron.main_jumbotron_image as any);

  const topDeals: {
    top_deals_promo_image: IMedia;
    top_deals_url: IAcfUrl;
    top_deals_cta: string;
  } = response?.acf.top_deals;

  topDeals.top_deals_promo_image = await fetchSingleImage(topDeals.top_deals_promo_image as any);

  const higlightedCategory = await getSingleCategory(response?.acf.highlighted_category);

  return {
    mainJumbotron,
    topDeals,
    higlightedCategory,
  };
};

export const fetchTestimonials = async () => {
  const response = await https.get({ url: `/pages/${id}` });
  const testimonials: {
    testimonial_image: IMedia;
    testimonial_name: string;
    testimonial_text: string;
  }[] = response?.acf.testimonial;

  for (const testimonial of testimonials) {
    if (testimonial.testimonial_image) testimonial.testimonial_image = await fetchSingleImage(testimonial.testimonial_image as any);
  }

  return testimonials;
};
