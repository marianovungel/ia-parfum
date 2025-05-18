// "use client"

import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
// import Slider from "@/components/Slider"
// import { WixClientContext } from "@/context/wixContext"
// import { useWixClient } from "@/hooks/useWixClient"
import Slider from "@/components/Slider"
import { Suspense, useContext, useEffect } from "react"
import { wixClientServer } from "../lib/wixClientServer"

const HomePage = async () => {

  // const wixContext = useWixClient()

  // useEffect(()=>{
  //   const getProducts = async ()=>{
  //     const res = await wixContext.products.queryProducts().find();
  //     console.log(res)
  //   }

  //   getProducts()
  // }, [wixContext])

  const WixClient = await wixClientServer();

  const res = await WixClient.products.queryProducts().find()

  console.log(res)


  return (
    <div className=''>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        {/* <ProductList /> */}
        <Suspense fallback={"Carregando..."}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_FEATURED_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl mb-12 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">Category</h1>
        <Suspense fallback={"Carregando..."}>
          <CategoryList />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        {/* <ProductList /> */}
      </div>
    </div>
  )
}

export default HomePage