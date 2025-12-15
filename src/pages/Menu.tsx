import { useState, useEffect } from "react";
import { Search, Plus, Minus, ShoppingCart, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { menuItems, categories, categoryTree } from "../data/menuData";
import { MenuItem } from "../types";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);
  const [showFilters, setShowFilters] = useState(false);

  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  /* ================= QUANTITY ================= */
  const updateQuantity = (id: string, value: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + value),
    }));
  };

  /* ================= ADD TO CART ================= */
  const handleAddToCart = (item: MenuItem) => {
    const qty = quantities[item.id] || 1;

    addToCart(
      {
        ...item,
        category: item.category,
        subcategory: item.subcategory || "N/A",
      },
      qty
    );

    setAddedItems((prev) => ({ ...prev, [item.id]: true }));

    const note = document.createElement("div");
    note.className =
      "fixed top-24 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-xl z-50";
    note.textContent = "Added to cart!";
    document.body.appendChild(note);
    setTimeout(() => note.remove(), 3000);
  };

  /* ================= FILTER ================= */
  const filteredItems = menuItems
    .filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      const matchesSubcategory =
        selectedSubcategory === "All" ||
        item.subcategory === selectedSubcategory;

      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSubcategory && matchesSearch;
    })
    .slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(12);
  }, [selectedCategory, selectedSubcategory, searchQuery]);

  const subcategories =
    selectedCategory === "All" ? [] : categoryTree[selectedCategory] || [];

  return (
    <div className="min-h-screen bg-slate-900 pt-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= CATEGORY BAR ================= */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedSubcategory("All");
              }}
              className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition ${
                selectedCategory === cat
                  ? "bg-[#895129] text-white"
                  : "bg-slate-800 text-gray-300 hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ================= MOBILE FILTER BUTTON ================= */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setShowFilters(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#895129] text-white rounded-lg"
          >
            <Filter className="w-5 h-5" /> Filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* ================= SIDEBAR (NO SCROLL / NO HEIGHT GROW) ================= */}
          <aside
            className={`
              bg-slate-800/50 p-6 rounded-xl border border-amber-500/20
              h-fit
              md:sticky md:top-24
              md:max-h-[calc(100vh-6rem)]
              md:overflow-hidden
              transition-all duration-300
              z-40

              ${showFilters
                ? "fixed top-0 left-0 w-64 h-full bg-slate-900 shadow-xl"
                : "hidden md:block"}
            `}
          >
            {showFilters && (
              <button
                onClick={() => setShowFilters(false)}
                className="text-white mb-6"
              >
                Close ✕
              </button>
            )}

            {selectedCategory !== "All" && (
              <>
                <h3 className="text-white font-semibold mb-3">
                  Subcategories
                </h3>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setSelectedSubcategory("All");
                      setShowFilters(false);
                    }}
                    className={`px-4 py-2 rounded-lg ${
                      selectedSubcategory === "All"
                        ? "bg-[#895129] text-white"
                        : "bg-slate-700/40 text-gray-300"
                    }`}
                  >
                    All
                  </button>

                  {subcategories.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => {
                        setSelectedSubcategory(sub);
                        setShowFilters(false);
                      }}
                      className={`px-4 py-2 rounded-lg text-left truncate ${
                        selectedSubcategory === sub
                          ? "bg-[#895129] text-white"
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

          {/* ================= PRODUCT SECTION (ONLY THIS SCROLLS) ================= */}
          <main
            className="
              md:col-span-3
              max-h-[calc(100vh-6rem)]
              overflow-y-auto
              pr-2
            "
          >
            {/* SEARCH */}
            <div className="relative mb-8 max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white w-5 h-5" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search menu..."
                className="w-full pl-12 pr-4 py-3 bg-slate-800 text-white rounded-full"
              />
            </div>

            {/* PRODUCTS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => {
                const quantity = quantities[item.id] || 1;

                return (
                  <div
                    key={item.id}
                    className="bg-slate-800 rounded-2xl p-5 border border-amber-500/20"
                  >
                    <div
                      className="h-48 rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => navigate(`/product/${item.id}`)}
                    >
                      <img
                        src={item.image}
                        className="w-full h-full object-contain"
                        alt={item.name}
                      />
                    </div>

                    <h3 className="mt-4 text-white font-bold">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {item.description}
                    </p>

                    <span className="text-[#895129] font-bold block mt-2">
                      £{item.price.toFixed(2)}
                    </span>

                    {/* QUANTITY */}
                    <div className="flex justify-between items-center my-4">
                      <span className="text-gray-300">Quantity</span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 bg-slate-700 text-white rounded-full"
                        >
                          <Minus />
                        </button>
                        <span className="text-white font-bold">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 bg-slate-700 text-white rounded-full"
                        >
                          <Plus />
                        </button>
                      </div>
                    </div>

                    {/* ADD TO CART */}
                    <button
                      disabled={addedItems[item.id]}
                      onClick={() => handleAddToCart(item)}
                      className={`w-full py-3 rounded-full font-semibold flex items-center justify-center gap-2 ${
                        addedItems[item.id]
                          ? "bg-green-600"
                          : "bg-[#895129] hover:scale-105"
                      } text-white transition`}
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

            {/* VIEW MORE */}
            {menuItems.length > visibleCount && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setVisibleCount((p) => p + 12)}
                  className="px-10 py-3 rounded-full bg-[#895129] text-white font-semibold"
                >
                  View More
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Menu;
