import SideBarItemWrapper from "../SideBarItemWrapper";

const SidebarCategories = () => {
  return (
    <SideBarItemWrapper title="Categories">
      <ul className="">
        <li className="py-2">
          <a href="" className="dark:text-ma-white text-ma-grey space-x-2 pt-1 text-sm">
            <p className="inline">Computers & Tablets</p>
            <span className="opacity-75 text-xs">(3,153)</span>
          </a>
        </li>
        <li className="py-2">
          <a href="" className="dark:text-ma-white text-ma-grey space-x-2 pt-1 text-sm">
            <p className="inline">TV & Home Theatre</p>
            <span className="opacity-75 text-xs">(473)</span>
          </a>
        </li>
        <li className="py-2">
          <a href="" className="dark:text-ma-white text-ma-grey space-x-2 pt-1 text-sm">
            <p className="inline">Audio</p>
            <span className="opacity-75 text-xs">(2)</span>
          </a>
        </li>
        <li className="py-2">
          <a href="" className="dark:text-ma-white text-ma-grey space-x-2 pt-1 text-sm">
            <p className="inline">Musical Instruments & Equipment</p>
            <span className="opacity-75 text-xs">(1)</span>
          </a>
        </li>
        <li className="py-2">
          <a href="" className="dark:text-ma-white text-ma-grey space-x-2 pt-1 text-sm">
            <p className="inline">Office Supplies & Ink</p>
            <span className="opacity-75 text-xs">(1)</span>
          </a>
        </li>
        <li className="py-2">
          <a href="" className="dark:text-ma-white text-ma-grey space-x-2 pt-1 text-sm">
            <p className="inline">Sports, Recreation & Transportation</p>
            <span className="opacity-75 text-xs">(1)</span>
          </a>
        </li>
        <li className="py-2">
          <a href="" className="dark:text-ma-white text-ma-grey space-x-2 pt-1 text-sm">
            <p className="inline">Travel, Luggage & Bags</p>
            <span className="opacity-75 text-xs">(1)</span>
          </a>
        </li>
      </ul>
    </SideBarItemWrapper>
  );
};

export default SidebarCategories;
