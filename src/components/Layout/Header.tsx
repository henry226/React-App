import mealsImage from '../../assets/meals.jpeg';
import classes from './Header.module.css';


function Headers(props: any) {
    return <>
    <header className={classes.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table of food" />
    </div>
    </>
}

export default Headers;