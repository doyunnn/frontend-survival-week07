import RestaurantRow from './RestaurantRow';

import Restaurant from '../../../../types/Restaurant';

type RestaurantTableProps = {
  restaurants: Restaurant[];
};

export default function RestaurantTable({ restaurants }: RestaurantTableProps) {
  return (
    <table>
      <tbody>
        {restaurants?.map((restaurant) => (
          <RestaurantRow key={restaurant?.id} restaurant={restaurant} />
        ))}
      </tbody>
    </table>
  );
}