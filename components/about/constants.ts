export const sections: TSection[] = [
  {
    title: 'World-class talent',
    description: [
      'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.',
      "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand's story and mission.",
    ],
    images: {
      mobile: '/assets/about/mobile/image-world-class-talent.jpg',
      tablet: '/assets/about/tablet/image-world-class-talent.jpg',
      desktop: '/assets/about/desktop/image-world-class-talent.jpg',
    },
  },
  {
    title: 'The real deal',
    description: [
      "As strategic partners in our clients' businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.",
      'We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.',
    ],
    images: {
      mobile: '/assets/about/mobile/image-real-deal.jpg',
      tablet: '/assets/about/tablet/image-real-deal.jpg',
      desktop: '/assets/about/desktop/image-real-deal.jpg',
    },
  },
];

export type TSection = {
  title: string;
  description: string[];
  images: Images;
};

type Image = string;

type Images = {
  mobile: Image;
  tablet: Image;
  desktop: Image;
};
