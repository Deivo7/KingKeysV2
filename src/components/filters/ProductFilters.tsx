import { useContext, useState } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Slider } from "../ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ShopContext } from "@/data/ShopContext";



interface FilterState {
  search: string;
  categories: string[];
  platforms: string[];
  priceRange: [number, number];
}

interface ProductFiltersProps {
  onFiltersChange: (filters: FilterState) => void;
  className?: string;
}

/*
const categories = [
  { id: "juegos-pc", label: "Juegos PC", count: 245 },
  { id: "divisas-juegos", label: "Divisas de Juegos", count: 89 },
  { id: "juegos-consola", label: "Juegos Consola", count: 156 },
  { id: "dlc-expansiones", label: "DLC y Expansiones", count: 78 },
  { id: "tarjetas-regalo", label: "Tarjetas Regalo", count: 34 },
  { id: "juegos-retro", label: "Juegos Retro", count: 67 },
];
const platforms = [
  "Steam",
  "Epic Games",
  "GOG",
  "Windows",
  "Mac",
  "PlayStation",
  "Xbox",
];*/

export function ProductFilters({
  onFiltersChange,
  className,
}: ProductFiltersProps) {

  const { platforms, categories } = useContext(ShopContext);
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    categories: [], // Por Default se estará seleccionado Dividad-juegos
    platforms: [],
    priceRange: [0, 200],
  });

  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);

  const updateFilters = (newFilters: Partial<FilterState>) => {
    const updated = { ...filters, ...newFilters };
    setFilters(updated);
    onFiltersChange(updated);
  };

  const toggleCategory = (categoryId: string) => {
    const newCategories = filters.categories.includes(categoryId)
      ? filters.categories.filter((id) => id !== categoryId)
      : [...filters.categories, categoryId];

    updateFilters({ categories: newCategories });
  };

  const togglePlatform = (platform: string) => {
    const newPlatforms = filters.platforms.includes(platform)
      ? filters.platforms.filter((p) => p !== platform)
      : [...filters.platforms, platform];

    updateFilters({ platforms: newPlatforms });
  };

  const clearAllFilters = () => {
    const cleared = {
      search: "",
      categories: [],
      platforms: [],
      priceRange: [0, 200] as [number, number],
    };
    setFilters(cleared);
    setAppliedFilters([]);
    onFiltersChange(cleared);
  };

  const removeFilter = (filterToRemove: string) => {
    setAppliedFilters((prev) => prev.filter((f) => f !== filterToRemove));
  };

  return (
    <div className={className}>
      {/* Filter Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5" />
          <h2 className="text-lg font-semibold">Filters</h2>
        </div>
        <span className="text-sm text-secondary-600">6 products found</span>
      </div>

      {/* Applied Filters */}
      {appliedFilters.length > 0 && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-2">
            {appliedFilters.map((filter) => (
              <Badge
                key={filter}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {filter}
                <X
                  className="w-3 h-3 cursor-pointer"
                  onClick={() => removeFilter(filter)}
                />
              </Badge>
            ))}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-primary hover:text-primary-600"
          >
            Clear All Filters
          </Button>
        </div>
      )}

      {/* Search */}
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Search</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Search products..."
            value={filters.search}
            onChange={(e) => updateFilters({ search: e.target.value })}
          />
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={category.name}
                  checked={filters.categories.includes(category.name)}
                  onCheckedChange={() => toggleCategory(category.name)}
                />
                <Label
                  htmlFor={category.id}
                  className="text-sm font-normal cursor-pointer"
                >
                  {category.name}
                </Label>
              </div>
               {/* <span className="text-xs text-secondary-500">
                ({category.count})
              </span>*/}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Platforms */}
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Platforms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {platforms.map((platform) => (
          <div key={platform.id} className="flex items-center space-x-2">
            <Checkbox
              id={platform.name}
              checked={filters.platforms.includes(platform.name)}
              onCheckedChange={() => togglePlatform(platform.name)}
            />
            <Label
              htmlFor={platform.name}
              className="text-sm font-normal cursor-pointer"
            >
              {platform.name}
            </Label>
          </div>
        ))}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Price Range</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider
              value={filters.priceRange}
              onValueChange={(value) =>
                updateFilters({ priceRange: value as [number, number] })
              }
              max={200}
              step={1}
              className="w-full"
            />
            <div className="flex items-center justify-between text-sm text-secondary-600">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}+</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
