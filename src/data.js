import tour1 from './images/tour-1.jpg';
import tour2 from './images/tour-2.jpg';
import tour3 from './images/tour-3.jpg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [  //Sayfa bilgileri buradan tek adreste değiştirilebilir
    {id:1, href:'#home', text:'home'},
    {id:2, href:'#about', text:'about'},
    {id:3, href:'#services', text:'services'},
    {id:4, href:'#tours', text:'tours'},
];

export const SocialLinks = [
    {id:1, href:'https://www.facebook.com',icon:'fab fa-facebook'},
    {id:2, href:'https://www.twitter.com',icon:'fab fa-twitter'},
    {id:3, href:'https://www.squarespace.com',icon:'fab fa-squarespace'},
];


export const services = [
    {id:1, icon:'fas fa-wallet fa-fw', title:'saving money', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores official'},
    {id:2, icon:'fas fa-tree fa-fw', title:'endless hiking', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores official'},
    {id:3, icon:'fas fa-socks fa-fw', title:'amazing comfort', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores official'},
]

export const tours = [
    {
    id:1,
    image:tour1,
    date:'august 26th, 2020',
    title:'Tibet Adventure',
    info:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    price:'from $1400', location:'Tibet',
    duration:'2'
},
    {
    id:2,
    image:tour2,
    date:'october 1th, 2020',
    title:'best of java',
    info:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    price:'from €1700', location:'Turkey',
    duration:'2'
},
    {
    id:3,
    image:tour3,
    date:'september 15th, 2020',
    title:'Tibet Adventure',
    info:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    price:'from $500', location:'Germany',
    duration:'3'
},
    {
    id:4,
    image:tour4,
    date:'august 26th, 2020',
    title:'explore hong kong',
    info:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    price:'from $2000', location:'China',
    duration:'7'
},


]