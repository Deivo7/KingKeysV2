import { useState, useEffect, useContext } from "react";
import { Grid, List, SlidersHorizontal } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductFilters } from "@/components/filters/ProductFilters";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
//import { getProductsByCategory, filterProducts } from "@/data/products";
import { cn } from "@/lib/utils";
import { ShopContext } from "@/data/ShopContext";

type ViewMode = "grid" | "list";
type SortOption =
  | "name-asc"
  | "name-desc"
  | "price-asc"
  | "price-desc"
  | "rating-desc";

interface FilterState {
  search: string;
  categories: string[];
  platforms: string[];
  priceRange: [number, number];
}

export function GiftCards() {
  const { getProductsByCategory, filterProducts } = useContext(ShopContext); // <--- Aquí obtienes los productos desde contexto

  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [sortBy, setSortBy] = useState<SortOption>("name-asc");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    categories: [],
    platforms: [],
    priceRange: [0, 200],
  });

  // Handle search from URL params
  useEffect(() => {
    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      setFilters((prev) => ({
        ...prev,
        search: searchQuery,
      }));
    }
  }, [searchParams]);

  const allProducts = getProductsByCategory("gift-cards");

  // Apply filters using the new filterProducts function
  /*let filteredProducts = filterProducts(allProducts, {
    search: filters.search,
    categories: filters.categories,
    platforms: filters.platforms,
    priceRange: filters.priceRange,
  });*/
  let filteredProducts = filterProducts({
    search: filters.search,
    categories: filters.categories,
    platforms: filters.platforms,
    priceRange: filters.priceRange,
  });

  // Apply sorting
  filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.title.localeCompare(b.title);
      case "name-desc":
        return b.title.localeCompare(a.title);
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating-desc":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Productos</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Gift Cards</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
          <div className="bg-white shadow-lg p-6 my-8 border border-gray-200 rounded-md">
              <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Gift Cards Gaming
              </h1>
              <p className="text-secondary-600">
                Tarjetas regalo para todas las plataformas digitales
              </p>
            </div>
          </div>
  

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className={cn("lg:block", showFilters ? "block" : "hidden")}>
            <ProductFilters
              onFiltersChange={setFilters}
              className="sticky top-4"
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filtros
                </Button>

                <span className="text-sm text-secondary-600 font-bold">
                  {filteredProducts.length} productos encontrados
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Select
                  value={sortBy}
                  onValueChange={(value: SortOption) => setSortBy(value)}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name-asc">Nombre A-Z</SelectItem>
                    <SelectItem value="name-desc">Nombre Z-A</SelectItem>
                    <SelectItem value="price-asc">
                      Precio: Menor a Mayor
                    </SelectItem>
                    <SelectItem value="price-desc">
                      Precio: Mayor a Menor
                    </SelectItem>
                    <SelectItem value="rating-desc">Mejor Valorados</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex items-center border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none border-r"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="text-center py-12">
                <p className="text-secondary-600">
                  No se encontraron gift cards que coincidan con tus criterios.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
