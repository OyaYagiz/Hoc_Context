const Card = ({ product }) => {
  // context yapısında sepete ekleme fonksiyonuna aldık

  return (
    <div className="card py-2" style={{ width: "250px" }}>
      <div className="d-flex justify-content-center">
        <img src={product.image} height={120} className="object-fit-contain" />
      </div>

      <div className="card-body">
        <h4 className="text-truncate">{product.title}</h4>
        <p>{product.price}</p>
        <p>{product.category}</p>
        <button className="w-100 rounded">Sepete Ekle</button>
      </div>
    </div>
  );
};

export default Card;
