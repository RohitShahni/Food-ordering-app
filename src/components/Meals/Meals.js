import React, { Fragment } from 'react'
import AvailableMeals from './AvailableMeals';
import MealItemForm from './MealItemForm';
import MealsSummary from './MealSummary';

const Meals = () => {
  return (
<Fragment>
    <MealsSummary />
    <AvailableMeals />

</Fragment>
  )
}

export default Meals;