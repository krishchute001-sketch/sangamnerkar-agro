import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { api } from '../../services/api';
import { Inquiry, Product, Category } from '../../types';
import {
  Inbox,
  Package,
  LogOut,
  CheckCircle,
  Clock,
  Trash2,
  Plus,
  RefreshCw,
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'inquiries' | 'products'>('inquiries');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  // New Product Modal State
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    slug: '',
    tagline: '',
    category_id: '',
    description: '',
    grain_length_mm: '8.2 mm',
    aging_duration: '18 Months',
    aroma_profile: 'Aromatic Floral',
    is_featured: true,
    is_export_grade: true,
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
      return;
    }
    loadData();
  }, [isAuthenticated, navigate]);

  const loadData = async () => {
    setLoading(true);
    try {
      const [inq, prods, cats] = await Promise.all([
        api.getAdminInquiries().catch(() => []),
        api.getProducts(),
        api.getCategories(),
      ]);
      setInquiries(inq);
      setProducts(prods);
      setCategories(cats);
      if (cats.length > 0 && !newProduct.category_id) {
        setNewProduct((prev) => ({ ...prev, category_id: cats[0].id }));
      }
    } catch (err) {
      console.error('Failed to load admin data', err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (inquiryId: string, newStatus: string) => {
    try {
      await api.updateInquiryStatus(inquiryId, newStatus);
      setInquiries((prev) =>
        prev.map((item) => (item.id === inquiryId ? { ...item, status: newStatus } : item))
      );
    } catch (err) {
      console.error('Failed to update inquiry status', err);
    }
  };

  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const created = await api.createProduct({
        ...newProduct,
        hero_image_url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
      });
      setProducts([created, ...products]);
      setShowAddProduct(false);
    } catch (err) {
      console.error('Failed to create product', err);
      setShowAddProduct(false);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      await api.deleteProduct(id);
      setProducts(products.filter((p) => p.id !== id));
    } catch (err) {
      console.error('Failed to delete product', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#070e1b] text-slate-200">
      {/* Top Admin Bar */}
      <header className="bg-[#0b1424] border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xl">🌾</span>
            <span className="font-heading text-lg font-bold text-amber-300">
              SANGAMNERKAR AGRO • Staff CMS
            </span>
          </div>

          <div className="flex items-center space-x-4 text-xs">
            <span className="text-slate-400">
              Logged in as: <strong className="text-amber-400">{user?.email || 'admin@sangamnerkaragro.com'}</strong>
            </span>
            <button
              onClick={() => {
                logout();
                navigate('/');
              }}
              className="px-3 py-1.5 rounded-lg bg-rose-950/60 border border-rose-800 text-rose-300 hover:bg-rose-900 transition-colors flex items-center"
            >
              <LogOut className="w-3.5 h-3.5 mr-1" />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Overview Stat Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-[#0e1728] p-6 rounded-2xl border border-slate-800 shadow-md">
            <span className="text-xs text-slate-400 uppercase tracking-wider block">Total B2B Inquiries</span>
            <span className="font-heading text-3xl font-bold text-amber-400 mt-2 block">
              {inquiries.length}
            </span>
          </div>

          <div className="bg-[#0e1728] p-6 rounded-2xl border border-slate-800 shadow-md">
            <span className="text-xs text-slate-400 uppercase tracking-wider block">Pending Review</span>
            <span className="font-heading text-3xl font-bold text-amber-400 mt-2 block">
              {inquiries.filter((i) => i.status === 'Pending').length}
            </span>
          </div>

          <div className="bg-[#0e1728] p-6 rounded-2xl border border-slate-800 shadow-md">
            <span className="text-xs text-slate-400 uppercase tracking-wider block">Catalog Products</span>
            <span className="font-heading text-3xl font-bold text-amber-400 mt-2 block">
              {products.length}
            </span>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex space-x-2 border-b border-slate-800 pb-4 mb-8">
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center transition-colors ${
              activeTab === 'inquiries'
                ? 'bg-amber-500 text-slate-950'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            <Inbox className="w-4 h-4 mr-2" />
            B2B Leads Inbox ({inquiries.length})
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center transition-colors ${
              activeTab === 'products'
                ? 'bg-amber-500 text-slate-950'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            <Package className="w-4 h-4 mr-2" />
            Products Manager ({products.length})
          </button>
        </div>

        {/* Tab 1: Inquiries Inbox */}
        {activeTab === 'inquiries' && (
          <div className="bg-[#0e1728] rounded-2xl border border-slate-800 overflow-hidden shadow-lg">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center">
              <h3 className="font-heading text-lg font-bold text-white">Commercial Trade Enquiries</h3>
              <button
                onClick={loadData}
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs inline-flex items-center"
              >
                <RefreshCw className="w-3.5 h-3.5 mr-1" />
                Refresh
              </button>
            </div>

            <div className="divide-y divide-slate-800/80">
              {inquiries.length === 0 ? (
                <div className="p-8 text-center text-xs text-slate-500">
                  No trade leads logged yet.
                </div>
              ) : (
                inquiries.map((inq) => (
                  <div key={inq.id} className="p-6 hover:bg-slate-900/50 transition-colors space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-bold text-white text-sm">{inq.full_name}</span>
                        {inq.company_name && (
                          <span className="text-slate-400 text-xs ml-2">({inq.company_name})</span>
                        )}
                        <span className="ml-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-950 border border-amber-800 text-amber-400">
                          {inq.inquiry_type}
                        </span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <select
                          value={inq.status}
                          onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                          className="bg-slate-900 border border-slate-700 rounded-lg text-xs px-2.5 py-1 text-slate-200 focus:outline-none"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Reviewed">Reviewed</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-400">
                      <div>Email: <a href={`mailto:${inq.email}`} className="text-amber-400 hover:underline">{inq.email}</a></div>
                      <div>Phone: {inq.phone}</div>
                      <div>Destination: {inq.country}</div>
                      {inq.product_interest && <div>Product: {inq.product_interest}</div>}
                      {inq.quantity_metric_tons && <div>Quantity: {inq.quantity_metric_tons}</div>}
                    </div>

                    <p className="text-xs text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800 leading-relaxed">
                      "{inq.message}"
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Products Manager */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-heading text-lg font-bold text-white">Catalog Products</h3>
              <button
                onClick={() => setShowAddProduct(true)}
                className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center hover:bg-amber-400 transition-colors shadow-md"
              >
                <Plus className="w-4 h-4 mr-1" />
                Add New Grain Product
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <div key={p.id} className="bg-[#0e1728] rounded-2xl border border-slate-800 p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider block mb-1">
                      {p.category?.name || 'Grain Range'}
                    </span>
                    <h4 className="font-heading text-base font-bold text-white">{p.name}</h4>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2">{p.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-[10px]">
                      {p.grain_length_mm && <span className="bg-slate-900 px-2 py-0.5 rounded text-slate-300">{p.grain_length_mm}</span>}
                      {p.aging_duration && <span className="bg-slate-900 px-2 py-0.5 rounded text-slate-300">{p.aging_duration}</span>}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] text-emerald-400">● Live on Website</span>
                    <button
                      onClick={() => handleDeleteProduct(p.id)}
                      className="text-slate-500 hover:text-rose-400 p-1.5 transition-colors"
                      title="Delete Product"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal: Add New Product */}
        {showAddProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4">
            <div className="bg-[#0d1627] border border-amber-900/50 rounded-3xl max-w-lg w-full p-8 shadow-2xl">
              <h3 className="font-heading text-xl font-bold text-white mb-4">Add New Grain Offering</h3>

              <form onSubmit={handleCreateProduct} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 mb-1">Product Name *</label>
                  <input
                    required
                    type="text"
                    value={newProduct.name}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        name: e.target.value,
                        slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
                      })
                    }
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white"
                    placeholder="e.g. Heritage Balaghat Chinnor Aromatic Special"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">Category *</label>
                  <select
                    value={newProduct.category_id}
                    onChange={(e) => setNewProduct({ ...newProduct, category_id: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white"
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">Tagline</label>
                  <input
                    type="text"
                    value={newProduct.tagline}
                    onChange={(e) => setNewProduct({ ...newProduct, tagline: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white"
                    placeholder="e.g. Extra Long Aged 2 Years"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">Description</label>
                  <textarea
                    rows={3}
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white"
                    placeholder="Product profile and agronomic details..."
                  ></textarea>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddProduct(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold uppercase tracking-wider"
                  >
                    Publish Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
