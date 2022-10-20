export default function CardHeader({ name, price }) {
  return (
    <header className="flex justify-around items-center  pl-5 pr-5">
      <div className="w-50 text-ellipsis mr-5 overflow-hidden">{name}</div>
      <div className="text-red-500 font-bold text-lg">￥{price}</div>
    </header>
  )
}
