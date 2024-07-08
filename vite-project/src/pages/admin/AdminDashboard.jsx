const AdminDashboard = () => {
    return (
      <div className="px-5 py-5">
        {/* Top */}
        <div className="mb-5">
          <div className="bg-red-100 py-5 border border-red-200 rounded-lg shadow-md">
            <h1 className="text-center text-2xl font-bold text-red-500">Admin Dashboard</h1>
          </div>
        </div>
  
        {/* Mid */}
        <div className="mb-5">
          <div className="bg-red-100 py-5 rounded-xl border border-red-200 shadow-md">
            <div className="flex justify-center">
              <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" className="h-24 w-24 rounded-full border-2 border-red-200"/>
            </div>
            <div className="mt-4">
              <h1 className="text-center text-lg font-bold text-red-500">Name: John DOe</h1>
              <h1 className="text-center text-lg font-bold text-red-500">Email: test@gmail.com</h1>
            </div>
          </div>
        </div>
  
        {/* Bottom */}
        <div className="flex flex-wrap -m-4 text-center justify-center">
          {/* Total Products */}
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
            <div className="border bg-red-100 py-3 px-4 rounded-xl hover:bg-red-200 border-red-200">
              <div className="text-red-500 w-12 h-12 mb-3 inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M9 21V9a3 3 0 0 1 3-3h5l2 7h-7" />
                  <path d="M17 11a2 2 0 0 1-2 2h-1" />
                </svg>
              </div>
              <h2 className="text-3xl font-medium text-red-500">10</h2>
              <p className="text-red-500 font-bold">Total Products</p>
            </div>
          </div>
  
          {/* Total Orders */}
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
            <div className="border bg-red-100 py-3 px-4 rounded-xl hover:bg-red-200 border-red-200">
              <div className="text-red-500 w-12 h-12 mb-3 inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-list">
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3" y2="6" />
                  <line x1="3" y1="12" x2="3" y2="12" />
                  <line x1="3" y1="18" x2="3" y2="18" />
                </svg>
              </div>
              <h2 className="text-3xl font-medium text-red-500">10</h2>
              <p className="text-red-500 font-bold">Total Orders</p>
            </div>
          </div>
  
          {/* Total Users */}
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
            <div className="border bg-red-100 py-3 px-4 rounded-xl hover:bg-red-200 border-red-200">
              <div className="text-red-500 w-12 h-12 mb-3 inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h2 className="text-3xl font-medium text-red-500">10</h2>
              <p className="text-red-500 font-bold">Total Users</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AdminDashboard;
  