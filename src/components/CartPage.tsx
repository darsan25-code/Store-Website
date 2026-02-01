import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowLeft, Trash2, Plus, Minus, Send, CheckCircle, X, Phone, MessageCircle, Mail } from 'lucide-react';
import { useCart } from './CartContext';
import { toast } from 'sonner@2.0.3';

function OrderFormModal({ onClose, totalAmount }: { onClose: () => void; totalAmount: number }) {
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { cart, clearCart } = useCart();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate email sending (in production, this would connect to a backend API)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast.success('Order Placed Successfully!', {
        description: 'We will contact you shortly to confirm your order.',
      });

      setTimeout(() => {
        clearCart();
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl backdrop-blur-2xl bg-white/15 border border-white/30 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 backdrop-blur-xl bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        >
          <X size={20} className="text-white" />
        </button>

        {isSuccess ? (
          <div className="p-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6"
            >
              <CheckCircle size={40} className="text-white" />
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-3">Order Placed!</h3>
            <p className="text-gray-300">We'll contact you shortly to confirm your order.</p>
          </div>
        ) : (
          <div className="p-8">
            <h3 className="text-3xl font-bold text-white mb-6">Complete Your Order</h3>

            {/* Order Summary */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 mb-6 max-h-64 overflow-y-auto">
              <h4 className="text-white font-bold mb-3">Order Items</h4>
              <div className="space-y-3">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <div className="flex-1">
                      <p className="text-white font-semibold">{item.name}</p>
                      <p className="text-gray-400">Qty: {item.quantity} × ₹{item.price}</p>
                    </div>
                    <p className="text-white font-bold">₹{item.price * item.quantity}</p>
                  </div>
                ))}
                <div className="border-t border-white/20 pt-3 mt-3 flex justify-between">
                  <span className="text-white font-bold text-lg">Total Amount:</span>
                  <span className="text-white font-bold text-2xl">₹{totalAmount}</span>
                </div>
              </div>
            </div>

            {/* Order Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  className="w-full px-4 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#B11226] transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Phone Number *</label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#B11226] transition-colors"
                  placeholder="10-digit mobile number"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#B11226] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Delivery Notes (Optional)</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#B11226] transition-colors resize-none"
                  placeholder="Delivery instructions, special requirements..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className="w-full py-4 bg-gradient-to-r from-[#B11226] to-[#D61C3A] text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Processing Order...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Place Order
                  </>
                )}
              </motion.button>
            </form>

            <p className="text-gray-400 text-xs text-center mt-4">
              * Your order details will be sent to our team via email for confirmation
            </p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export function CartPage({ onBackToHome }: { onBackToHome: () => void }) {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [showOrderForm, setShowOrderForm] = useState(false);

  const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0F12] via-[#1A1A1F] to-[#0F0F12] overflow-x-hidden">
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A1F]/50 to-transparent pointer-events-none"></div>
        
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(177, 18, 38, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(177, 18, 38, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(177, 18, 38, 0.15) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 pointer-events-none"
        />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBackToHome}
            className="mb-8 flex items-center gap-2 px-6 py-3 backdrop-blur-xl bg-white/15 border border-white/25 rounded-full text-white font-semibold hover:bg-white/25 transition-all group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Shopping <span className="bg-gradient-to-r from-[#B11226] via-[#D61C3A] to-[#B11226] bg-clip-text text-transparent">Cart</span>
            </h1>
            <p className="text-gray-300 text-lg">
              {cart.length === 0 ? 'Your cart is empty' : `You have ${cart.length} item(s) in your cart`}
            </p>
          </motion.div>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-12 text-center"
            >
              <p className="text-gray-300 text-xl mb-6">No items in cart yet</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBackToHome}
                className="px-8 py-4 bg-gradient-to-r from-[#B11226] to-[#D61C3A] text-white rounded-full font-bold"
              >
                Continue Shopping
              </motion.button>
            </motion.div>
          ) : (
            <>
              {/* Cart Items List */}
              <div className="space-y-4 mb-8">
                {cart.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:border-white/30 transition-all"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Product Image */}
                      <div className="w-full md:w-32 h-32 rounded-xl overflow-hidden bg-gray-800/50 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                            <p className="text-gray-400 text-sm">{item.category}</p>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                              removeFromCart(item.id);
                              toast.success('Item removed from cart');
                            }}
                            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                          >
                            <Trash2 size={20} className="text-red-400" />
                          </motion.button>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3">
                            <span className="text-gray-300 text-sm font-medium">Qty:</span>
                            <div className="flex items-center gap-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-1">
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                              >
                                <Minus size={16} className="text-white" />
                              </motion.button>
                              <span className="text-white font-bold text-lg w-12 text-center">{item.quantity}</span>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                              >
                                <Plus size={16} className="text-white" />
                              </motion.button>
                            </div>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <p className="text-gray-400 text-sm">₹{item.price} × {item.quantity}</p>
                            <p className="text-white font-bold text-2xl">₹{item.price * item.quantity}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Cart Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">Total Amount:</h3>
                  <p className="text-4xl font-bold bg-gradient-to-r from-[#B11226] to-[#D61C3A] bg-clip-text text-transparent">
                    ₹{totalAmount}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(177, 18, 38, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowOrderForm(true)}
                  className="w-full py-5 bg-gradient-to-r from-[#B11226] to-[#D61C3A] text-white rounded-xl font-bold text-lg shadow-2xl transition-all flex items-center justify-center gap-2"
                >
                  <Send size={24} />
                  Place Order
                </motion.button>

                <p className="text-gray-400 text-sm text-center mt-4">
                  Secure checkout · Free consultation included
                </p>
              </motion.div>

              {/* Contact / Assistance Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 mt-8"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3">Need help with your order?</h3>
                  <p className="text-gray-300 text-base">
                    For bulk orders, product clarification, or custom requirements, contact us directly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Phone */}
                  <motion.a
                    href="tel:+917305274926"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-3 p-5 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl hover:bg-white/15 hover:border-white/30 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                      <Phone size={26} className="text-white" />
                    </div>
                    <div className="text-center">
                      <p className="text-white font-bold text-lg mb-1">Phone</p>
                      <p className="text-gray-300 text-sm">73052 74926</p>
                    </div>
                  </motion.a>

                  {/* WhatsApp */}
                  <motion.a
                    href="https://wa.me/919840461152"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-3 p-5 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl hover:bg-white/15 hover:border-white/30 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg group-hover:shadow-green-500/50 transition-shadow">
                      <MessageCircle size={26} className="text-white" />
                    </div>
                    <div className="text-center">
                      <p className="text-white font-bold text-lg mb-1">WhatsApp</p>
                      <p className="text-gray-300 text-sm">98404 61152</p>
                    </div>
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href="mailto:contact@sreevelmurugan.com"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-3 p-5 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl hover:bg-white/15 hover:border-white/30 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#B11226] to-[#D61C3A] flex items-center justify-center shadow-lg group-hover:shadow-[#B11226]/50 transition-shadow">
                      <Mail size={26} className="text-white" />
                    </div>
                    <div className="text-center">
                      <p className="text-white font-bold text-lg mb-1">Email</p>
                      <p className="text-gray-300 text-sm break-all">contact@sreevelmurugan.com</p>
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </section>

      {/* Order Form Modal */}
      {showOrderForm && (
        <OrderFormModal onClose={() => setShowOrderForm(false)} totalAmount={totalAmount} />
      )}
    </div>
  );
}