import FrontendLayout from "@/components/layouts/frontendLayout";
import NavBar from "@/components/navbar/Navbar";
import FilterButton from './../../components/marketplace/FilterButton';
import MarketPlace from "@/components/marketplace/MarketPlace";
import { Suspense } from "react";
import CardSkeleton from "@/components/skeletons/CardSkeleton";

type MarketPageProps = {
  searchParams:Promise<{
    search?: string;
    propertyType?: string;
    location?: string;
    address?: string;
    minPrice?: number;
    maxPrice?: number;
  }>
}

async function MarketPage({searchParams}:MarketPageProps) {
  const params = await searchParams;
  return (
    <FrontendLayout>
      <NavBar variant="solid" />
      <div className="mx-auto max-w-7xl p-6 lg:px-12 w-full">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-text md:text-3xl">
            Explore
          </h2>
          <FilterButton/>
        </div>

        <Suspense fallback={<CardSkeleton/>}>
          <MarketPlace searchParams={params}/>
        </Suspense>
        
      </div>
    </FrontendLayout>
  )
}

export default MarketPage