import React from 'react';
const url="http://lmgexhibitions.kilaqitu.com/img/";
export const Banner30DataSource = {
  wrapper: { className: 'banner3' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    
    children: [
      {
        name: 'slogan',
        className: 'banner3-slogan',
        children: 'JANA Engineers',
        texty: true,
      },
      {
        name: 'name',
        className: 'banner3-name',
        children: 'JANA Engineers',
      },
      {
        name: 'nameEn',
        className: 'banner3-name-en',
        children: 'Seeking The best event and exhibitions company, behold',
      },
    
      
      { name: 'button', className: 'banner3-button', children: 'Contact us' },
  
    ],
  },
};
export const Banner00DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children:   url+'lg.png',
  },
  content: {
    className: 'banner0-content',
    children: 'The best company for events and exhibitions',
  },
};

export const Content50DataSource = {
 
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: 'Sample projects', className: 'title-h1', },
      {
        name: 'content',
        className: 'title-content',
        children: 'Latest pojects',
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
                url+'1.jpg',
          },
          content: { children: 'dd' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
            url+'2.jpg',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
            url+'3.jpg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
                url+'4.jpg',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
                url+'5.jpg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
                url+'6.jpg',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
                url+'7.jpg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
                url+'8.jpg',
          },
          content: { children: 'Ant Motion' },
        },
      },
    ],
  },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: 'Products and services' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
              url+'/1.jpg',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'Pavilion Design & Build',
            },
            { name: 'content', children: 'We design exhibition stands' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'Quality Exhibition Stands For Hire',
            },
            {
              name: 'content',
              children: 'Quality Exhibition Stands For Hire',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'Custom Stand Build',
            },
            {
              name: 'content',
              children: 'Custom Stand Build',
            },
          ],
        },
      },
    ],
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },

  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: { className: 'content1-title', children: 'Event Management & Marketing' },
  content: {
    className: 'content1-content',
    children:
      ' we assist our clients in the planning, Marketing and management of a show from the beginning to the end.      We have done this for several event organizers which puts us in a better position to market and manage events in Kenya and East Africa as a whole.',
  },  
  img: {
    children:   url+'m.gif',
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: 'List of events we have featured',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '',
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
       
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'BUILDEXPO AFRICA 2019' },
          content: {
            className: 'content3-content',
            children:
              ' The build expo Africa 2019 held at KICC showcasing the latest techology in building material, mining machines, construction machinery and heavy equipment. ',
          },
        },
      },   {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
         
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'PPP EXPO' },
          content: {
            className: 'content3-content',
            children:
              "The PPP Expo held in Dar es Salaam, Tanzania on 2019",
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
        
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Solar & Energy Expo' },
          content: {
            className: 'content3-content',
            children:
              "The Solar & Energy Expo held at KICC on July 2019. The event showcased ground breaking developments in renewable energy",
          },
        },
      },
   
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
         
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'ENTERPRISE INDIA ' },
          content: {
            className: 'content3-content',
            children:
              "The Enteprise India Event held at KICC in 2019 ",
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
       
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Future Enegery East Africa ' },
          content: {
            className: 'content3-content',
            children:
              'Future Enegery East Africa 2019, Held at KICC in Nairobi  ',
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
         
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Kenya International Trade Show' },
          content: {
            className: 'content3-content',
            children:
              "The Kenya International Trade Show held at KICC in 2019. ",
          },
        },
      },
      
      
      
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <>
        <span>
          ©2021 JEGS All Rights
          Reserved
        </span>
      </>
    ),
  },
};

export const page1 = {
  title: 'Products and services',
  children: [
    {
      title: 'Exhibition Stands & Hire',
      content: 'Find an Exhibition Stands & Hire',
      src: url+'s.gif',
      color: '#1890FF',
      shadowColor: 'rgba(15, 93, 166, 0.08)',
    },
    {
      title: 'Custom Design stands',
      content: 'We make custom designs that fit with your brand',
      src: url+'e.jpeg',
      color: '#AB33F7',
      shadowColor: 'rgba(112, 73, 166, 0.08)',
    },
 
    {
      title: 'Pavilion Design & Build',
      content: 'We design & build exhibition stands',
      src: url+'c.gif',
      color: '#EB2F96',
      shadowColor: 'rgba(166, 55, 112, 0.08)',
    
    },
  ],
};
