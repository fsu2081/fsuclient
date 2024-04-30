import { AccountCircle } from '@mui/icons-material';
import React from 'react';

const AdminTopNav = () => {
  return (
    <div className="w-full h-[4rem] flex border-2 items-center justify-end px-2 ">
      <div className=" rounded-full cursor-pointer ">
        <AccountCircle color="primary" fontSize="large" />
      </div>
    </div>
  );
};

export default AdminTopNav;
