import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),

    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.image || !newProduct.price) {
            return { success: false, message: "Please fill in all fields." };
        }
        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        });
        const data = await res.json();
        set((state) => ({ products: [...state.products, data.data] }));
        return { success: true, message: "Product created successfully" };
    },

    fetchProducts: async () => {
        try {
            const res = await fetch("/api/products");
            const data = await res.json();

            // Log the fetched data to see the structure
            console.log("Fetched data:", data);

            // Check if the response contains the 'date' property and is an array
            if (data && Array.isArray(data.date)) {
                set({ products: data.date });
            } else {
                console.error("Unexpected API response format:", data);
                set({ products: [] }); // Ensure it's an empty array if the format is wrong
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            set({ products: [] }); // Ensure it's an empty array if there's an error
        }
    },

    deleteProduct: async (pid) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: "DELETE",
        });
        const data = await res.json();
        if (!data.success) return { success: false, message: data.message };

        // Update the UI immediately, without refreshing the page
        set(state => ({ products: state.products.filter(product => product._id !== pid) }));
        return { success: true, message: data.message }
    },

    updateProduct: async (pid, updatedProduc) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(updatedProduc),
        });
        const data = await res.json();
        if (!data.success) return { success: true, message: data.message };

        // Update the UI immediately, without refreshing the page
        set((state) => ({
            products: state.products.map((product) => (product._id === pid ? data.data : product)),
        }));

        return { success: true, message: data.message }
    },
}));
