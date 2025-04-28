import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonial() {
  const testimonials = [
    {
      quote:
        "Our brand was just another name until Notedad stepped in. Their performance marketing strategy turned our ad spend into serious ROI. In just 3 months, we saw a 220% increase in leads and 3x growth in sales.",
      name: "Nikhil R., Founder, Blanc",
      designation: "From Invisible to Unmissable",
      src: "/nikhil.jpg",
    },
    {
      quote:
        "They didn't just manage our socials, they revived them. Reels hit 1M+ views, engagement went through the roof, and our DMs turned into a sales channel.",
      name: "Priya M., Co-Founder, Maned",
      designation: "Instagram Exploded. So Did Our Sales.",
      src: "/priya.png",
    },
    {
      quote:
        "Every rupee we spent with Notedad brought ₹10 back. From creatives to targeting, everything was sharp. They scaled our ecommerce store to 7 figures in under 6 months",
      name: "Gauri, CEO, JCL",
      designation: "Campaigns That Print Money",
      src: "/gauri.png",
    },
    {
      quote:
        "Working with Notedad is like having a digital marketing war room at your fingertips. Our revenue increased by 180% quarter over quarter, and our CAC dropped like magic.",
      name: "Supriya, Marketing Head, Iconic Media",
      designation: "A True Growth Partner",
      src: "/supriya.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
