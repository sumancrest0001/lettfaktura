import React from 'react';
import { Link } from 'react-router-dom';
import './../../styles/dashboard/menu-list.css';

const collections = [
  { label: "Invoices", link: "", color: "#54cfff", image: 'invoices.png', },
  { color: "#28ffc1", label: "Customer", link: "client", image: 'customers.png' },
  {
    color: "#54cfff",
    label: "My Business",
    link: "server",
    image: 'mybusiness.png'
  },
  {
    color: "#5ae2ff",
    label: "Invoice Journal",
    link: "extra",
    image: 'invoicejournal.png'
  },
  {
    color: "#ffb257",
    label: "Price List",
    link: "dashboard/pricelist",
    image: 'pricelist.png'
  },
  {
    color: "#54cfff",
    label: "Multiple Invoicing",
    link: "",
    image: 'multipleinvoicing.png'
  },
  {
    color: "#ff4b97",
    label: "Unpaid Invoices",
    link: "",
    image: 'unpaidinvoices.png'
  },
  { color: "#f7c90b", label: "Offer", link: "", image: 'offer.png' },
  {
    color: "#16ceff",
    label: "Inventory Control",
    link: "",
    image: 'inventorycontrol.png'
  },
  {
    color: "#1b9aff",
    label: "Member Invoicing",
    link: "",
    image: 'memberinvoicing.png'
  },
  {
    color: "#82b1ff",
    label: "Import / Export",
    link: "",
    image: 'importexport.png'
  },
];

const MenuList = () => {
const collectionlink = collections.map((collection) => (
    <Link href={"/" + collection.link} key={collection.label} className="">
      <div
        className={
          `flex hover:bg-[#ede7f6] rounded-lg duration-700 hover:text-[#7754bd] text-[${collection.color}] font-[300] py-2 tracking-wide`
        }
      >
        <span><img className='w-[22px] mr-3' src={`/assets/images/menu/${collection.image}`}/></span>
        <p className="text-sm mt-[0.7px] text-black">{collection.label}</p>
      </div>
    </Link>
  ));
  return (
    <aside className="h-full shadow-md sidebar left-menu">
      <h2 className="pt-10 text-lg font-light text-center text-black">Menu</h2>
      <div className="horizontal-divider w-[80%] m-auto h-[1.5px]"></div>
      <div className="px-8 py-6">
        {collectionlink}
      </div>
    </aside>
  );
};

export default MenuList;
