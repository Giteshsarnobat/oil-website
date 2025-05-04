const ShopNow = ({ onClose }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur bg-opacity-40">
        <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-sm text-center relative">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-red-600 text-2xl hover:text-red-800 focus:outline-none"
            onClick={onClose}
          >
            &times;
          </button>
  
          <h2 className="text-3xl font-bold text-red-700 mb-6">Contact Us</h2>
  
          <div className="flex flex-col gap-6 text-gray-700 text-lg font-medium">
            <div className="flex items-center justify-center gap-3">
              <span className="text-red-600 text-2xl">📞</span>
              <span>+91 9324639058</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-red-600 text-2xl">📞</span>
              <span>+91 9554500006</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-red-600 text-2xl">📧</span>
              <span>Oilmaajagdamba@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ShopNow;
  