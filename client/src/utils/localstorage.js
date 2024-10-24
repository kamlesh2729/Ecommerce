export const loadFromLocalStorage = () => {
  const savedCart = localStorage.getItem("Cartitem");
  return savedCart ? JSON.parse(savedCart) : [];
};


