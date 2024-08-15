import { useState } from 'react';
import ProductDetail from '../../components/admin/ProductDetail';
import OrderDetail from '../../components/admin/OrderDetail';
import UserDetail from '../../components/admin/UserDetail';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('products');

    const tabData = [
        { id: 'products', title: 'Total Products', count: 10, icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        )},
        { id: 'orders', title: 'Total Orders', count: 10, icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        )},
        { id: 'users', title: 'Total Users', count: 10, icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )},
    ];

    const user = JSON.parse(localStorage.getItem('users'));

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Top */}
            <div className="bg-gradient-to-r from-[#F42C37] to-[#F45D37] p-8 shadow-md">
                <h1 className="text-center text-3xl font-bold text-white">Admin Dashboard</h1>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Mid */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="flex items-center space-x-6">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" 
                            alt="Admin Avatar" 
                            className="w-24 h-24 rounded-full border-4 border-[#F42C37]"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">{user?.name}</h2>
                            <p className="text-gray-600">{user?.email}</p>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {tabData.map((tab) => (
                        <div 
                            key={tab.id}
                            className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer ${activeTab === tab.id ? 'ring-2 ring-[#F42C37]' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`text-[#F42C37] ${activeTab === tab.id ? 'text-opacity-100' : 'text-opacity-70'}`}>
                                    {tab.icon}
                                </div>
                                <span className="text-4xl font-bold text-[#F42C37]">{tab.count}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-700">{tab.title}</h3>
                        </div>
                    ))}
                </div>

                {/* Content based on active tab */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    {activeTab === 'products' && (
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">All Products</h3>
                            <ProductDetail/>
                        </div>
                    )}
                    {activeTab === 'orders' && (
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">All Orders</h3>
                            <OrderDetail/>
\                        </div>
                    )}
                    {activeTab === 'users' && (
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">All Users</h3>
                            <UserDetail/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;