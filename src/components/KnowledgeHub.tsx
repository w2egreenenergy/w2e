/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { BLOG_POSTS } from "../data/blog";
import { BlogPost } from "../types";
import { Search, ChevronRight, BookOpen, Calendar, Clock, User, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function KnowledgeHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  const categories = ["ALL", "SATAT Scheme", "Agricultural Waste", "Renewable Energy", "Organic Fertilizer", "Circular Economy"];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "ALL" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blog" className="relative py-24 bg-[#0a0c0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block and Search Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-mono text-w2e-lime tracking-widest uppercase block mb-3">
              BIOENERGY DISCOURSE ENGINE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Knowledge Hub & Insights
            </h2>
            <div className="h-1 w-20 bg-linear-to-r from-w2e-green to-w2e-lime mt-4 mb-2 rounded-full" />
            <p className="text-gray-400 text-sm max-w-xl">
              Understand the thermodynamic, operational, and financial mechanics driving next-generation waste-to-energy infrastructure.
            </p>
          </div>

          {/* Search Inputs */}
          <div className="relative w-full lg:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-500" />
            <input
              type="text"
              placeholder="Search specifications, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.02] border border-white/10 hover:border-w2e-green/35 text-xs text-white rounded-lg pl-10 pr-4 py-3 placeholder-gray-500 focus:outline-hidden focus:border-w2e-lime focus:bg-[#0a0c0a] transition-all"
            />
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider font-semibold border transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-w2e-lime/10 border-w2e-lime text-w2e-lime"
                  : "bg-white/1 border-white/5 text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedArticle(post)}
              className="bg-white/5 backdrop-blur-xs border border-white/10 hover:border-[#8CC63F]/40 hover:bg-white/[0.08] p-6 rounded-2xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Micro tags */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-mono tracking-widest text-[#8CC63F] uppercase bg-w2e-green/10 border border-w2e-green/20 px-2 py-0.5 rounded-md">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-[9px] font-mono text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-base text-white group-hover:text-w2e-lime transition-all duration-200 mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-light mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Author & Read CTA */}
              <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-gray-400">
                  <User className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                  <span className="truncate max-w-[140px]">{post.author}</span>
                </div>
                <span className="flex items-center gap-0.5 text-[10px] font-mono text-[#8CC63F] group-hover:text-white font-bold transition-all">
                  READ ANALYSIS &rarr;
                </span>
              </div>
            </div>
          ))}

          {filteredPosts.length === 0 && (
            <div className="col-span-full py-12 text-center text-gray-500 text-sm font-mono border border-dashed border-white/10 rounded-xl">
              No scientific dossiers match the defined filter parameters.
            </div>
          )}
        </div>

      </div>

      {/* Blog Article Reader Modal popup */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-[#0a0c0a]/95 backdrop-blur-md border border-white/15 w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-10 rounded-2xl shadow-2xl flex flex-col justify-between"
            >
              
              <div>
                {/* Upper bar controls */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-w2e-lime bg-w2e-green/10 border border-w2e-green/20 px-3 py-1 rounded-md">
                    {selectedArticle.category}
                  </span>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="p-1.5 text-gray-400 hover:text-white border border-white/10 hover:border-white/20 rounded-md transition-all cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Article Header info */}
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white leading-snug mb-4">
                  {selectedArticle.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-500 mb-8 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{selectedArticle.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{selectedArticle.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    <span>{selectedArticle.author}</span>
                  </div>
                </div>

                {/* Simulated scientific post text */}
                <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                  <p>
                    {selectedArticle.excerpt}
                  </p>
                  <p>
                    Anaerobic digestates present a vital frontier in resolving rural agricultural residue management bottlenecks. Across Northern crop belts, open burning of paddy straw emits substantial tons of sulfur, toxic ash particulates, and dense greenhouse pollutants.
                  </p>
                  <div className="bg-w2e-green/5 border border-w2e-lime/10 p-5 rounded-xl font-mono text-xs text-w2e-lime-400 my-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-w2e-lime animate-pulse" />
                      <span className="font-bold">ENGINEERING COMPLIANCE NOTATION</span>
                    </div>
                    Under SATAT Scheme directives, refined biomethane offtake pricing structures are indexed against long-term natural gas rates. This establishes highly liquid corporate cashflows that pay down initial biorefinery CAPEX outlays inside of 4 to 6 operational calendar years.
                  </div>
                  <p>
                    Our complete EPC engineering layouts ensure direct compliance with FCCO (Fertilizer Control Order) regulations, creating highly soluble soil-nutrient slurries rich in nitrogen fixing microorganisms. By returning these bio-slurries directly to crop zones, farm cooperatives can eliminate localized chemical fertilizer overhead cost bills entirely.
                  </p>
                </div>
              </div>

              {/* Back out button */}
              <div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-xs font-mono text-white rounded-lg transition-colors cursor-pointer"
                >
                  Close Dossier Reader
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
