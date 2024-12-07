function ServiceCard({ title, img, description, price }) {
  return (
    <div className="div bg-green-50  py-5 px-5 rounded mt-6 shadow-xl">
      <img src={img} alt="" className="mb-7" />
      <h1 className="text-4xl font-bold mb-3">{title}</h1>
      <p className="mb-6">{description}</p>
      <div className="flex justify-around items-center">
        <h2 className="font-bold text-2xl">{price}</h2>
        <button className="border-2 border-black rounded-xl px-7 py-2">
          Avail Service
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
