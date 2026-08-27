import FrontendLayout from "@/components/layouts/frontendLayout";
import NavBar from "@/components/navbar/Navbar";
import PropertyCard from "@/components/properties/PropertyCard";
import { dummyProperties } from "@/constants/dummyProperties";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import FilterButton from './../../components/marketplace/FilterButton';

function MarketPlace() {
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

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 my-4">
          {dummyProperties.map((property)=>(
            <PropertyCard key={property.id} property={property}/>
          ))}

        </div>

      </div>


    </FrontendLayout>

  )
}

export default MarketPlace