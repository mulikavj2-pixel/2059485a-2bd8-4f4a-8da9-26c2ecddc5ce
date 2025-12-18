"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MediaSplitAbout from '@/components/sections/about/MediaSplitAbout';
import ProductCardSix from '@/components/sections/product/ProductCardSix';
import FeatureCardEighteen from '@/components/sections/feature/FeatureCardEighteen';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="large"
      background="none"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070577347-dvzptvw3.jpg"
          logoAlt="Coffee Shop Logo"
          brandName="Brew Haven"
          button={{
            text: "Order Now",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="Brew Haven"
          description="Discover the art of exceptional coffee. Experience freshly roasted blends, handcrafted drinks, and a warm atmosphere perfect for work, conversations, or quiet moments."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070579352-njr3ugz4.jpg"
          imageAlt="Cozy coffee shop interior with warm lighting"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <MediaSplitAbout
          title="Crafted with Passion"
          description="Since 2018, Brew Haven has been serving our community with ethically sourced, single-origin coffee roasted in-house. Every cup reflects our commitment to quality, sustainability, and creating a welcoming space where neighbors become friends."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070580900-njd88avn.jpg"
          imageAlt="Skilled barista preparing specialty coffee"
          buttons={[
            {
              text: "Learn More",
              href: "#why-us"
            }
          ]}
          imagePosition="right"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardSix
          title="Our Signature Collection"
          description="Explore our carefully curated selection of specialty coffees and beverages"
          products={[
            {
              id: "1",
              name: "Single Origin Espresso",
              price: "$4.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070262789-myih43c3.jpg",
              imageAlt: "Rich espresso shot"
            },
            {
              id: "2",
              name: "Artisan Cappuccino",
              price: "$5.75",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070261138-2ommyqra.jpg",
              imageAlt: "Creamy cappuccino with latte art"
            },
            {
              id: "3",
              name: "Cold Brew Refresher",
              price: "$5.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070582662-g4ws76oz.jpg",
              imageAlt: "Refreshing iced cold brew"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="why-us" data-section="why-us">
        <FeatureCardEighteen
          title="Why Coffee Lovers Choose Us"
          description="Experience the difference quality and care make in every sip"
          negativeCard={{
            title: "Generic Coffee Chains",
            items: [
              "Mass-produced, inconsistent blends",
              "Limited seating and atmosphere",
              "No community connection",
              "High prices, standard quality"
            ],
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070579352-njr3ugz4.jpg",
            imageAlt: "Typical generic coffee shop"
          }}
          positiveCard={{
            title: "Brew Haven Difference",
            items: [
              "Single-origin, freshly roasted daily",
              "Cozy, Instagram-worthy spaces",
              "Regular events and community building",
              "Premium quality at fair prices"
            ],
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070580900-njd88avn.jpg",
            imageAlt: "Expert barista crafting specialty drinks"
          }}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070584276-0eettrnh.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Chen",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070585487-p16l1txs.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070586750-dqf59t3y.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "Michael Brown",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070587964-0czhcezb.jpg",
              imageAlt: "Michael Brown"
            }
          ]}
          cardTitle="Thousands of coffee lovers visit us every month for great coffee and genuine connections"
          cardTag="Join Our Community"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get In Touch"
          description="Have questions? Want to host an event? We'd love to hear from you. Reach out and join the Brew Haven family."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us what's on your mind...",
            rows: 5,
            required: true
          }}
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070590041-mjxykblw.jpg"
          imageAlt="Welcoming coffee shop seating area"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Menu",
              items: [
                {
                  label: "Coffee",
                  href: "products"
                },
                {
                  label: "Pastries",
                  href: "products"
                },
                {
                  label: "Breakfast",
                  href: "products"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Careers",
                  href: "contact"
                }
              ]
            },
            {
              title: "Connect",
              items: [
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Hours & Location",
                  href: "contact"
                },
                {
                  label: "Events",
                  href: "contact"
                }
              ]
            }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070577347-dvzptvw3.jpg"
          logoText="Brew Haven"
          copyrightText="© 2025 Brew Haven. Crafted with care for coffee lovers everywhere."
        />
      </div>
    </ThemeProvider>
  );
}