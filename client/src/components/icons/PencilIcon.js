import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PencilIcon = ({ className, primaryColor, secondaryColor }) => {

  const theme = useSelector((state) => state.theme.theme);

  return (
    <svg
      className={className}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.257 2.78546L16.3049 4.2194L13.5911 8.09506L15.2294 9.24222L17.9432 5.36655C18.5767 4.46174 18.3568 3.21465 17.452 2.58109L15.4041 1.14715C14.4993 0.513598 13.2522 0.733494 12.6187 1.6383L9.90492 5.51397L11.5432 6.66112L14.257 2.78546ZM10.3723 8.33332L8.73403 7.18617L2.90723 15.5077L2.75179 19.3248L2.75153 19.3313L2.73828 19.6566L2.69397 20.7446C2.67915 21.1088 3.04641 21.366 3.38355 21.2275L4.39077 20.8137L4.69194 20.69L4.69796 20.6875L8.23172 19.236L14.0585 10.9144L12.4202 9.76726L6.9296 17.6087L4.7875 18.4886L4.88172 16.1747L10.3723 8.33332Z"
        fill={primaryColor}
      />
      <path
        d="M13 21H21"
        stroke="#00b7fd"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default PencilIcon;
{
  /* <svg className={className}  viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.257 2.78546L16.3049 4.2194L13.5911 8.09506L15.2294 9.24222L17.9432 5.36655C18.5767 4.46174 18.3568 3.21465 17.452 2.58109L15.4041 1.14715C14.4993 0.513598 13.2522 0.733494 12.6187 1.6383L9.90492 5.51397L11.5432 6.66112L14.257 2.78546ZM10.3723 8.33332L8.73403 7.18617L2.90723 15.5077L2.75179 19.3248L2.75153 19.3313L2.73828 19.6566L2.69397 20.7446C2.67915 21.1088 3.04641 21.366 3.38355 21.2275L4.39077 20.8137L4.69194 20.69L4.69796 20.6875L8.23172 19.236L14.0585 10.9144L12.4202 9.76726L6.9296 17.6087L4.7875 18.4886L4.88172 16.1747L10.3723 8.33332Z" fill={primaryColor}/>
<path d="M13 21H21" stroke="#2882FF" stroke-width="2" stroke-linecap="round"/>
</svg> */
}
