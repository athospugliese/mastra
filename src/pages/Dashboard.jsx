import React, { useState } from 'react';
import { FiMenu, FiShoppingCart, FiUsers, FiPackage, FiMessageCircle, FiSettings, FiLogOut, FiHeadphones, FiGift } from 'react-icons/fi';
import Logo from '../components/Logo';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Estado para controlar a abertura da sidebar em telas pequenas

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-white p-4 flex flex-col justify-between transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 lg:translate-x-0 z-30`}>
        <div>
          <Logo />
          <nav className="space-y-4">
            <a href="#" className="flex items-center space-x-4 text-primary-100 font-medium hover:bg-gray-100 p-2 rounded-lg">
              <FiMenu /> <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-100">
              <FiShoppingCart /> <span>Orders</span> <span className="ml-auto bg-red-500 text-white text-sm rounded-full px-2">3</span>
            </a>
            <a href="#" className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-100">
              <FiUsers /> <span>Customers</span>
            </a>
            <a href="#" className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-100">
              <FiPackage /> <span>Inventory</span>
            </a>
            <a href="#" className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-100">
              <FiMessageCircle /> <span>Conversations</span> <span className="ml-auto bg-yellow-500 text-white text-sm rounded-full px-2">16</span>
            </a>
            <a href="#" className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-100">
              <FiSettings /> <span>Settings</span>
            </a>
          </nav>
        </div>
        <div className="space-y-4">
          <button className="flex items-center space-x-4 bg-gray-100 text-sm rounded-lg p-2">
            <FiHeadphones /> <span>Contact Support</span>
          </button>
          <button className="flex items-center space-x-4 bg-gray-100 text-sm rounded-lg p-2">
            <FiGift /> <span>Free Gift Awaits You!</span>
          </button>
          <button className="flex items-center space-x-4 text-red-500 text-sm p-2">
            <FiLogOut /> <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Overlay for sidebar when opened on small screens */}
      {sidebarOpen && <div className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden" onClick={() => setSidebarOpen(false)}></div>}

      {/* Main Content */}
      <div className="flex-1 p-6 lg:ml-64">
        {/* Top bar */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <div className="text-gray-600">Nanny's Shop</div>
            <button className="p-2 bg-gray-100 rounded-full lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <FiMenu />
            </button>
            <img
              src="https://via.placeholder.com/40"
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Dashboard Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-gray-600">Sales</h4>
              <span>This Week</span>
            </div>
            <div className="text-2xl font-bold">₦0.00 <span className="text-green-500">+0.00%</span></div>
            <p className="text-gray-600">Volume: 0</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-gray-600">Customers</h4>
              <span>This Week</span>
            </div>
            <div className="text-2xl font-bold">0 <span className="text-green-500">+0.00%</span></div>
            <p className="text-gray-600">Active: 0</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-gray-600">All Orders</h4>
              <span>This Week</span>
            </div>
            <div className="text-2xl font-bold">0 <span className="text-green-500">+0.00%</span></div>
            <p className="text-gray-600">Pending: 0</p>
          </div>
        </section>

        {/* Marketing & Summary Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-gray-600 mb-4">Marketing</h4>
            <div className="flex justify-between mb-4">
              <span>Acquisition</span>
              <span>This Week</span>
            </div>
            {/* Add a marketing chart placeholder */}
            <div className="h-32 bg-gray-100 rounded-full"></div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-gray-600 mb-4">Summary</h4>
            {/* Add a summary chart placeholder */}
            <div className="h-32 bg-gray-100"></div>
          </div>
        </section>

        {/* Recent Orders Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h4 className="text-gray-600 mb-4">Recent Orders</h4>
          <div className="text-center text-gray-600">
            <p>No Orders Yet?</p>
            <p>Add products to your store and start selling to see orders here.</p>
            <button className="bg-primary-100 text-black px-6 py-2 mt-4 rounded-lg">
              + New Product
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
