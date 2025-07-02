import Image from "next/image";
import React from "react";

const AdminHeader = () => {
  return (
    <>
      <div className="flex items-center bg-[#21212b]  text-[#E7F6F2] p-4">
        <div className=" flex-1  h-15  relative">
          <Image src="/images/nima-logo.svg" fill alt="logo" />
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
