import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { NewsArticle } from '../types';
import { Calendar, User, ArrowRight, Newspaper } from 'lucide-react';

export const MediaNews: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await api.getNews();
        setArticles(data);
      } catch (err) {
        console.error('Failed to load news', err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="bg-[#fafaf7] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-700 text-xs font-bold uppercase tracking-widest block mb-2">
            Newsroom & Press Center
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Latest Media & Company Announcements
          </h1>
          <p className="text-slate-600 text-sm mt-4 leading-relaxed">
            Stay abreast of our latest international market expansions, export records,
            sustainability benchmarks, and agronomy recognitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-lg hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-52 bg-slate-900 overflow-hidden relative">
                  <img
                    src={item.cover_image_url || 'https://images.unsplash.com/photo-1596797882870-8c33deeac224?auto=format&fit=crop&w=800&q=80'}
                    alt={item.title}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/90 text-amber-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-amber-500/30">
                    {item.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-3 text-[11px] text-slate-400 mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {new Date(item.published_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <User className="w-3.5 h-3.5 mr-1" />
                      {item.author}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-slate-900 line-clamp-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-50 mt-4">
                <span className="text-xs font-bold text-amber-700 hover:text-amber-800 inline-flex items-center cursor-pointer">
                  Read Full Article
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
