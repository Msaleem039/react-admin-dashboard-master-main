import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import axios from "axios";

const CourseCategories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Fetch categories from the API
    axios
      .get("http://localhost:8000/api/categories")
      .then((response) => {
        setFilteredCategories(response.data); // assuming the API returns an array of categories
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setError("Failed to load categories");
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = filteredCategories.filter(
      (category) =>
        category.Category_Name.toLowerCase().includes(term) ||
        category.meta_Description.toLowerCase().includes(term)
    );
    setFilteredCategories(filtered);
  };

  const handleDelete = (id) => {
    // Send delete request to API
    axios
      .delete(`http://localhost:8000/api/categories/delete/${id}`)
      .then(() => {
        // On success, update the UI
        const updatedCategories = filteredCategories.filter((category) => category.id !== id);
        setFilteredCategories(updatedCategories);
      })
      .catch((error) => {
        console.error("Error deleting category:", error);
        setError("Failed to delete category");
      });
  };

  const isAddCategoryPage = location.pathname.includes("addcategory");

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {!isAddCategoryPage && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-100 cursor-pointer">Course Categories</h2>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search categories..."
                  className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </div>
              <Link to="addcategory">
                <button className="bg-blue-600 hover:bg-blue-500 hidden md:block text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300">
                  Add Category
                </button>
              </Link>
            </div>
          </div>

          {loading ? (
            <p className="text-gray-100">Loading categories...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {filteredCategories.map((category) => (
                    <motion.tr
                      key={category.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-100">{category.Category_Name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-300">{category.short_Description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            category.status ? "bg-green-800 text-green-100" : "bg-red-800 text-red-100"
                          }`}
                        >
                          {category.status ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        <button className="text-indigo-400 hover:text-indigo-300 mr-2">Edit</button>
                        <button
                          className="text-red-400 hover:text-red-300"
                          onClick={() => handleDelete(category.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      <Outlet />
    </motion.div>
  );
};

export default CourseCategories;
