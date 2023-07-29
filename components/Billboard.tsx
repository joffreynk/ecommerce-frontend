import { Billboard as BillboardTypes } from "@/types"

const BillboardPage= ({data}: {data: BillboardTypes}) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{backgroundImage: `url(${data?.imgUrl})`}}
      >
        <div className="h-full w-full flex flex-col justify-center items-center gap-y-8">
          <div>
            <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-blue-800 xl:text-7xl">
              {data?.label}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BillboardPage