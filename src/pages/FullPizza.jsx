import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const navigate = useNavigate();
  const { id } = useParams();
  // const params = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://63629fb837f2167d6f695270.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('ошибка при получении пиццы');
        navigate('/')
      }
    }

    fetchPizza();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!pizza) {
    return 'загрузка...';
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} руб</h4>
    </div>
  );
};

export default FullPizza;
