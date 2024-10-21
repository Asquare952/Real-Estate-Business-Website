'use client'
import { IoBed } from "react-icons/io5";
import { PiBathtubFill } from "react-icons/pi";
import { HiOfficeBuilding } from "react-icons/hi";
const Properties = [
  {
    id: 1,
    image: "/Assets/Images/Property-1.1.jpg",
    title: "Seaside Serenity Villa",
    desc: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ex totam quo officia quia enim minima commodi facilis deleniti consectetur.",
    features: [
      { icon: <IoBed/> , text: "4-Bedroom" },
      { icon: <PiBathtubFill/>, text: "3-Barthroom" },
      { icon: <HiOfficeBuilding/>, text: "Villa" },
    ],
    price: "$150,000",
  },
  {
    id: 2,
    image: "/Assets/Images/Property-2.0.jpg",
    title: "Metropolitan Haven",
    desc: "A chic and fully-furnished 3-bedroom apartment with panoramic city views. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ex totam quo officia quia enim minima commodi facilis deleniti consectetur.",
    features: [
      { icon: <IoBed/>, text: "3-Bedroom" },
      { icon: <PiBathtubFill/>, text: "3-Barthroom" },
      { icon: <HiOfficeBuilding/>, text: "Villa" },
    ],
    price: "$80,000",
  },
  {
    id: 3,
    image: "/Assets/Images/Property-3.0.jpg",
    title: "Rustic Retreat Cottage",
    desc: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ex totam quo officia quia enim minima commodi facilis deleniti consectetur.",
    features: [
      { icon: <IoBed/>, text: "3-Bedroom" },
      { icon: <PiBathtubFill/>, text: "3-Barthroom" },
      { icon: <HiOfficeBuilding/>, text: "Villa" },
    ],
    price: "$80,000",
  },
  {
    id: 4,
    image: "/Assets/Images/Property-4.0.jpg",
    title: "Rustic Retreat Cottage",
    desc: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ex totam quo officia quia enim minima commodi facilis deleniti consectetur.",
    features: [
      { icon: <IoBed/>, text: "3-Bedroom" },
      { icon: <PiBathtubFill/>, text: "3-Barthroom" },
      { icon: <HiOfficeBuilding/>, text: "Villa" },
    ],
    price: "$100,000",
  },
  {
    id: 5,
    image: "/Assets/Images/Property-5.0.jpg",
    title: "Rustic Retreat Cottage",
    desc: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ex totam quo officia quia enim minima commodi facilis deleniti consectetur.",
    features: [
      { icon: <IoBed/>, text: "3-Bedroom" },
      { icon: <PiBathtubFill/>, text: "3-Barthroom" },
      { icon: <HiOfficeBuilding/>, text: "Villa" },
    ],
    price: "$80,000",
  },
  // {
  //   id: 6,
  //   image: "/Assets/Images/Property-5.0.jpg",
  //   title: "Rustic Retreat Cottage",
  //   desc: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ex totam quo officia quia enim minima commodi facilis deleniti consectetur.",
  //   features: [
  //     { icon: <IoBed/>, text: "3-Bedroom" },
  //     { icon: <PiBathtubFill/>, text: "3-Barthroom" },
  //     { icon: <HiOfficeBuilding/>, text: "Villa" },
  //   ],
  //   price: "$190,000",
  // },
  {
    id: 6,
    image: "/Assets/Images/Property-6.1.jpg",
    title: "Rustic Retreat Cottage",
    desc: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ex totam quo officia quia enim minima commodi facilis deleniti consectetur.",
    features: [
      { icon: <IoBed/>, text: "3-Bedroom" },
      { icon: <PiBathtubFill/>, text: "3-Barthroom" },
      { icon: <HiOfficeBuilding/>, text: "Villa" },
    ],
    price: "$50,000",
  },
];
export default Properties;