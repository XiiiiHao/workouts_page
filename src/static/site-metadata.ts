interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Workouts Map',
  siteUrl: 'https://github.com/XiiiiHao',
  logo: 'https://raw.githubusercontent.com/XiiiiHao/workouts_page/master/public/images/favicon.png',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://github.com/XiiiiHao',
    },
    {
      name: 'About',
      url: 'https://github.com/XiiiiHao/workouts_page',
    },
  ],
};

export default data;
