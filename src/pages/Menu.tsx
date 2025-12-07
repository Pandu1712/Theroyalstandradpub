import { useState } from "react";
import { Search, Plus, Minus, ShoppingCart, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { menuItems, categories, categoryTree } from "../data/menuData";
import { MenuItem } from "../types";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const updateQuantity = (id: string, value: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + value),
    }));
  };

  const handleAddToCart = (item: MenuItem) => {
    const qty = quantities[item.id] || 1;
    addToCart(item, qty);

    setAddedItems((prev) => ({ ...prev, [item.id]: true }));

    const note = document.createElement("div");
    note.className =
      "fixed top-24 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-xl z-50 animate-slide-in";
    note.textContent = "Added to cart!";
    document.body.appendChild(note);
    setTimeout(() => note.remove(), 3000);
  };

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    const matchesSubcategory =
      selectedSubcategory === "All" ||
      item.subcategory === selectedSubcategory;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  const subcategories =
    selectedCategory === "All" ? [] : categoryTree[selectedCategory] || [];

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-16">
      <style>
        {`
          .tag-animate {
            animation: fadeSlide 0.4s ease forwards;
            opacity: 0;
            transform: translateY(-8px);
          }
          @keyframes fadeSlide {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP CATEGORY BAR */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {categories.map((cat: string) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedSubcategory("All");
              }}
              className={`whitespace-nowrap px-6 py-3 rounded-full font-medium transition-all text-sm
                ${
                  selectedCategory === cat
                    ? "bg-[#895129] text-white shadow-md"
                    : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-amber-500/20"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* MOBILE FILTER BUTTON */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setShowFilters(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#895129] text-white rounded-lg w-fit shadow-md"
          >
            <Filter className="w-5 h-5" /> Filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* SIDEBAR */}
          <aside
            className={`
              bg-slate-800/50 p-6 rounded-xl border border-amber-500/20 h-fit md:sticky md:top-24
              transition-all duration-300 z-50
              ${showFilters ? "block fixed top-0 left-0 h-full w-64 p-8 md:w-auto bg-slate-900 shadow-xl" : "hidden md:block"}
            `}
          >
            {showFilters && (
              <button
                onClick={() => setShowFilters(false)}
                className="text-white mb-6 md:hidden"
              >
                Close ✕
              </button>
            )}

            {/* SUBCATEGORY SECTION */}
            {selectedCategory !== "All" && (
              <>
                <h3 className="text-white font-semibold mb-3">Subcategory</h3>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setSelectedSubcategory("All");
                      setShowFilters(false);
                    }}
                    className={`px-4 py-2 rounded-lg ${
                      selectedSubcategory === "All"
                        ? "bg-amber-600 text-white"
                        : "bg-slate-700/40 text-gray-300 hover:bg-slate-700/60"
                    }`}
                  >
                    All
                  </button>

                  {subcategories.map((sub: string) => (
                    <button
                      key={sub}
                      onClick={() => {
                        setSelectedSubcategory(sub);
                        setShowFilters(false);
                      }}
                      className={`px-4 py-2 rounded-lg ${
                        selectedSubcategory === sub
                          ? "bg-amber-600 text-white"
                          : "bg-slate-700/40 text-gray-300 hover:bg-slate-700/60"
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              </>
            )}
          </aside>

          {/* MAIN SECTION */}
          <main className="md:col-span-3">

            {/* SEARCH */}
            <div className="relative mb-8 max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />

              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search menu..."
                className="w-full pl-12 pr-4 py-3 bg-slate-800/70 rounded-full border border-amber-500/30 text-white placeholder-gray-400"
              />
            </div>

            {/* ITEMS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.slice(0, visibleCount).map((item: MenuItem) => {
                const quantity = quantities[item.id] || 1;

                return (
                  <div
                    key={item.id}
                    className="bg-slate-800/40 rounded-2xl border border-amber-500/20 p-5 hover:-translate-y-2 transition-all"
                  >
                    {/* IMAGE + TAG */}
                    <div
                      className="relative h-48 overflow-hidden rounded-lg cursor-pointer"
                      onClick={() => navigate(`/product/${item.id}`)}
                    >
                      <span
                        className="absolute top-2 left-2 bg-[#895129] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10 tag-animate"
                      >
                        {item.subcategory || item.category}
                      </span>

                      <img
                        src={item.image}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* TEXT CONTENT */}
                    <h3 className="mt-4 text-white font-bold">{item.name}</h3>
                    <p className="text-gray-400 text-sm mb-2">{item.description}</p>

                    <span className="text-[#895129] font-bold block mb-4">
                      £{item.price.toFixed(2)}
                    </span>

                    {/* QUANTITY */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-300">Quantity</span>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center"
                        >
                          <Minus />
                        </button>

                        <span className="text-white font-bold w-6 text-center">
                          {quantity}
                        </span>

                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center"
                        >
                          <Plus />
                        </button>
                      </div>
                    </div>

                    {/* ADD TO CART */}
                    <button
                      disabled={addedItems[item.id]}
                      onClick={() => handleAddToCart(item)}
                      className={`w-full py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition ${
                        addedItems[item.id]
                          ? "bg-green-600 cursor-not-allowed"
                          : "bg-[#895129] hover:scale-105"
                      } text-white`}
                    >
                      {addedItems[item.id] ? (
                        "Added"
                      ) : (
                        <>
                          <ShoppingCart className="w-5 h-5" />
                          Add – £{(item.price * quantity).toFixed(2)}
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Menu;
